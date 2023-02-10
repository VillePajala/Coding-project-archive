<!DOCTYPE html>
<html>
  <head>
    <title>Joukkueen lisääminen</title>
    <meta charset="utf-8"/>
    <link href="https://fonts.googleapis.com/css?family=Chicle|Rajdhani|Signika" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css" title="tyylit" />
  </head>
  <body>

    <div class="container" id="kehys">
      <div class="container-fluid" id="header">
        <h1>Veikkausliiga</h1>
      </div>

      <br><br>

      <div class="container-fluid" id=lomake>
        <?php

          include("tietokantayhteys.php");

          if(isset($_REQUEST['lisaysnappi'])) {

            $joukkue=$_REQUEST['joukkue'];
            $voitot=$_REQUEST['voitot'];
            $tasapelit=$_REQUEST['tasapelit'];
            $tappiot=$_REQUEST['tappiot'];

            $kysely=$yhteys->prepare("INSERT INTO sarjataulukko (joukkue,voitot,tasapelit,tappiot) VALUES (:joukkue, :voitot, :tasapelit,:tappiot)");

            $kysely->bindParam(":joukkue",$joukkue);
            $kysely->bindParam(":voitot",$voitot);
            $kysely->bindParam(":tasapelit",$tasapelit);
            $kysely->bindParam(":tappiot",$tappiot);
            $kysely->execute();

          }

        ?>

          <form method="post" action="">
            <label for="joukkue">Lisää Joukkue</label><br>
            <input name="joukkue" id="joukkue"><br/>
            <label for="voitot">Kirjaa voitot</label><br>
            <input name="voitot" id="voitot"><br/>
            <label for="tasapelit"> Kirjaa tasapelit</label><br>
            <input name="tasapelit" id="tasapelit"><br/>
            <label for="tappiot">Kirjaa tappiot</label><br>
            <input name="tappiot" id="tappiot"><br/><br>
            <input type="submit" name="lisaysnappi" value="Lisää">
          </form>

          <br>

      </div>

          <br>

        <div class="container-fluid" id="footer"><br/>
        </div>

    </div>

  </body>
  
</html>
