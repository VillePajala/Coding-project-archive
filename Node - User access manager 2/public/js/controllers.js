demo10.controller("listaCtrl", function ($scope, tehtavalista) {
   $scope.tehtavat = tehtavalista.kaikkiTehtavat();
});

demo10.controller("tehtavaCtrl", function ($scope, $routeParams, tehtavalista, $location) {
   var indeksi = $routeParams.indeksi; 
   
   if (indeksi === "_uusi") {
       $scope.nimi = "(Uusi tehtävä)"; 
       $scope.ohje = ""; 
       $scope.suoritettu = false;
       $scope.naytaPoisto = false;
   } else {
        var tehtava = tehtavalista.kaikkiTehtavat()[indeksi]
        $scope.nimi = tehtava.nimi; 
        $scope.ohje = tehtava.ohje; 
        $scope.suoritettu = tehtava.suoritettu;  
        $scope.naytaPoisto = true;
   }
   
   $scope.tallenna = function () {
       var suoritettu = ($scope.suoritettu)?true:false; // ehdollinen sijoitus
       var tallennettavatTiedot = {
                                     "nimi" : $scope.nimi,
                                     "ohje" : $scope.ohje,
                                     "suoritettu" : suoritettu
                                  }
       
       if ($scope.poistaTehtava) {
           tehtavalista.poistaTehtava(indeksi);
       } else {
           tehtavalista.tallennaTehtava(indeksi, tallennettavatTiedot);
       }

       $location.path("#/");
   } 
    
});