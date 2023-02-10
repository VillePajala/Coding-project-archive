<!DOCTYPE html>
<html>
  <head>
  <title>Kirjautuminen</title>
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
          //Ohjelma hakee tietokannasta käyttäjätunnuksen ja salasanan ja vertaa annettuihin tietoihin
          include("tietokantayhteys.php"); //Avataan yhteys kantaan
          //************************************************
          //HAETAAN TIETOKANNASTA KÄYTTÄJÄTUNNUS JA SALASANA (haku id:n perusteella)
          if(isset($_REQUEST['kirjautuminen'])) {
            /*Lomakkeelta tulevaa tietoa ei saa tietoturvasyistä (sql-injektion riski) sijoittaa suoraan SQL-lauseeseen
            vaan sidotaan muuttuja ja sql-parametri toisiinsa bindParam-funktiolla.
              :id on ns. placeholder eli parametri
            */
            $kysely = $yhteys->prepare("SELECT tunnus, salasana FROM tunnukset WHERE tunnus= :id");
            $tunnus=$_REQUEST['tunnus']; //lomakkeelta tuleva tieto
            $salasana=crypt($_REQUEST['salasana'], 'st'); //lomakkeelta tuleva tieto
            $kysely->bindParam(":id",$tunnus); //kerrotaan ohjelmalle, mikä muuttuja vastaa parametria :id
            $kysely->execute(); //suoritetaan sql-lause eli haku kannasta. Tuloksena on $kysely-niminen array eli tulosjoukko (resultset)

            $rivi=$kysely->fetch();  //etsitään arraysta yksi rivi (row)

              //Mikäli annettu tunnus ja salasana täsmäävät, sessionID tallennetaan ja käyttäjä ohjataava sivustolle
              if (($tunnus == $rivi['tunnus']) && ($salasana == $rivi['salasana'])) {
                $_SESSION['tunnus'] = $_REQUEST['tunnus'];
                header("location:demosivu.php");
              } else { //Jos eivät täsmää, pyydetään yrittämään uudelleen
                echo "Käyttäjätunnus tai salasana väärin, yritä uudelleen!";
              }
            }
        ?>

        <form method="post" action="">
          <h3>Kirjaudu sisään</h3>
          <label for="tunnus">Tunnus: </label><br>
          <input name="tunnus" id="tunnus"><br/>
          <label for="salasana">Salasana: </label><br>
          <input name="salasana" id="salasana"><br/><br>
          <input type="submit" name="kirjautuminen" value="kirjaudu"><br><br>
          <a href="ot6.php" class="button">Rekisteröitymiseen</a>
        </form>

        <br>

      </div>

          <br>

      <div class="container-fluid" id="footer"><br/>
      </div>

    </div>


  </body>

</html>



