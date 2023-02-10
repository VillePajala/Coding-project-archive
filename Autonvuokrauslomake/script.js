
$(document).ready(function(){
  
  $('[data-toggle="tooltip"]').tooltip();
  
  var tiedotArray = [];

  	$('.form_date').datepicker({
      language:  'fi',
  		format: "dd.mm.yyyy",
      weekStart: 1,
      todayBtn:  1,
  		autoclose: 1,
  		todayHighlight: 1,
  		minView: 2,
      minDate: 0,
  		forceParse: 0
      });


      $("#nappi").click(function(){
        var pvm1 = $("#pvm1").val();
        var pvm2 = $("#pvm2").val();

        var nimi = $("#nimi").val(); 
        var numero = $("#numero").val();
        var meili = $("#meili").val();

        //lasketaan aikojen erotus vuorokausissa
        var d1 = pvm1.substring(0, 2); //Parsitaan päivät, kuukaudet ja vuodet suomalaisesta kalenteriajasta
        var d2 = pvm2.substring(0, 2);
        var m1 = pvm1.substring(3, 5);
        var m2 = pvm2.substring(3, 5);
        var y1 = pvm1.substring(6, 11);
        var y2 = pvm2.substring(6, 11);
        pvm1 = m1 + "." + d1 + "." + y1;
        pvm2 = m2 + "." + d2 + "." + y2;
        var pvm1Olio = new Date(pvm1);
        var pvm2Olio = new Date(pvm2);
        var unixAika1 = pvm1Olio.getTime();
        var unixAika2 = pvm2Olio.getTime();

        var ero = Math.abs(unixAika2 - unixAika1);
        var eroVuorokausissa = Math.ceil(ero / (24 * 60 * 60 * 1000) + 1);
        var hinta = eroVuorokausissa * 120;

        var lopputulos = "<strong>Nimi: </strong>" + nimi + "<br>"
            lopputulos += "<strong>Puhelinnumerosi: </strong>" + numero + "<br>"
            lopputulos += "<strong>Sähköpostiosoitteesi: </strong>" + meili + "<br>"
            lopputulos += "<strong>Varasuajankohta: </strong>" + d1 + "." + m1 + "." + y1 + " " + "-" + " " + d2 + "." + m2 + "." + y2 + "<br>"
            lopputulos += "<strong>Hinta yhteensä: </strong>" + hinta + " €"

        if (eroVuorokausissa > 7)  {
          alert("Vuokra-aika voi olla maksimissaa 7 vuorokautta");
          $("#pvm2").focus();
        } if (pvm1 > pvm2){
          alert("Palautuspäivämäärä ei voi olla ennen vuokrauspäivää");
          $("#pvm2").focus();
        } if (eroVuorokausissa <= 7 && pvm1 < pvm2) {
          $("#laatikko").html(lopputulos);
          $('#myModal').modal('show');
        }

        $("#vahvista").click(function() {
          var varausOlio = {
            nimi : $("#nimi").val(),
            puhelinnumero : $("#numero").val(),
            sahkoposti : $("#meili").val(),
            vuokrauspaiva : $("#pvm1").val(),
            palautuspaiva : $("#pvm2").val(),
            kokonaishinta : hinta,
          }

          tiedotArray.push(varausOlio); 
          localStorage.setItem("tiedot",JSON.stringify(tiedotArray));

          console.log(tiedotArray);

          $("#laatikko").html("<h4>Varaus vahvistettu!</h4>");

          $(".modal-title").hide();
          $("#vahvista").hide();
          $("#peruuta").hide();

          $("#pvm1").val("");
          $("#pvm2").val("");
          $("#nimi").val("");
          $("#numero").val("");
          $("#meili").val("");
      });

        $(".modal-title").show();
        $("#vahvista").show();
        $("#peruuta").show();

	  }); 

      $("#nappi2").click(function(){
        $("#pvm1").val("");
        $("#pvm2").val("");
        $("#nimi").val("");
        $("#numero").val("");
        $("#meili").val("");
        localStorage.clear();
  }); 

}); 


