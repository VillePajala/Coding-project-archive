<?php
	$alku  = urlencode($_REQUEST['alku']);
	$loppu = urlencode($_REQUEST['loppu']);

	$urli = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=".$alku."&destinations=".$loppu."&key=AIzaSyDyJh0Tff1nL8NApdNUO8ENmcn6xmzDhmM";

	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json");

	$ci = curl_init();									
    curl_setopt($ci, CURLOPT_URL, $urli);				
    curl_setopt($ci, CURLOPT_RETURNTRANSFER, 1);		
    curl_setopt($ci, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ci, CURLOPT_SSL_VERIFYPEER, 0);		
    $data = curl_exec($ci);
    curl_close($ci);

	print json_encode(json_decode($data,JSON_PRETTY_PRINT));
?>
