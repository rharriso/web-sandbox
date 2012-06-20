<?php

	$img = file_get_contents("power_station_mech_by_ferret42-d4b67zr.jpg");
	echo "data:image/jpeg;base64,".base64_encode($img);
?>