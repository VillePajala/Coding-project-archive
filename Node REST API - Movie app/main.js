const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const portti = 3012;

const omdb = require("./models/elokuvat");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { "extended" : true } ));


app.post("/hae", (req, res) => {

    omdb.etsiElokuva(req.body)
    .then((data) => {
        
        if (!data) {
            virhe = err.message;
            tulokset = null;
        } else {
            virhe = null;
            let tulokset = [];

            data.forEach(elokuva => {

                if (elokuva.Poster == 'N/A') { 
                    elokuva.Poster = "img/eikuvaa.png";
                }

                tulokset.push(elokuva);
            });

            res.render("index", {"tulokset" : tulokset, "virhe" : virhe});
        }
    })
    .catch((err) => {
        virhe = "Jokin meni pieleen. Yritä uudestaan tai kokeile toista elokuvaa."
        res.render("index", {"tulokset" : null, "virhe" : virhe});
    })
});


app.get("/", (req, res) => {
    res.render("index", { "tulokset" : null, "virhe" : null });
});


app.listen(portti, () => {
    console.log(`palvelin käynnistyi porttiin: ${portti}`);
});



