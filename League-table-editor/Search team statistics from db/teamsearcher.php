<!DOCTYPE html>
<html>
  <head>
    <title>ot5c</title>
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
          Joukkue: <input name="id">
          <input type="submit" name="hakunappi" value="Hae">
        </form>

        <?php
          include("tietokantayhteys.php"); 
          if(isset($_REQUEST['id'])) {
            $kysely = $yhteys->prepare("SELECT joukkue, voitot, tasapelit, tappiot FROM sarjataulukko WHERE joukkue= :id");
            $id=$_REQUEST['id']; 
            $kysely->bindParam(":id",$id);
            $kysely->execute();
            echo "<table>";
            echo "<thead><tr><th>Joukkue</th><th>Pelit</th><th>Voitot</th><th>Tasapelit</th><th>Häviöt</th><th>Pisteet</th></tr></thead>";
            $rivi=$kysely->fetch();
            echo "<tr><td>" . $rivi['joukkue'] . "</td>" . "<td>" . ($rivi['voitot']  +  $rivi['tasapelit'] + $rivi['tappiot']) . "</td>" . "<td>" . $rivi['voitot']
            . "</td>" . "<td>" . $rivi['tasapelit'] . "</td>" . "<td>" . $rivi['tappiot'] . "</td>" . "<td>" . ($rivi['voitot'] * 3 + $rivi['tasapelit']) . "</td></tr></br>"; //tulostetaan tietdot taulukkoriviksi ja lasketaan pelatut ottelut ja kokonaispistemäärä
            echo "</table>";
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




