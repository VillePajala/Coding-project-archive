<!DOCTYPE html>
<html>
  <head>
    <title>Totuuspalvelu X</title>
    <meta charset="utf-8"/>
    <link href="https://fonts.googleapis.com/css?family=Chicle|Rajdhani|Signika" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css" title="tyylit" />
  </head>

  <body>

    <?php
    session_start();
    ?>

    <div class="container" id="kehys">
      <div class="container-fluid" id="header">
        <h1>Totuuspalvelu X</h1>
      </div>
      <br>
      <br>

      <div class="container-fluid" id=lomake>

        <?php
          // Luodaan yhteys tietokantaan
          include("tietokantayhteys.php");
          // Mitä tapahtuu, kun nappia painetaan
          if(isset($_REQUEST['lisaysnappi'])) {

            //Lomakkeelta tulevat tiedot tallennetaan muuttijiin
            $tunnus=$_REQUEST['tunnus'];
            $salasana=$_REQUEST['salasana'];
            $salasana2=$_REQUEST['salasana2'];

            // Tarkastetaan, että salasana ja salasanan varmistus täsmäävät
            if ($salasana == $salasana2) {
              //Salataan annettu salasana ennen tietokantaan tallentamista
              $salasana=crypt($_REQUEST['salasana'], 'st');
              //Lisätään kantaan. PHP:n muuttujat sidotaan SQL-parametreihin bindParam-metodilla
              $kysely=$yhteys->prepare("INSERT INTO tunnukset (tunnus, salasana) VALUES (:tunnus, :salasana)");
              //Tietoturvasyistä SQL-lauseeseen ei kirjoiteta suoraan lomakkeelta tulleita tietoja (SQL-injektion vaara)
              $kysely->bindParam(":tunnus",$tunnus);
              $kysely->bindParam(":salasana",$salasana);
              $kysely->execute();//Ajetaan SQL-lause kantaan
            } else {
              //Jos salasana ja salasanan vahvistus eivät täsmää, pyydetään yrittämään uudelleen
              echo "<h2>Salasanat eivät täsmää, tarkasta salasana</h2>";
            }

          }
        ?>

        <form method="post" action="">
          <h3>Rekisteröidy luomalla verkkotunnukset</h3>
          <label for="tunnus">Tunnus: </label><br>
          <input name="tunnus" id="tunnus"><br/>
          <label for="salasana">Salasana: </label><br>
          <input name="salasana" id="salasana"><br/>
          <label for="salasana2"> Salasana uudelleen: </label><br>
          <input name="salasana2" id="salasana2"><br><br>
          <input type="submit" name="lisaysnappi" value="Rekisteröidy"><br><br>
          <a href="kirjautuminen.php" class="button">Jatka kirjautumiseen</a>
        </form>

        <br>

      </div>

          <br>

      <div class="container-fluid" id="footer"><br/>
      </div>

    </div>

  </body>

</html>


