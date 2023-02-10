const express = require("express");
const app = express()
const bodyParser = require("body-parser");

const elokuvat = require("./models/elokuvahaku")

const portti = 3008; 

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));



app.post("/haku/", (req, res) => {


        // Koitin tässä saada ohjelman muistamaan valittujen tietueiden määrän, kun hakutulokset
        // järjestetään selaimessa filtteröinneillä. Varmaan olin aika lähellä ratkaisua, mutta koska kaikki muut vaatimukset on täytetty
        // ja tätäkään ei suoranaisesti oltu määritelty (ehkä) niin jätän tämän nyt tähän ja palautan. Ja pakko muutenkin mennä jo eteenpäin :)

        let tulostusmaara = 0;

        elokuvat.hae(req.body, (err, data) => {

            if (req.body.maara != null) {

                tulostusmaara = req.body.maara;

            } else if (req.body.tulostusmaara != null) {

                tulostusmaara = req.body.tulostusmaara;

            } else {

                tulostumaara = 0;

            }


        let tulosrivit = data;

        let tulokset = tulosrivit.length;

        let virhe = null;

        let ilmoitus = null;

        let lomaketiedot = req.body;
        
        if (err) {

            virhe = "Virhe tietokantayhteydessä. Yritä myöhemmin uudelleen.";

            tulosrivit = null;

        }

        // Vaatimuksissa sanotaan, että tyhjä salasana kelpaa, jos jokin muu hakuehto on voimassa.
        // Toteutin vaatimuksen nyt niin, että "muu hakuehto" tarkoittaa kategoriaa ja aikaväliä. Se, valitseeko hakukohteeksi
        // elokuvan, ohjaajat tai näyttelijät, ei vaikuta. Tämä tapa tuntui minusta järkevimmältä
        if (!req.body.tyylilaji && req.body.aikavali[0] == "" && req.body.aikavali[1] == "") {

            if (req.body.hakusana.length == 0) {

                virhe = "Hakusana puuttuu. Anna hakusana.";

                tulosrivit = null;
    
            } else if (req.body.hakusana.length == 1) {
    
                virhe = "Hakusana liian lyhyt. Anna hakusana, joka on pidempi kuin kaksi merkkiä.";

                tulosrivit = null;
    
            } else {
                
                if (tulosrivit.length == 0) {

                    virhe = 'Hakusanalla ' + '"' + req.body.hakusana + '" ' + 'ei löytynyt yhtään osumaa';

                    tulosrivit = null;
        
                } else {
                    
                    if (tulostusmaara == 0 && tulosrivit.length > 10) {
            
                        tulosrivit = tulosrivit.slice(0, 10);
    
                        ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 10 tulosta. Ole hyvä ja tarkenna hakua"
                        
                    }
    
                    if (tulostusmaara == 10 && tulosrivit.length > 10) {
        
                        tulosrivit = tulosrivit.slice(0, 10);
    
                        ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 10 tulosta. Ole hyvä ja tarkenna hakua"
                        
                    }
    
    
                    if (tulostusmaara == 25 && tulosrivit.length > 25) {
        
                        tulosrivit = tulosrivit.slice(0, 25);
    
                        ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 25 tulosta. Ole hyvä ja tarkenna hakua"
                        
                    }
    
                    if (tulostusmaara == 50 && tulosrivit.length > 50) {
    
                        tulosrivit = tulosrivit.slice(0, 50);
    
                        ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 50 tulosta. Ole hyvä ja tarkenna hakua"
                    
                    }
    
                    if (tulostusmaara == 100 && tulosrivit.length > 100) {
    
                        tulosrivit = tulosrivit.slice(0, 100);
    
                        ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 100 tulosta. Ole hyvä ja tarkenna hakua"
                        
                    }

                }

            }

        } else {
            
            if (tulosrivit.length == 0) {
                
                virhe = 'Hakusanalla ' + '"' + req.body.hakusana + '" ' + 'ei löytynyt yhtään osumaa';

                tulosrivit = null;
    
            } else {

                if (tulostusmaara == 0 && tulosrivit.length > 10) {
            
                    tulosrivit = tulosrivit.slice(0, 10);

                    ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 10 tulosta. Ole hyvä ja tarkenna hakua"
                    
                }

                if (tulostusmaara == 10 && tulosrivit.length > 10) {
    
                    tulosrivit = tulosrivit.slice(0, 10);

                    ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 10 tulosta. Ole hyvä ja tarkenna hakua"
                    
                }


                if (tulostusmaara == 25 && tulosrivit.length > 25) {
    
                    tulosrivit = tulosrivit.slice(0, 25);

                    ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 25 tulosta. Ole hyvä ja tarkenna hakua"
                    
                }

                if (tulostusmaara == 50 && tulosrivit.length > 50) {

                    tulosrivit = tulosrivit.slice(0, 50);

                    ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 50 tulosta. Ole hyvä ja tarkenna hakua"
                
                }

                if (tulostusmaara == 100 && tulosrivit.length > 100) {

                    tulosrivit = tulosrivit.slice(0, 100);

                    ilmoitus = "Haulla löytyi " + tulokset + " elokuvaa, näytetään vain ensimmäiset 100 tulosta. Ole hyvä ja tarkenna hakua"
                    
                }
            }
            
        }
        
        
        elokuvat.haeVuosiluvut((err, vuodet) => {

            let vuosiluvut = vuodet[0];

            if (err) throw err;
        
            res.render("index", { 
                                    "elokuvat" : tulosrivit, 
                                    "tulostusmaara" : tulostusmaara,
                                    "virhe" : virhe, 
                                    "lomaketiedot" : lomaketiedot,
                                    "ilmoitus" : ilmoitus,
                                    "vuosiluvut" : vuosiluvut
                                });

        });

    });

});


app.get("/", (req, res) => {


    elokuvat.haeVuosiluvut((err, vuodet) => {

        let vuosiluvut = vuodet[0];

        let tulostusmaara = 0;

        if (err) throw err;

        let lomakeoletukset = {
                                "hakusana" : null,
                                "kriteeri" : null,
                                "tyylilaji" : null
                                
                            };

        res.render("index", { 
                                "elokuvat" : null, 
                                "virhe" : null, 
                                "lomaketiedot" : lomakeoletukset,
                                "ilmoitus" : null,
                                "vuosiluvut" : vuosiluvut,
                                "tulostusmaara" : tulostusmaara
                            });
    
        

    });    
    
});



app.listen(portti, () => {
    
    console.log(`Palvelin käynnistyi porttiin ${portti}`);
    
});





