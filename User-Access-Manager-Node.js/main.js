const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const crypto = require("crypto");
const uutispalvelu = require("./models/uutispalvelu");  // Haetaan oma moduuli uutispalvelu.js

const portti = 3006;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { "extended" : true } ));

app.use(express.static("./public"));

app.use(session({                       
    "name" : "Uutispalvelu.fi",
    "secret" : "SuuriSalaisuus!", 
    "resave" : false, 
    "saveUninitialized" : false,
    cookie: {
        maxAge : false
    }
}));


app.get("/", (req, res) => { 

    let uutiset = uutispalvelu.haeKaikkiUutiset((uutiset) => {
        let kommentit = uutispalvelu.haeKaikkiKommentit((kommentit) => {
            res.render("index", { "uutiset" : uutiset, "kommentit" : kommentit, "kayttaja" : null });    
        }); 
    }); 

});


app.get("/kirjaudu/", (req, res) => {         
    res.render("login", { "virhe" : null });
});


app.get("/rekisteroidy/", (req, res) => {       
    res.render("register", { "virhe" : null });
});


app.post("/newuser/", (req, res) => {           

    uutispalvelu.luoKayttajaId( (kayttajaiId) => {
        let salasana = uutispalvelu.salaaSalasana(req.body.salasana);
        let uusiKayttaja = {
                            "kayttajaId" : kayttajaiId,
                            "kayttajatunnus" : req.body.tunnus,
                            "salasana" : salasana
                        };
        uutispalvelu.lisaaKayttaja(uusiKayttaja, () => {
            res.redirect("/kirjaudu");
        });
    });
});


app.use((req, res, next) => {

    if (!req.session.saaTulla && req.path != "/login/") {
        res.render("login", { "virhe" : null });
    } else {
        next();
    };
});


app.get("/etusivu/", (req, res) => { 

    let uutiset = uutispalvelu.haeKaikkiUutiset((uutiset) => {
        let kommentit = uutispalvelu.haeKaikkiKommentit((kommentit) => {
            res.render("index", { "uutiset" : uutiset, "kommentit" : kommentit, "kayttaja" : req.session.kayttaja });     
        }); 
    });   
});


app.post("/login/", (req, res) => { 

    if ( req.body.remember ) {
        let hour = 3600000;
        req.session.cookie.maxAge = 7 * 24 * hour; 
    } else {
        req.session.cookie.expires = false;
    }; 

    uutispalvelu.haeKayttaja(req.body.tunnus, (kayttaja) => {

        if (kayttaja) {
            let hash = crypto.createHash("SHA512").update(req.body.salasana).digest("hex");

            if (hash == kayttaja.salasana) {
                req.session.saaTulla = true;
                let sessioKayttaja = {
                                        "id": kayttaja.kayttajaId,
                                        "tunnus" : kayttaja.kayttajatunnus
                                    };

                req.session.kayttaja = sessioKayttaja;
                res.redirect("/etusivu/")
            } else {
                req.session.saaTulla = false;
                res.render("login", { "virhe" : "Virheellinen käyttäjätunnus tai salasana" });
            }

        } else {
            req.session.saaTulla = false;
            res.render("login", { "virhe" : "Virheellinen käyttäjätunnus tai salasana" });
        }

    });
});


app.post("/tallenna/:uutisId", (req, res) => {   

    let aikaleima = new Date().getTime(); 

    uutispalvelu.luoKommenttiId( (kommenttiId) => {
        let uusiKommentti = {
            "kommenttiId" : kommenttiId,
            "uutisId" : req.params.uutisId,
            "kayttajanimi" : req.session.kayttaja.tunnus,
            "kommentti" : req.body.kirjoitus,
            "aikaleima" : aikaleima
        };

        uutispalvelu.lisaaUusiKommentti(uusiKommentti, () => {
            let uutiset = uutispalvelu.haeKaikkiUutiset((uutiset) => {
                let kommentit = uutispalvelu.haeKaikkiKommentit((kommentit) => {
                    res.render("index", { "uutiset" : uutiset, "kommentit" : kommentit, "kayttaja" : req.session.kayttaja });  
                }); 
            });      
        });
    });
});


app.get("/logout/", (req, res) => { 
    req.session.saaTulla = false;
    res.redirect("/");
});


app.get("/poista/:kommenttiId", (req, res) => { 

    uutispalvelu.poistaKommentti(req.params.kommenttiId, () => {
        let uutiset = uutispalvelu.haeKaikkiUutiset((uutiset) => {
            let kommentit = uutispalvelu.haeKaikkiKommentit((kommentit) => {
                res.render("index", { "uutiset" : uutiset, "kommentit" : kommentit, "kayttaja" : req.session.kayttaja });     // 
            }); 
        });   
    }); 
});


app.listen(portti, () => {       
    console.log(`Palvelin käynnistyi porttiin: ${portti}`);
});