const restify = require("restify-clients");

const apiKey = require("./apiKey");

let apiUrl = "http://www.omdbapi.com/?apikey=[yourkey]&" + apiKey.omdbKey;
let client;

client = restify.createJsonClient({
                                    "url" : apiUrl,
                                    "headers" : {
                                                    "Authorization" : ['*'],
                                                    'Accept': 'application/json'
                                                } 
                                    });

module.exports = {

    "etsiElokuva" : (tiedot) => {
        return new Promise((resolve, reject) => {
            let nimi = tiedot.title.replace(/ /g, "+");
            let polku = `http://www.omdbapi.com/?s=${nimi}&type=movie&apikey=${apiKey.omdbKey}`; 

            client.get(polku, (err, req, res, data) => {
                console.log(data)
                if (!err) {
                    console.log(data)
                    resolve(data.Search); 
                } else {
                    console.log(err)
                    reject(err);
                }
            });
        });
    }
};


