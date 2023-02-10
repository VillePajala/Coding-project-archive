import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  latitude : number;
  longitude : number;
  timestamp : number = 0;

  locations : any[] = [];
  db : SQLiteObject;

  constructor(private sqlite : SQLite, private platform : Platform) {

    this.openDatabase();

  }

  openDatabase = () : void => {
    this.platform.ready().then(async () => {
      this.db = await this.sqlite.create({
                                          name : 'data.db',
                                          location : 'default'
                                         });

      await this.db.executeSql("DROP TABLE locations;", []);
      await this.db.executeSql("CREATE TABLE IF NOT EXISTS locations (id INTEGER PRIMARY KEY, lat FLOAT, lon FLOAT, timestamp DOUBLE);", []);
      await this.db.executeSql("INSERT INTO locations (lat, lon, timestamp) VALUES ('kissa', 'kala', '1553628762');", []);
      this.updateList();


    });
  }


  updateList = async () : Promise<any> => {
    let result = await this.db.executeSql("SELECT * FROM locations", []);
    this.locations = [];
    for (let i = 0; i < result.rows.length; i++) {
      this.locations.push({
                            id : result.rows.item(i).id,
                            lat : result.rows.item(i).lat,
                            lon : result.rows.item(i).lon,
                            timestamp : result.rows.item(i).timestamp
                        });
    } 

  }

  addNewLocation = async (newLocation : any) : Promise<any> => {
    await this.db.executeSql("INSERT INTO locations (lat, lon, timestamp) VALUES (?, ?, ?);", [newLocation.timestamp1, newLocation.timestamp2, newLocation.timestamp3]);
    console.log('Executed SQL')
    this.updateList();
  }

}
