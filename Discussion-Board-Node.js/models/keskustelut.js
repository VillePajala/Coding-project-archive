const mysql = require("mysql");

const yhteys = mysql.createConnection({
                                        "host" : "localhost",
                                        "user" : "root",
                                        "password" : "",
                                        "database" : "keskustelupalsta"
                                      });

yhteys.connect((err) => {
    if (!err) {
        console.log("Yhteys tietokantapalvelimeen avattu!");
    } else {
        throw err;
    }
});                                      


module.exports = {

    haeKaikkikeskustelut : (callback) => {
        let sql = "SELECT * FROM keskustelut ORDER BY viimeisinkommentti DESC, aikaleima DESC";
        yhteys.query(sql, (err, data) => {
            callback(err, data);
        });
    },
    
    haekeskustelu : (id, callback) => {
        let sql = "SELECT * FROM keskustelut WHERE id = ?";
        yhteys.query(sql, [id], (err, data) => {
            callback(err, data);
        });
    },

    haeViestit : (id, callback) => {
        let sql = "SELECT * FROM viestit WHERE uutisid = ? ORDER BY aikaleima ASC ";
        yhteys.query(sql, [id], (err, tieto) => {
            callback(err, tieto);
        });
    },

    muokkaakeskustelua : (tiedot, callback) => {
        let sql = "UPDATE keskustelut SET nimi = ?, hinta = ? WHERE id = ?";
        yhteys.query(sql, [tiedot.nimi, tiedot.hinta, tiedot.id], (err) => {
            callback(err);            
        });
    },

    lisaaUusikeskustelu : (tiedot, callback) => {
        let sql = "INSERT INTO keskustelut (otsikko, sisalto, kirjoittaja, aikaleima) VALUES (?, ?, ?, ?)";
        yhteys.query(sql, [tiedot.otsikko, tiedot.kirjoitus, tiedot.nimi, tiedot.aikaleima], (err) => {
            callback(err);            

        });
    },

    lisaaUusiviesti : (viesti, callback) => {
        let sql = "INSERT INTO viestit (viesti, kirjoittaja, uutisid, aikaleima) VALUES (?, ?, ?, ?)";
        yhteys.query(sql, [viesti.kirjoitus, viesti.nimi, viesti.uutisid, viesti.aikaleima], (err) => {
            callback(err);            
        });
    },

    paivitaKommenttimaara : (id, callback) => {
        let sql = "SELECT viesti FROM viestit WHERE uutisid = ?";
        yhteys.query(sql, [id], (err, data) => {
            let maara = data.length + 1;
            let sql = "UPDATE keskustelut SET vastaukset = ? WHERE id = ?";
            yhteys.query(sql, [maara, id], (err) => {
                callback(err);            
            });
        });
    },

    paivitaViimeisin : (id, callback) => {
        let sql = "UPDATE keskustelut SET viimeisinkommentti = ? WHERE id = ?";
        let aikaleima = new Date().getTime();
        yhteys.query(sql, [aikaleima, id], (err) => {
            callback(err);            
        });
    }
};


