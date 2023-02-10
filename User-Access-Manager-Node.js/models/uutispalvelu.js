const fs = require("fs");
const crypto = require("crypto");
const tiedostoUutiset = "./models/uutiset.json";
const tiedostoKayttajat = "./models/kayttajat.json";
const tiedostoKommentit = "./models/kommentit.json";

module.exports = {

    "haeKaikkiUutiset" : (callback) => {     

        fs.readFile(tiedostoUutiset, "utf-8", (err, data) => {
            if (err) throw err;
            return callback(JSON.parse(data));
        });
    },


    "haeKaikkiKommentit" : (callback) => {   

        fs.readFile(tiedostoKommentit, "utf-8", (err, data) => {
            if (err) throw err;
            return callback(JSON.parse(data));
        });
    },


    "lisaaUusiKommentti" : (uusi, callback) => {    

        fs.readFile(tiedostoKommentit, "utf-8", (err, data) => {

            if (err) throw err;
            let kommentit = JSON.parse(data);
            kommentit.push(uusi);

            fs.writeFile(tiedostoKommentit, JSON.stringify(kommentit, null, 2), (err) => {
                if (err) throw err;
                callback();
            });
        });
    },


    "haeKayttaja" : (tunnus, callback) => { 

        fs.readFile(tiedostoKayttajat, "utf-8", (err, data) => {
            if (err) throw err;
            let kayttajat = JSON.parse(data);

            let indeksi = kayttajat.findIndex((kayttaja) => {
                return kayttaja.kayttajatunnus == tunnus;
            });

            if (indeksi >= 0) {
                callback(kayttajat[indeksi]);
            } else {
                callback(null);
            }
        });
    },


    "luoKommenttiId" : (callback) => { 

        fs.readFile(tiedostoKommentit, "utf-8", (err, data) => {
            if (err) throw err;
            let kommentit = JSON.parse(data);
            let kommenttiId = kommentit.length + 1;
            callback(kommenttiId)
        });
    },


    "luoKayttajaId" : (callback) => { 

        fs.readFile(tiedostoKayttajat, "utf-8", (err, data) => {
            if (err) throw err;
            let kayttajat = JSON.parse(data);
            let kayttajaId = kayttajat.length + 1;
            callback(kayttajaId)
        });

    },

    "salaaSalasana" : (salasana, callback) => {  
        let tiiviste = crypto.createHash("SHA512").update(salasana).digest("hex");
        return tiiviste;
    },


    "lisaaKayttaja" : (uusi, callback) => { 

        fs.readFile(tiedostoKayttajat, "utf-8", (err, data) => {
            if (err) throw err;
            let kayttajat = JSON.parse(data);
            kayttajat.push(uusi);

            fs.writeFile(tiedostoKayttajat, JSON.stringify(kayttajat, null, 2), (err) => {
                if (err) throw err;
                callback();
            });
        });
    },

    "poistaKommentti" : (id, callback) => { 

        fs.readFile(tiedostoKommentit, "utf-8", (err, data) => {
            if (err) throw err;
            let kommentit = JSON.parse(data);

            kommentit.forEach(kommentti => {       
                if (kommentti.kommenttiId == id) {     
                    let indeksi = kommentit.indexOf(kommentti);    
                    kommentit.splice(indeksi, 1);    
                } 
            }); 

            fs.writeFile(tiedostoKommentit, JSON.stringify(kommentit, null, 2), (err) => {
                if (err) throw err;
                callback();
            });
        }); 
    }, 

};



