demo10.service("tehtavalista", function ($http) {
    
    this.tehtavat = [];
    
    this.lataaTehtavat = function () {
		return $http({
						"method" : "GET",
						"url" : "http://localhost:3011/api/tehtavalista",
						"headers" : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaW1pIjoiSmFubmUiLCJ0dW5udXMiOiJoamF0dSIsImlhdCI6MTU0NDAwNjUzMH0.poGA5cF1IyRJ-h0VoStsefUJLP5GkY32LGk2NbwnH60" }
				     });
    }
	
    this.paivitaTehtavat = function (tehtavat) {
        this.tehtavat = tehtavat;
    }	
    
    this.kaikkiTehtavat = function () {
        return this.tehtavat;
    }
    
    this.tallennaTehtava = function (indeksi, tallennettavatTiedot) {
        if (indeksi === "_uusi") {        
            this.tehtavat.push(tallennettavatTiedot);
        } else {
            this.tehtavat[indeksi] = tallennettavatTiedot;
        }
        
        this.tallennaTehtavat();
    }
    
    this.poistaTehtava = function (indeksi) {
        this.tehtavat.splice(indeksi, 1);
        this.tallennaTehtavat();
    }
    
    this.tallennaTehtavat = function () {
        
		$http({
				"method" : "PUT",
				"url" : "http://localhost:3011/api/tehtavalista",
				"headers" : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaW1pIjoiSmFubmUiLCJ0dW5udXMiOiJoamF0dSIsImlhdCI6MTU0NDAwNjUzMH0.poGA5cF1IyRJ-h0VoStsefUJLP5GkY32LGk2NbwnH60" },				     
				"data" : this.tehtavat
			  }).then(function (response) {				  
			  });
    }
    
});







