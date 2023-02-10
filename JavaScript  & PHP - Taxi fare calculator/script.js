
$(document).ready(function(){
  
  var etaisyys = "";
  var vastaus = "";
  var maksuluokka = "";
  var ajankohta = "";
  var kokonaishinta = "";

	$(function(){

		$("#laske").click(function(){
      
			var alku = $("#alku").val();
      var loppu = $("#loppu").val();

			$.ajax({url: "googlemaps.php", 
				method: "GET", 
				data: { 'alku':alku, 'loppu':loppu },

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
      
      var maksuluokka = parseFloat($("#sel1").val());
      var ajankohta = parseFloat($("#sel2").val());
     
      etaisyys = parseFloat(result.rows[0].elements[0].distance.text);

      var kokonaishinta = etaisyys * maksuluokka + ajankohta;
      
      vastaus = document.getElementById("laatikko").innerHTML = "<h3>Matka: </h3>" + etaisyys + " Km<br>" + "<h3>Hinta: </h3>" + kokonaishinta + " €" ;

      console.log(maksuluokka);
      console.log(ajankohta);
      console.log(etaisyys);
      console.log(kokonaishinta);
      
      $("#alku").focus();

	}
    
  $("#tyhjenna").click(function(){
    
    $("#alku").val("");
    $("#loppu").val("");
    $("#sel1").val("1.60");
    $("#sel2").val("5.90");
    document.getElementById("laatikko").innerHTML = "";
    $("#alku").focus();

  }); 

});



