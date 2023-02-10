const restify = require("restify");
const server = restify.createServer();

const jwt = require("restify-jwt-community");
const corsMiddleWare = require("restify-cors-middleware");

const cors = corsMiddleWare({
                                "origins" : ['*'],
                                "allowHeaders" : ["Authorization"]
                            });

const kayttajat = require("./models/kayttajat");

const portti = 3111;

server.pre(restify.pre.sanitizePath()); 
server.pre(cors.preflight); 
server.use(restify.plugins.bodyParser()); 
server.use(cors.actual); 

server.on('InvalidCredentials', (req, res, error, next) => {
    let virhe = {
                    "virhe" : "Käyttöoikeudet eivät riitä tämän toiminnon suorittamiseen" 
                }

    res.send(401, virhe );
    return next();
});

server.on('MethodNotAllowed', (req, res, error, next) => {
    let virhe = {
                    "virhe" : "Metodi ei sallittu. Käyttöoikeudet eivät riitä tämän toiminnon suorittamiseen" 
                }

    res.send(400, virhe ); 
    return next();
});

server.get("/api/kayttajat", jwt({ "secret" : "kissakala", credentialsRequired: false }), (req, res, next) =>  {
    let lokitiedot;

    if (req.user) {
        lokitiedot = req.user;
    } else {
        lokitiedot = {
                    "kayttajanimi" : "tuntematon"
                    }
    };

    lokitiedot.metodi = "GET"; 
    
    kayttajat.lisaaLokiin (lokitiedot, (err, data) => {  
        return next();
    })

    kayttajat.haeKaikki((err, data) => {
        res.send(data);
        return next();
    });
});


server.post("/api/kayttajat", jwt({ "secret" : "kissakala" }), (req, res, next) =>  {
    let lokitiedot;

    if (req.user) {
        lokitiedot = req.user;
    } else {
        lokitiedot = {
                    "kayttajanimi" : "tuntematon"
                    }
    };

    lokitiedot.metodi = "POST";        
    
    kayttajat.lisaaLokiin (lokitiedot, (err, data) => {     
        return next();
    })

    if (!req.body.sukunimi || !req.body.etunimi || !req.body.sahkoposti || !req.body.kayttajatunnus || !req.body.salasana) {
        let sukunimi = "";
        let etunimi = "";
        let sahkoposti = "";
        let kayttajatunnus = "";
        let salasana = "";

        if (!req.body.sukunimi) {
            sukunimi = "Sukunimi";
        } 

        if (!req.body.etunimi) {
            etunimi = "etunimi";
        } 

        if (!req.body.sahkoposti) {
            sahkoposti = "sähkoposti";
        } 

        if (!req.body.kayttajatunnus) {
            kayttajatunnus = "tunnus";
        } 

        if (!req.body.salasana) {
            salasana = "salasana";
        } 

        let virhe = {
            "virhe" : "Seuraavat tiedot puuttuvat: " + sukunimi + " " + etunimi + " " + sahkoposti + " " + kayttajatunnus + " " + salasana + ". Anna puuttuva tiedot."
                    };

        res.send(401, virhe);

    } else {

        kayttajat.lisaaUusi(req.body, (err, data) => {
            res.redirect("/api/kayttajat", next);
            return next();
        });
    }
});


server.put("/api/kayttajat/:id", jwt({ "secret" : "kissakala" }), (req, res, next) =>  {
    let lokitiedot;

    if (req.user) {
        lokitiedot = req.user;
    } else {
        lokitiedot = {
                    "kayttajanimi" : "tuntematon"
                    }
    };

    lokitiedot.metodi = "PUT";        
    
    kayttajat.lisaaLokiin (lokitiedot, (err, data) => {     
        return next();
    })

    if (!req.body.sukunimi || !req.body.etunimi || !req.body.sahkoposti || !req.body.kayttajatunnus) {
        let sukunimi = "";
        let etunimi = "";
        let sahkoposti = "";
        let kayttajatunnus = "";

        if (!req.body.sukunimi) {
            sukunimi = "Sukunimi";
        } 

        if (!req.body.etunimi) {
            etunimi = "etunimi";
        } 

        if (!req.body.sahkoposti) {
            sahkoposti = "sähkoposti";
        } 

        if (!req.body.kayttajatunnus) {
            kayttajatunnus = "tunnus";
        } 


        let virhe = {
            "virhe" : "Seuraavat tiedot puuttuvat: " + sukunimi + " " + etunimi + " " + sahkoposti + " " + kayttajatunnus + ". Anna puuttuva tiedot."
        }

        res.send(401, virhe);
        
    } else {

        kayttajat.paivitaTiedot(req.body, (err, data) => {
            kayttajat.haeKaikki((err, data) => {
                res.send(data);
                return next();
            });
        });
    }
});


server.del("/api/kayttajat/:id", jwt({ "secret" : "kissakala" }), (req, res, next) =>  {
    let lokitiedot;

    if (req.user) {
        lokitiedot = req.user;
    } else {
        lokitiedot = {
                    "kayttajanimi" : "tuntematon"
                    }
    };

    lokitiedot.metodi = "DELETE";        
    
    kayttajat.lisaaLokiin (lokitiedot, (err, data) => {     
        return next();
    })

    kayttajat.poistaKayttaja(req.params, (err, data) => {
        kayttajat.haeKaikki((err, data) => {
            res.send(data);
            return next();
        });
    });
});


server.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin: ${portti}`)
});



