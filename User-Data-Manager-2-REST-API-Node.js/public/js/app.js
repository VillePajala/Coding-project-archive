var lista = angular.module("demo10", ["ngRoute"]);

demo10.run(function (tehtavalista) {
    tehtavalista.lataaTehtavat().then(function (response) {
		tehtavalista.paivitaTehtavat(response.data);
	});
});

demo10.config(function ($routeProvider) {
    
    $routeProvider
            .when("/lista", {
                                 "templateUrl" : "templates/lista.html",
                                 "controller" : "listaCtrl"
                              })
            .when("/tehtava/:indeksi", {
                                 "templateUrl" : "templates/tehtava.html",
                                 "controller" : "tehtavaCtrl"
                              })
            .otherwise({
                            "redirectTo" : "/lista"
                       });                   
});



