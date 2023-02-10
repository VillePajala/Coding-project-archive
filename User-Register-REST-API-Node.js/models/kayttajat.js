const fs = require("fs");
const tiedostonimi = "./models/loki.json";
const mysql = require("mysql");
const crypto = require("crypto");


const yhteys = mysql.createConnection({
                                        host     : "localhost",
                                        user     : "root",
                                        password : "",
                                        database : "kayttajarekisteri"
                                    });

yhteys.connect((err) => {

    if(!err) {
        console.log("Tietokantayhteys avattu");  
    } else {
        throw `Virhe yhdistettäessä tietokantaan: ${err}`;  
    }
});


module.exports = {


    "haeKaikki" : (callback) => {
        let sql = `SELECT * FROM kayttajat`;   

        yhteys.query(sql, (err, data) => {
            callback(err, data);
        });
    },


    "lisaaUusi" : (kayttaja, callback) => {     

        let tiiviste = crypto.createHash("SHA256").update(kayttaja.salasana).digest("hex");
        let sql = `INSERT INTO kayttajat ( sukunimi, etunimi, sahkoposti, kayttajatunnus, salasana) VALUES (?, ?, ?, ?, ?)`;   

        yhteys.query(sql, [kayttaja.sukunimi, kayttaja.etunimi, kayttaja.sahkoposti, kayttaja.kayttajatunnus, tiiviste], (err, data) => {
            callback(err, data);
        });
    },


    "paivitaTiedot" : (kayttaja, callback) => {
    
        if (kayttaja.salasana == '') {
            let sql = `UPDATE kayttajat SET sukunimi = ?, etunimi = ?, sahkoposti = ?, kayttajatunnus = ? WHERE id = ?`;   
            
            yhteys.query(sql, [kayttaja.sukunimi, kayttaja.etunimi, kayttaja.sahkoposti, kayttaja.kayttajatunnus, kayttaja.id], (err, data) => {
                callback(err, data);
            });
           
        } else {
            let tiiviste = crypto.createHash("SHA256").update(kayttaja.salasana).digest("hex");
            let sql = `UPDATE kayttajat SET sukunimi = ?, etunimi = ?, sahkoposti = ?, kayttajatunnus = ?, salasana = ? WHERE id = ?`;   
            
            yhteys.query(sql, [kayttaja.sukunimi, kayttaja.etunimi, kayttaja.sahkoposti, kayttaja.kayttajatunnus, tiiviste, kayttaja.id], (err, data) => {
                callback(err, data);
            });
        }  
    },


    "poistaKayttaja" : (kayttaja, callback) => {    
        let sql = `DELETE FROM kayttajat WHERE id = ?`;   

        yhteys.query(sql, [kayttaja.id], (err, data) => {
            callback(err, data);
        });
    },


    "lisaaLokiin" : (uusi, callback) => {          
        let aika = new Date();
        let paiva = aika.getDate();
        let kuukausi = aika.getMonth(); 
        let vuosi = aika.getFullYear();
        let tunti = aika.getHours();
        let minuutti = (aika.getMinutes() < 10 ? "0" : '' ) + aika.getMinutes();
        let sekunti = (aika.getSeconds() < 10 ? "0" : '' ) + aika.getSeconds()
        let aikaleima = paiva + "." +(kuukausi + 1) + "." + vuosi + " klo " + tunti + ":" + minuutti + ":" + sekunti;

        let uusiLoki = {
                "metodi" : uusi.metodi,
                "aika" : aikaleima,
                "kayttajanimi" : uusi.kayttajanimi
                    };
        
        fs.readFile(tiedostonimi, "utf-8", (err, data) => {
            if (err) throw err;
            let lokitiedot = JSON.parse(data);
            lokitiedot.push(uusiLoki);

            fs.writeFile(tiedostonimi, JSON.stringify(lokitiedot, null, 2), (err) => {
                if (err) throw err;
                callback();
            });
        });
    }
}



