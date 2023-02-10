$(function(){
	$("#nappi").click(function(){
		$.ajax({url: "ohjelma.php", success: function(result) {
			tulostaLuettelo(result);
		}
		});
	});
});

function tulostaLuettelo(taulukko){

	var luettelo = "<table border='1'>";
  var i;
  
	luettelo += "<thead><tr><th>Joukkue</th><th>Pelit</th><th>Voitot</th><th>Tasapelit</th><th>Häviöt</th><th>Pisteet</th></tr></thead>";
	for(i = 0; i < taulukko.length; i++){
		luettelo += "<tr><td><b>" + taulukko[i].joukkue + "</b></td><td>" + (parseInt(taulukko[i].voitot) + parseInt(taulukko[i].tasapelit) + parseInt(taulukko[i].tappiot)) + "</td><td>" + taulukko[i].voitot + "</td><td>" + taulukko[i].tasapelit + "</td>"
		luettelo += "<td>" + taulukko[i].tappiot + "</td><td><b>" + (parseInt(taulukko[i].voitot) * 3 + parseInt(taulukko[i].tasapelit)) +  "</b></td></tr>";
	}
	luettelo += "</table>";
  $("#laatikko").html(luettelo);
  
}


