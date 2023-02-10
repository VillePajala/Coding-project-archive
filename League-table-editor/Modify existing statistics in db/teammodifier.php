<!DOCTYPE html>
<html>
  <head>
    <title>Joukkuetietojen muokkaaminen</title>
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

        <form method="post" action="ot5f.php">
          <label for="joukkue">Hae muutettava joukkue</label><br>
          <input name="joukkue"><br/><br/>
          <input type="submit" name="hakunappi" value="Hae">
        </form>

        <?php
          include("tietokantayhteys.php");
          if(isset($_REQUEST['hakunappi'])){
            $kysely = $yhteys->prepare("SELECT * FROM sarjataulukko WHERE joukkue= :joukkue");
            $joukkue=$_REQUEST['joukkue'];
            $kysely->bindParam(":joukkue",$joukkue);
            $kysely->execute();
            $rivi=$kysely->fetch();
          }
        ?>

        <hr/>

        <h4>Tallennus</h4>

        <form method="post" action="ot5f.php">
          <input type="hidden" name="id" value="<?php echo $rivi['id'];?>">
          <label for="voitot">Uusi voittojen määrä</label><br>
          <input name="voitot" value="<?php echo $rivi['voitot'];?>"><br/>
          <label for="tasapelit">Uusi tasapelien määrä</label><br>
          <input name="tasapelit" value="<?php echo $rivi['tasapelit'];?>"><br/>
          <label for="tappiot">Uusi tappioiden määrä</label><br>
          <input name="tappiot" value="<?php echo $rivi['tappiot'];?>"><br/><br/>
          <input name="muutosnappi" type="submit" value="Tallenna"/>
        </form>

        <?php
          if(isset($_REQUEST['muutosnappi'])) {

            $kysely = $yhteys->prepare("UPDATE sarjataulukko SET voitot= :voitot, tasapelit= :tasapelit, tappiot= :tappiot WHERE id= :id");
            $id=$_REQUEST['id'];
            $voitot=$_REQUEST['voitot'];
            $tasapelit=$_REQUEST['tasapelit'];
            $tappiot=$_REQUEST['tappiot'];
            $kysely->bindParam(":id",$id);
            $kysely->bindParam(":voitot",$voitot);
            $kysely->bindParam(":tasapelit",$tasapelit);
            $kysely->bindParam(":tappiot",$tappiot);
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



