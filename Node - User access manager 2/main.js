const restify = require("restify");
const server = restify.createServer();

const jwt = require("restify-jwt-community");

const corsMiddleWare = require("restify-cors-middleware");

const cors = corsMiddleWare({
                                "origins" : ["http://localhost", "http://127.0.0.1", "http://t11client.herokuapp.com/"],
                                "allowHeaders" : ["Authorization"]
                            });

const tehtavalista = require("./models/tehtavalista");

const portti = 3111;

server.pre(restify.pre.sanitizePath()); 
server.pre(cors.preflight);
server.use(restify.plugins.bodyParser()); 
server.use(cors.actual);

server.use(jwt({"secret" : "SuuriSalaisuus2018!"}), (err, req, res, next) => {

    if (err) {
        res.send(401, "Tätä REST Web API-palvelua ei voi käyttää ilman asianmukaista JWT-tokenia. Ota yhteyttä ylläpitoon.");
    } else {
		return next();
	} 

});

server.get("/api/kayttajat", (req, res, next) =>  {

    tehtavalista.avaa((err, data) => {

        if (!err) {
            res.send(200, data);
        } else {
            res.send(500, {"virhe" : "Tiedostoa ei voitu avata!"});
        }
        return next();
    });
});

server.put("/api/tehtavalista", (req, res, next) =>  {

    tehtavalista.tallenna(req.body, (err, data) => {
        if (!err) {
            res.send(200, {"status" : "Tiedot tallennettu"});
        } else {
            res.send(500, {"virhe" : "Tiedostoa ei voitu tallentaa!"});
        }
        return next();
    });
});

server.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin: ${portti}`)
});

