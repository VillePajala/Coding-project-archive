
$(document).ready(function(){
  
  $('#lista').keypress(function (e) {
      var key = e.which;

    if(key == 13)
    {
      $("#lisaa").click();
      return false;
    }

  });
  
  $("#lisaa").click(function(){
    
    if($("#lista").val() == "" || $("#lista").val() == "Kirjoita..."){
      return false;
    }
    else {
      var arvo = $("#lista").val();
      var item = $("<li>" + arvo + "</li>");
      item.hide();
      $("ul").append(item);
      item.fadeIn(500);
    }

    $(function() {
      $("#lista").focus();
    });

  });

  $("ul").on("click", "li", function(e){
    $(this).slideUp(500, function() {
      $(this).remove();
    });
  });

});




