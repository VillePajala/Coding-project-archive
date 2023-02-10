const jwt = require("jsonwebtoken");

let token = jwt.sign({
                        "nimi" : "Janne",
                        "tunnus" : "hjatu"
                     }, 
                     "SuuriSalaisuus2018!");

console.log(token);


