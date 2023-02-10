/*
file: app.js
desc: Blogisivuston front-end javaScript
date: 4.12.2018
auth: Ville Pajala
*/

function vahvista() {

    if(document.forms["Form"]["otsikko"].value == "") {
        return confirm("Otsikko puuttuu. Haluat silti julkaista postin?");
    } else {
        return confirm("Haluatko lisätä uuden blogipostin?");
    }
    
}


