const express = require("express");
const app = express();
const keskustelut = require("./models/keskustelut");
const bodyParser = require("body-parser");

const portti = 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./public"));


app.post("/tallenna/", (req, res) => {
    let aikaleima = new Date().getTime();

    if (req.body.nimi == "") {
        req.body.nimi = "Anonyymi";
    };

    let tiedot = {
                "otsikko" : req.body.otsikko,
                "nimi" : req.body.nimi,
                "kirjoitus" : req.body.kirjoitus,
                "aikaleima" : aikaleima
                 };

    keskustelut.lisaaUusikeskustelu(tiedot, (err) => {
        if (err) throw err;
        res.redirect("/");
    });    
});


app.post("/tallennaviesti/", (req, res) => {
    let aikaleima = new Date().getTime();

    if (req.body.nimi == "") {
        req.body.nimi = "Anonyymi";
    };
    
    let viesti = {
            "nimi" : req.body.nimi,
            "kirjoitus" : req.body.kirjoitus,
            "uutisid" : req.body.id,
            "aikaleima" : aikaleima
                };

    keskustelut.paivitaKommenttimaara(req.body.id, (err) => {
        if (err) throw err;
        keskustelut.lisaaUusiviesti(viesti, (err) => {
            if (err) throw err;
            keskustelut.paivitaViimeisin(req.body.id, (err) => {
                if (err) throw err;
                res.redirect("back");
            });    
        });    
    });    
});


app.get("/keskustelu/:id", (req, res) => {
    let id = req.params.id;

    keskustelut.haekeskustelu(id, (err, data) => {
        if (err) throw err;
        keskustelut.haeViestit(id, (err, tieto) => {
            if (err) throw err;
            res.render("keskustelu", { "keskustelu" : data[0], "viestit" : tieto });
        });
    });
});


app.get("/", (req, res) => {
    keskustelut.haeKaikkikeskustelut((err, data) => {
        if (err) throw err;
        res.render("index", { "keskustelut" : data });
    });
});


app.get("/uusikeskustelu/", (req, res) => {
        res.render("uusikeskustelu");
});


app.listen(portti, () => {
    console.log(`Palvelin käynnistyi portiin: ${portti}`);
});




