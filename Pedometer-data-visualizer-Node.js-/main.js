
const express = require("express");
const app = express();
const multer = require("multer");
const path = require('path'); 
const csvToJson = require('convert-csv-to-json');
const fs = require("fs"); 


const storage = multer.diskStorage ({
	destination: function (req, file, cb) { 
	  cb(null, './tmp')
	},
	filename: function (req, file, cb) {
	  cb(null, file.fieldname +         
	  path.extname(file.originalname)); 
	}
  })

const upload = multer({ 
	storage: storage,
	fileFilter: function (req, file, cb) {
		let tiedostomuoto = path.extname(file.originalname);       
		if (tiedostomuoto == '.json' || tiedostomuoto == '.csv') {  
			return cb(null, true);
		  } else {                                                 
			cb(`<p style="text-align: center">Wrong File Format.<br>
				Only .csv and .json are allowed</p>`);
		  }
		  
	}
}).single("tiedosto"); 

const portti = 3103;
app.use(express.static("./public/"));  
									   

app.post("/lisaakuva/", (req, res) => { 

	upload(req, res, (err) => {
		if (err) {  
			let sivu = `
						<!DOCTYPE html>
						<!DOCTYPE html>
						<!--
						file: ilmoittautuminen.html
						desc: Oppimistehtävä 2
						date: 7.11.2018
						auth: Ville Pajala
						-->
						<html>
              <head>
                <title>Mittaridata</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet">
                <link href="css/styles.css" media="all" rel="stylesheet" type="text/css"/>
                <meta charset="utf-8">
              </head>
              <body>
                                
                <div id="header" class="container">
                
                  <h1 class="mb-4">ASKELMITTARIDATAN VISUALISOINTI</h1>
                    <hr>	
                  <h2 class="mb-4">Lahetä askelmittaridatasi<br>json tai csv -muodossa</h2>
              
                  <div id="buttons" class ="container">
                    <form method="POST" action="/lisaakuva" enctype="multipart/form-data">
                      <div id="lomake" class="form-group">
                        <label for="tiedosto">Tiedosto:</label><br>
                        <input id="inp" class="form-control-file" type="file" name="tiedosto" id="tiedosto">
                      </div>
                      <input type="submit" class="btn btn-primary" name="laheta" value="Lataa tiedosto">
                    </form>  
                  </div><br><br>
              
                  <div class="container" id="content2">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class="thead-light">
                          <tr>
                            <th>PVM</th>
                            <th>Askeleet</th>
                          </tr> 
                        </thead>
                        <tbody> 
                          ${err}
                        </tbody>
                      </table>
                    </div>
                  </div>
              
                  <div id="lisaosa" class="container">
                  </div>
                </div>
              </body>
						</html>     
            `; 
            
			res.send(sivu);            
			res.end();          

		} else { 
			res.redirect("/upload");
			res.end();
    } 
    
	}); 
}); 



app.get("/upload", (req, res) => {

	let csvFile = "./tmp/tiedosto.csv";
	
	fs.access(csvFile, fs.F_OK, (err) => {  
	  if (err) {                            
      lataaSivu();                          
      return
	  } else {     

      let fileInputName = "./tmp/tiedosto.csv";       // määritellään csvtojson -lisäosaa varten tiedostopolut
      let fileOutputName = "./tmp/tiedosto.json";
      
      csvToJson.formatValueByType().generateJsonFileFromCsv(fileInputName,fileOutputName);
      
      fs.unlink("./tmp/tiedosto.csv", function (err) {
        if (err) throw err;
        lataaSivu();   
      }); 
		  
	  }

	}) 

	function lataaSivu() {

		let output = "";                            
		let tiedostonimi = "./tmp/tiedosto.json";   

		fs.readFile(tiedostonimi, (err, data) => {  
			
			if (!err) {                            
			
			let onkoVirhe = 0;                  
			let kuukausi = "";                  
			let vuosi = "";                     
			let aika = "";                      
			let summa = 0;                      
			let keskiarvo = 0;                  
			let tiedot = JSON.parse(data);      
			let viimeinenPaivamaara = tiedot[tiedot.length -1].pp;  

			tiedot.forEach(tieto => { 

				if(typeof tieto.pp != "number" || typeof tieto.kk != "number" || typeof tieto.vvvv != "number" || typeof tieto.askeleet != "number" ){
					onkoVirhe = 1;                  
					return
				} 

				if (tiedot.length != viimeinenPaivamaara){
					onkoVirhe = 1;                  
					return
				}

			});
      
      
			if(onkoVirhe != 1) {    

				tiedot.forEach(tieto => {  
					output += `<tr><td>${tieto.pp}.${tieto.kk}.${tieto.vvvv}</td><td>${tieto.askeleet}</td></tr>`;
					summa = summa + tieto.askeleet;
				});

				keskiarvo = summa / tiedot.length;   
				keskiarvo = Math.round(keskiarvo); 
				vuosi = tiedot[0].vvvv;      

        switch(tiedot[0].kk){ 								
          case 1: 
            kuukausi = "Tammikuu";
            break;
          case 2: 
            kuukausi = "Helmikuu";
            break;
          case 3: 
            kuukausi = "Maaliskuu";
            break;
          case 4: 
            kuukausi = "Huhtikuu";
            break;
          case 5: 
            kuukausi = "Toukokuu";
            break;
          case 6: 
            kuukausi = "Kesäkuu";
            break;
          case 7: 
            kuukausi = "Heinäkuu";
            break;
          case 8: 
            kuukausi = "Elokuu";
            break;
          case 9: 
            kuukausi = "Syyskuu";
            break;
          case 10: 
            kuukausi = "Lokakuu";
            break;
          case 11: 
            kuukausi = "Marraskuu";
            break;
          case 12: 
            kuukausi = "Joulukuu";
            break;
        }
        
        aika = `<h1 style="text-align: center"><b>${kuukausi} ${vuosi}</b></h1><br>`;
        yhteenveto = `
              <h2 style="text-align: center">Yhteensä ${summa} askelta,</h2>
              <h2 style="text-align: center">Keskimäärin ${keskiarvo} askelta päivässä.</h2><br>
              `;    

			} else {  
				output = `<p style="text-align: center">Tiedoston sisältämä data on korruptoitunut.<br>Tietojen lukeminen ei onnistu.<p>`;
				aika = "";
				yhteenveto = "";
			}

			let sivu = `
						<!DOCTYPE html>
						<html>
              <head>
                <title>Mittaridata</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet">
                <link href="css/styles.css" media="all" rel="stylesheet" type="text/css"/>
                <meta charset="utf-8">
              </head>

              <body>
                                
                <div id="header" class="container">
                  <h1 class="mb-4">ASKELMITTARIDATAN VISUALISOINTI</h1>
                    <hr>
                  <h2 class="mb-4">Lahetä askelmittaridatasi<br>json tai csv -muodossa</h2>
              
                  <div id="buttons" class ="container">
                    <form method="POST" action="/lisaakuva" enctype="multipart/form-data">
                      <div id="lomake" class="form-group">
                        <label for="tiedosto">Tiedosto:</label><br>
                        <input id="inp" class="form-control-file" type="file" name="tiedosto" id="tiedosto">
                      </div>
                      <input type="submit" class="btn btn-primary" name="laheta" value="Lataa tiedosto">
                    </form>  
                  </div><br>

                  ${aika}
                  ${yhteenveto}

                  <div class="container" id="content2">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class="thead-light">
                          <tr>
                            <th>PVM</th>
                            <th>Askeleet</th>
                          </tr> 
                        </thead>
                        <tbody> 
                          ${output}
                        </tbody>
                      </table>
                    </div>
                  </div>
              
                  <div id="lisaosa" class="container">
                  </div>
              
                </div>
              </body>
						</html>`;

					res.send(sivu); 

					fs.access(tiedostonimi, fs.F_OK, (err) => {
						if (err) {
						return 
						} else { 
							fs.unlink("./tmp/tiedosto.json", function (err) {
								if (err) throw err;
							});
						} 
					}) 

			} else { 

        let sivu = `
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Mittaridata</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                  <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet">
                  <link href="css/styles.css" media="all" rel="stylesheet" type="text/css"/>
                  <meta charset="utf-8">
                </head>
                <body>
                                  
                  <div id="header" class="container">
                    <h1 class="mb-4">ASKELMITTARIDATAN VISUALISOINTI</h1>
                      <hr>
                    <h2 class="mb-4">Lahetä askelmittaridatasi<br>json tai csv -muodossa</h2>
                
                    <div id="buttons" class ="container">
                      <form method="POST" action="/lisaakuva" enctype="multipart/form-data">
                        <div id="lomake" class="form-group">
                          <label for="tiedosto">Tiedosto:</label><br>
                          <input id="inp" class="form-control-file" type="file" name="tiedosto" id="tiedosto">
                        </div>
                        <input type="submit" class="btn btn-primary" name="laheta" value="Lataa tiedosto">
                      </form>  
                    </div><br><br>
                
                    <div class="container" id="content2">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class="thead-light">
                            <tr>
                              <th>PVM</th>
                              <th>Askeleet</th>
                            </tr> 
                          </thead>
                          <tbody> 
                            ${output}
                          </tbody>
                        </table>
                      </div>
                    </div>
                
                    <div id="lisaosa" class="container">
                    </div>
                
                  </div>
                </body>
              </html>`;

        res.send(sivu);

			}
		
		});
	}; 
}); 


app.listen(portti, () =>  {
   console.log(`Palvelin käynnistyi porttiin: ${portti}`); 
}); 



