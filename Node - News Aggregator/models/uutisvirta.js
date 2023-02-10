const request = require("request");
const xml2js = require("xml2js");

let haeUutiset = (urlYle, urlHS, urlIltalehti) => {
    let promise1 = new Promise((resolve, reject) => {     // Ensimmäinen kolmesta API -hausta
        request(urlYle, (err, response) => {

            if (err) {
                reject("Palvelimeen ei saada yhteyttä");
            } else {
                let data = response.body;
                xml2js.parseString(data, (err, result) => {
                    if (err) {
                        reject("Haettu data ei ole xml-muodossa.");
                    } else {         
                        let kaikkiUutiset = [];
                        let uutispalvelu = "Yle uutiset";

                        result.rss.channel[0].item.forEach((item) => {
                            let aikaleima = new Date(item.pubDate[0]).getTime();
                            let kuvaUrl;

                            if (item.enclosure) {
                                kuvaUrl = item.enclosure[item.enclosure.length - 1].$.url;
                            } else {
                                kuvaUrl = 'img/eikuvaa.png' 
                            }                         
                            
                            let uutisOlio = {
                                            "uutispalvelu" : uutispalvelu,
                                            "otsikko" : item.title[0],
                                            "kuvaUrl" : kuvaUrl,
                                            "sisalto" : item.description[0],
                                            "linkki" : item.link[0],
                                            "aikaleima" : aikaleima,
                                            "aika" : item.pubDate[0]
                                        };
     
                            kaikkiUutiset.push(uutisOlio);
                        });
                        
                        kaikkiUutiset = kaikkiUutiset.slice(0,10);
                        resolve(kaikkiUutiset); 
                    }
                });
            }
        });
    });


    let promise2 = new Promise((resolve, reject) => {      // Toinen kolmesta API -hausta
        request(urlHS, (err, response) => {

            if (err) {
                reject("Palvelimeen ei saada yhteyttä");
            } else {
                let data = response.body;
                xml2js.parseString(data, (err, result) => {
                    
                    if (err) {
                        reject("Haettu data ei ole xml-muodossa.");
                    } else {       
                        let kaikkiUutiset = [];
                        let uutispalvelu = "Helsingin Sanomat"

                        result.rss.channel[0].item.forEach((item) => {
                            let aikaleima = new Date(item.pubDate[0]).getTime();
                            let kuvaUrl;

                            if (item.enclosure) {
                                kuvaUrl = item.enclosure[item.enclosure.length - 1].$.url;
                            } else {
                                kuvaUrl = 'img/eikuvaa.png' 
                            }                         
                            
                            let uutisOlio = {
                                            "uutispalvelu" : uutispalvelu,
                                            "otsikko" : item.title[0],
                                            "kuvaUrl" : kuvaUrl,
                                            "sisalto" : item.description[0],
                                            "linkki" : item.link[0],
                                            "aikaleima" : aikaleima,
                                            "aika" : item.pubDate[0]
                                        };

                            kaikkiUutiset.push(uutisOlio);
                        });

                        kaikkiUutiset = kaikkiUutiset.slice(0,10);
                        resolve(kaikkiUutiset); 
                    }
                });
            }
        });
    });


    let promise3 = new Promise((resolve, reject) => {       // Kolmas kolmesta API -hausta    
        request(urlIltalehti, (err, response) => {

            if (err) {
                reject("Palvelimeen ei saada yhteyttä");
            } else {
                let data = response.body;
                
                xml2js.parseString(data, (err, result) => {
                    if (err) {
                        reject("Haettu data ei ole xml-muodossa.");
                    } else {             
                        let kaikkiUutiset = [];
                        let uutispalvelu = "Iltalehti";

                        result.rss.channel[0].item.forEach((item) => {
                            let aikaleima = new Date(item.pubDate[0]).getTime();
                            let kuvaUrl;

                            if (item.enclosure) {
                                kuvaUrl = item.enclosure[item.enclosure.length - 1].$.url;
                            } else {
                                kuvaUrl = 'img/eikuvaa.png' 
                            }                         
                            
                            let uutisOlio = {
                                            "uutispalvelu" : uutispalvelu,
                                            "otsikko" : item.title[0],
                                            "kuvaUrl" : kuvaUrl,
                                            "sisalto" : item.description[0],
                                            "linkki" : item.link[0],
                                            "aikaleima" : aikaleima,
                                            "aika" : item.pubDate[0]
                                        };

                            kaikkiUutiset.push(uutisOlio);
                        });

                        kaikkiUutiset = kaikkiUutiset.slice(0,10);
                        resolve(kaikkiUutiset); 
                    }
                });
            }
        });
    });

    let promises = [promise1, promise2, promise3];
    return Promise.all(promises);
}


module.exports = {

    "uusimmatUutiset" : (callback) => {
        let urlYle = "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET";
        let urlHS = "https://www.hs.fi/rss/tuoreimmat.xml";
        let urlIltalehti = "https://www.iltalehti.fi/rss.xml";

        haeUutiset(urlYle, urlHS, urlIltalehti).then((uutiset) => {
            let kaikki = [];

            uutiset[0].forEach((uutinen) => {    // Yhdistetään kaikkien kolmen API -kutsun tiedot yhteen
                kaikki.push(uutinen)
                uutiset[1].forEach((uutinen) => {
                    kaikki.push(uutinen)
                    uutiset[2].forEach((uutinen) => {
                        kaikki.push(uutinen)    
                    });
                });
            });
            
            let kaikkiUutiset = [...new Set(kaikki)];   // tehdään array, joka sisältää vain uniikkeja uutisia
            kaikkiUutiset.sort((a, b) => parseFloat(b.aikaleima) - parseFloat(a.aikaleima)); // Järjestetään aikaleiman mukaan uusin ensin
            kaikkiUutiset = kaikkiUutiset.slice(0,10);
            callback(null, kaikkiUutiset);
            
        }).catch((virhe) => {
            callback(virhe, null);
        });

    }

};




