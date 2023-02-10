<?php
	$dsn = "mysql:host=localhost;dbname=veikkausliiga";
	$tunnus = "root";
	$salasana = "";
	try {
		$yhteys = new PDO($dsn, $tunnus, $salasana);
	} catch (PDOExcetion $e) {
		die("Virhe: ".$e->getMessage());
	}

	$yhteys->exec("SET NAMES utf8");
	$kysely = $yhteys->prepare("SELECT * FROM sarjataulukko");

	$kysely->execute();
	header("Content-type: application/json");
	print json_encode($kysely->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
?>


