<!DOCTYPE html>
<html>
	<head>
	<title>Totuus1</title>
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
        echo "<h2>" . $_SESSION['tunnus'] . "!</h2>";

        // Poistaa session
        if(isset($_REQUEST["poistaSessioNappi"])) {
          session_unset();
          session_destroy();
          header("location: kirjautuminen.php");
        }
      ?>

      <h2>Tiesitkö. että elämän tarkoitus on 42!</h2>
      <a href="totuus2.php" class="button">Katso toinen totuus!</a><br/><br/>
      
      <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
        <input type="submit" name="poistaSessioNappi" value="Kirjaudu ulos" />
      </form>
      
      <br/><br/><br>

      </div>
          <br>
      <div class="container-fluid" id="footer"><br/>
    </div>
  </div>

  </body>
</html>


