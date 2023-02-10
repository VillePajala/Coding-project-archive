$(document).ready(function(){
  
      var selected_index = -1;
  	var linnutArray = []; 
      var operaatio = "A"; 
      if(localStorage.getItem("linnut") != null) { 
  	
      $("#tallenna").click(function() {
          
        if(operaatio == "A" && $("#laji").val() != ""){ 

          var x = document.getElementById("laatikko"); 
          function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            x = "Geolocation is not supported by this browser.";
          }
          
        }

        function showPosition(position) {
        x = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
        }

   
      getLocation();

  		   var lintuOlio = {
                  laji : $("#laji").val(),
                  havaintoPaiva : $("#havaintoPaiva").val(),
                  havaintoAika : $("#havaintoAika").val(),
                  havaintoPaikka : $("#havaintoPaikka").val(),
                  lukumaara : $("#lukumaara").val(),
                  aika : Date(),
                  paikka: x  

              }
  			     
              linnutArray.push(lintuOlio); 
  			      
              localStorage.setItem("linnut",JSON.stringify(linnutArray));
          }
          console.log(x); 
          $("#laji").val("");
          $("#havaintoPaiva").val("");
          $("#havaintoAika").val("");
          $("#havaintoPaikka").val("");
          $("#lukumaara").val("");
          
  		    $("#laji").focus();
          $("#laatikko").hide(); 

      });



  	
      $("#taulukko").on("click",".btnDelete",function() { 
  		
          var selected_index = parseInt($(this).attr("alt").replace("Delete",""));
          linnutArray.splice(selected_index,1); 
          localStorage.setItem("linnut", JSON.stringify(linnutArray)); 
          tulosta();
      });
  	
     
      function tulosta(){
          var linnutJSON = localStorage.getItem("linnut"); 
  		linnutArray = JSON.parse(linnutJSON); 
  		if(linnutArray == null){ 
  			linnutArray = [];
  		}
          $("#taulukko").html = "";
          $("#taulukko").html("<thead><tr><th>Laji</th><th>Havaintopäivä</th><th>Havaintoaika</th><th>havaintopaikka</th><th>Lukumäärä</th><th>Aika</th><th>Paikka</th><th>Poista</th></tr></thead><tbody></tbody>");

  		 for(var i in linnutArray){ 
              $("#taulukko tbody").append("<tr><td>" + linnutArray[i].laji + "</td><td>" + linnutArray[i].havaintoPaiva + "</td><td>" + linnutArray[i].havaintoAika
              + "</td><td>" + linnutArray[i].havaintoPaikka + "</td><td>" + linnutArray[i].lukumaara + "</td><td>" + linnutArray[i].aika + "</td><td>" + linnutArray[i].paikka + "</td><td><img src='delete.png' alt='Delete" + i + "'   class='btnDelete'/></td></tr>");
          }
      }
  	

      $("#kokoLista").click(function(){
  		    tulosta();
          $("#hakuKentta").show();
          $("#haku").show();
          $(".table-responsive").show();


          $("#haku").click(function(){

           
            var input, filter, table, tr, td, i;
            input = document.getElementById("havainto");
            filter = input.value.toUpperCase();
            table = document.getElementById("taulukko");
            tr = table.getElementsByTagName("tr");

           
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }

      });
      });


});



