const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const blogiloki = require("./models/blogiloki");

const portti = 3105;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { "extended" : true } ));

app.use(express.static("./public"));


app.post("/tallenna/", (req, res) => {  

    let aikaleima = new Date().getTime(); 
    let kirjoittaja = "Ville Pajala" 
    let id = blogiloki.luoId(); 
    let uusiTeksti = {
                        "id" : id,
                        "otsikko" : req.body.otsikko,
                        "kirjoitus" : req.body.kirjoitus,
                        "kirjoittaja" : kirjoittaja,
                        "aikaleima" : aikaleima,
                        "tykkaykset" : 0,
                        "erimielet" : 0
                             };

    blogiloki.lisaaUusi(uusiTeksti, () => {     
        res.redirect("/tallennettu");
    });
}); 


app.get("/tallennettu", (req,res) => {   
    res.render("tallennettu");
}); 


app.get("/tykkays:id", (req,res) => { 

    let id = req.params.id;
    
    blogiloki.paivitaTykkaykset(id, () => {     
        res.redirect("back");                   
    });
}); 


app.get("/erimieli:id", (req,res) => {  

    let id = req.params.id;
    
    blogiloki.paivitaErimielet(id, () => { 
        res.redirect("back");  
    });;
}); 


app.get("/poista:id", (req,res) => { 

    let id = req.params.id;
    
    blogiloki.poistaPosti(id, () => { 
        res.redirect("/yllapito");  
    });;
}); 


app.get("/yllapito", (req, res) => {     

    let blogitekstit = blogiloki.haeKaikki((blogitekstit) => {
        res.render("yllapito", { "blogitekstit" : blogitekstit }); 
    }); 
});


app.get("/", (req, res) => { 

    let blogitekstit = blogiloki.haeKaikki((blogitekstit) => {
        res.render("index", { "blogitekstit" : blogitekstit }); 
    }); 
}); 


app.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin: ${portti}`);
}); 



