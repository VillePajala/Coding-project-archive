
$(document).ready(function(){
  
  var lampotila = "";
  var paikka = "";
	$(function(){
		$("#nappi").click(function(){
			var paikkakunta = $("#paikkakunta").val();

			$.ajax({url: "openweathermap.php", 
				method: "GET", 
				data: { "paikkakunta":paikkakunta }, 
				success: function(result) {	
				tulosta(result); 
			},
				error: function(xhr){ 
				alert("Virhe: " + xhr.status + " " + xhr.statusText);
				}
			});

		});
	});

	function tulosta(result){
      //Haetaan lämpötila tuloksista ja muutetaan Kelvineistä Celsiuksiksi
      lampotila = result.main.temp - 273.15;
      paikka = "<h4>lämpötila<br>paikassa<br>" + " " +$("#paikkakunta").val() + "<br></h4>";
      document.getElementById("laatikko").innerHTML = paikka + lampotila + " " + "°C";
      console.log(paikka);

			$("#paikkakunta").val("");
      $("#paikkakunta").focus();
	}

});
