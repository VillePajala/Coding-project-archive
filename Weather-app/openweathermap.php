<?php
	if(isset($_REQUEST['paikkakunta'])){
	$paikkakunta = urlencode($_REQUEST['paikkakunta']);
	$urli = "http://api.openweathermap.org/data/2.5/weather?lang=en&q=".$paikkakunta."&appid=85bff0d6d2b77e90b75aea6889af3026";
	$data = file_get_contents($urli);
	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json");
	print json_encode(json_decode($data), JSON_PRETTY_PRINT);
	}
?>
