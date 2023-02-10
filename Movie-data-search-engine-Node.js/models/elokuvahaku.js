const mysql = require("mysql");

const yhteys = mysql.createConnection({
                                        host     : "localhost",
                                        user     : "root",
                                        password : "",
                                        database : "elokuvatietokanta"
                                    });


yhteys.connect((err) => {
    if(!err) {
        console.log("Tietokantayhteys avattu");  
    } else {
        throw `Virhe yhdistettäessä tietokantaan: ${err}`;  
    }
});

module.exports = {
    
    "hae" : (lomaketiedot, callback) => {
        let ehdot = [];
        let maara = "";

        if (lomaketiedot.aikavali[0] != "" && lomaketiedot.aikavali[1] != "") {
            let alinarvo = mysql.escape(lomaketiedot.aikavali[0]);
            let ylinarvo = mysql.escape(lomaketiedot.aikavali[1]);
            let aikavali = `(valmistumisvuosi BETWEEN ${alinarvo} AND ${ylinarvo})`;
            ehdot.push(aikavali);
        }

        if (lomaketiedot.tyylilaji) {
            let elokuvagenret;

            if (Array.isArray(lomaketiedot.tyylilaji)) {
                let genret = lomaketiedot.tyylilaji.map((genre) => {
                    return mysql.escape(genre);
                });
                elokuvagenret = genret.join(" OR kategoria = ");
            } else {
                elokuvagenret = mysql.escape(lomaketiedot.tyylilaji);
            }
            ehdot.push(`(kategoria = ${elokuvagenret})`);
        }

       let hakusana = mysql.escape(`%${lomaketiedot.hakusana}%`);

       if (lomaketiedot.kriteeri == "Elokuva") {
            hakusanaehdot = `(nimi LIKE ${hakusana})`;
            ehdot.push(hakusanaehdot);
        } else if (lomaketiedot.kriteeri == "Ohjaaja") {
            hakusanaehdot = `(ohjaajat LIKE ${hakusana})`;
            ehdot.push(hakusanaehdot);
        } else if (lomaketiedot.kriteeri == "Nayttelija") {
            hakusanaehdot = `(nayttelijat LIKE ${hakusana})`;
            ehdot.push(hakusanaehdot);
        }  else { 
            hakusanaehdot = `(nimi LIKE ${hakusana} OR ohjaajat LIKE ${hakusana} OR nayttelijat LIKE ${hakusana})`;
            ehdot.push(hakusanaehdot);
        }

        let taulunyhdistys = 'INNER JOIN kategoriat ON elokuvat.kategoria_id=kategoriat.kategoria_id';
        let sql = `SELECT * FROM elokuvat ${taulunyhdistys} WHERE ${ehdot.join(" AND ")} ${maara};`;   

        if (lomaketiedot.sort == "Nimen mukaan nousevasti") {
            sql = `SELECT * FROM elokuvat ${taulunyhdistys} WHERE ${ehdot.join(" AND ")} ORDER BY nimi ${maara};`;
        }

        if (lomaketiedot.sort == "Nimen mukaan laskevasti") {
            sql = `SELECT * FROM elokuvat ${taulunyhdistys} WHERE ${ehdot.join(" AND ")} ORDER BY nimi DESC ${maara};`;
        }

        if (lomaketiedot.sort == "Uusin ensin") {
            sql = `SELECT * FROM elokuvat ${taulunyhdistys} WHERE ${ehdot.join(" AND ")} ORDER BY valmistumisvuosi DESC ${maara};`;
        }

        if (lomaketiedot.sort == "Vanhin ensin") {
            sql = `SELECT * FROM elokuvat ${taulunyhdistys} WHERE ${ehdot.join(" AND ")} ORDER BY valmistumisvuosi ${maara};`;
        }

        yhteys.query(sql, (err, data) => {
            callback(err, data);
        });
    },


    "haeVuosiluvut" : (callback) => {
        let sql = `SELECT MIN(valmistumisvuosi) AS vanhinElokuva, MAX(valmistumisvuosi) AS uusinElokuva FROM elokuvat ORDER BY valmistumisvuosi ASC;`;

        yhteys.query(sql, (err, data) => {
            callback(err, data);
        });
    }

};






