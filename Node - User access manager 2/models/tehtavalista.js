const mysql = require("mysql");
const yhteys = mysql.createConnection({ 
                                        "host" : "localhost",
                                        "user" : "root",
                                        "password" : "",
                                        "database" : "kayttajarekisteri"
                                      });

yhteys.connect((err) => {
    if (!err) {
        console.log("Tietokantayhteys avattu!");
    } else {
        console.log("Ei toimi!");
    }
});


module.exports = {

    "avaa" : (callback) => {
        yhteys.query("SELECT * FROM tehtavat", (err, rows) => {

            let rivit = rows.map((rivi) => {
                if (rivi.suoritettu == 1) {
                    rivi.suoritettu = true;                    
                } else {
                    rivi.suoritettu = false;                    
                }

                return rivi;
            });
            callback(err, rivit);
        });


    },


    "tallenna" : (uusidata, callback) => {
    
        yhteys.query("TRUNCATE TABLE tehtavat;", (err) => {
            let arvot = uusidata.map((tehtava) => {
                return Object.values(tehtava);
            });

            yhteys.query("INSERT INTO tehtavat (nimi, ohje, suoritettu) VALUES ?", [arvot], (err) => {
                callback(err, null);
            });
        });
    }    


}


