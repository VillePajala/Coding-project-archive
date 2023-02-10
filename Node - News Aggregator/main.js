const express = require("express");
const app = express();
const portti = 3009;

const uutiset = require("./models/uutisvirta");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./public"));

app.get("/", (req, res) => {

    uutiset.uusimmatUutiset((virhe, uutiset) => {
         res.render("index", { "uutiset" : uutiset , "virhe" : virhe});
    });  
});

app.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin: ${portti}`);
});

