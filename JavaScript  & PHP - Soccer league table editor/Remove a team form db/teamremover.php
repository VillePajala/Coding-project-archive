<!DOCTYPE html>
<html>
  <head>
  <title>Poista Joukkue</title>
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
      </div><br><br>

        <div class="container-fluid" id=lomake>

          <form method="post" action="">
            <label for="joukkue">Poistetttava joukkue</label><br>
            <input name="joukkue" id="joukkue"><br/><br/>
            <input type="submit" name="poistonappi" value="Poista">
          </form>

          <?php
            include("tietokantayhteys.php");
            if(isset($_REQUEST['poistonappi']))	{
              $kysely=$yhteys->prepare("DELETE FROM sarjataulukko where joukkue= :joukkue");
              $joukkue=$_REQUEST['joukkue'];
              $kysely->bindParam(":joukkue",$joukkue);
              $kysely->execute();
            }
          ?>

            <br>

        </div>
            <br>

        <div class="container-fluid" id="footer"><br/>
        </div>

    </div>

  </body>

</html>



