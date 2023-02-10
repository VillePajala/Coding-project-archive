const fs = require("fs");
const tiedostonimi = "./models/blogitekstit.json";

module.exports = {

    "haeKaikki" : (callback) => {
        fs.readFile(tiedostonimi, "utf-8", (err, data) => {
            if (err) throw err;
            return callback(JSON.parse(data));  
        });
    },


    "lisaaUusi" : (uusi, callback) => { 
        fs.readFile(tiedostonimi, "utf-8", (err, data) => {
      
            if (err) throw err;
            let blogitekstit = JSON.parse(data);
            blogitekstit.unshift(uusi);

            fs.writeFile(tiedostonimi, JSON.stringify(blogitekstit, null, 2), (err) => {
                if (err) throw err;
                callback();
            });
        });
      },
  

    "paivitaTykkaykset" : (tunniste, callback) => {  
        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
            let blogitekstit = JSON.parse(data);
                        
            blogitekstit.forEach(blogiteksti => { 
                if (blogiteksti.id == tunniste) {   
                    blogiteksti.tykkaykset = blogiteksti.tykkaykset + 1;  
                } 
            }); 

            fs.writeFile(tiedostonimi, JSON.stringify(blogitekstit, null, 2), (err) => {
                if (err) throw err;
                callback();
            }); 
        }); 
      },
  

    "paivitaErimielet" : (tunniste, callback) => {  
        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
            let blogitekstit = JSON.parse(data);

            blogitekstit.forEach(blogiteksti => {  
                if (blogiteksti.id == tunniste) {  
                    blogiteksti.erimielet = blogiteksti.erimielet + 1;   
                } 
            }); 

            fs.writeFile(tiedostonimi, JSON.stringify(blogitekstit, null, 2), (err) => {
                if (err) throw err;
                callback();
            }); 
        });
      }, 
  

    "luoId" : (callback) => { 
        let r = Math.random().toString(36);
        return r;
    }, 


    "poistaPosti" : (tunniste, callback) => {
        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
                        let blogitekstit = JSON.parse(data);
                        
            blogitekstit.forEach(blogiteksti => {    
                if (blogiteksti.id == tunniste) {      
                    let indeksi = blogitekstit.indexOf(blogiteksti); 
                    blogitekstit.splice(indeksi, 1); 
                }
            }); 

            fs.writeFile(tiedostonimi, JSON.stringify(blogitekstit, null, 2), (err) => {
                if (err) throw err;
                callback();
            }); 
        });
    }, 

}; 