import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  sijainnit : any = [];
  kuvat : any = [];
  db : SQLiteObject;


  constructor(private sqlite : SQLite, private platform : Platform) {
    this.avaaTietokanta();
  }

  avaaTietokanta = () : void => {
    this.platform.ready().then(async () => {
      this.db = await this.sqlite.create({
                                    name : 'data.db',
                                    location : 'default'
                                   });

      // await this.db.executeSql("DROP TABLE sijainnit;", []);
      // await this.db.executeSql("DROP TABLE kuvat;", []);
      await this.db.executeSql("CREATE TABLE IF NOT EXISTS kuvat(id INTEGER PRIMARY KEY, image TEXT, sijaintiId INT, aikaleima DOUBLE);", []);
      await this.db.executeSql("CREATE TABLE IF NOT EXISTS sijainnit(id INTEGER PRIMARY KEY, nimi TEXT, ohje TEXT, lat FLOAT, lon, pvm TEXT, klo TEXT, aikaleima DOUBLE);", []);
      // await this.db.executeSql("INSERT INTO sijainnit (lat, lon, timestamp) VALUES ('60.21872', '25.2716209', '1554356894');", []);
      this.paivitaLista();
    });
  }

  paivitaLista = async () : Promise<any> => {
    let tulos = await this.db.executeSql("SELECT * FROM sijainnit", []);
    let tulos2 = await this.db.executeSql("SELECT * FROM kuvat", []);
    this.sijainnit = [];
    this.kuvat = [];

    for (let i = 0; i < tulos.rows.length; i++) {
      this.sijainnit.push({
                            id : tulos.rows.item(i).id,
                            nimi : tulos.rows.item(i).nimi,
                            ohje : tulos.rows.item(i).ohje,
                            lat : tulos.rows.item(i).lat,
                            lon : tulos.rows.item(i).lon,
                            pvm : tulos.rows.item(i).pvm,
                            klo : tulos.rows.item(i).klo,
                            aikaleima : tulos.rows.item(i).aikaleima,
                        });
    } 

    for (let i = 0; i < tulos2.rows.length; i++) {
      this.kuvat.push({
                        id : tulos2.rows.item(i).id,
                        kuva : tulos2.rows.item(i).image,
                        sijaintiId : tulos2.rows.item(i).sijaintiId,
                        aikaleima : tulos2.rows.item(i).aikaleima,
                    });
    } 
  }


  uusi = async (uusiSijainti) : Promise<any> => {
    console.log(uusiSijainti)
    await this.db.executeSql("INSERT INTO sijainnit (nimi, ohje, lat, lon, pvm, klo, aikaleima) VALUES (?, ?, ?, ?, ?, ?, ?);", [uusiSijainti.nimi, uusiSijainti.ohjeistus, uusiSijainti.lat, uusiSijainti.lon, uusiSijainti.pvm, uusiSijainti.klo, uusiSijainti.aikaleima]);
    this.paivitaLista();
  } 


  poista = async (sijaintiId : number, kuvaId : number) : Promise<any> => {
    await this.db.executeSql("DELETE FROM sijainnit WHERE aikaleima = ?;", [sijaintiId]);
    await this.db.executeSql("DELETE FROM kuvat WHERE sijaintiId = ?;", [kuvaId]);
    this.paivitaLista();
  } 


  paivitaKuvat = async (newItem) : Promise<any> => {
    await this.db.executeSql("INSERT INTO kuvat (image, sijaintiId, aikaleima) VALUES (?, ?, ?);", [newItem.image, newItem.id, newItem.timestamp]);
    this.paivitaLista();
  } 

}


