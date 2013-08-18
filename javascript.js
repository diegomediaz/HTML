var map;

$().ready(function() {
	$("button#geolocalizacion").click(
		function(){
			getGeolocation();
		}
	);
	
	function getGeolocation() {
		return navigator.geolocation.getCurrentPosition(handleGeolocation, handleErrors);
	}
	
	function handleGeolocation(position) {
		map = new GMaps({
			div: '#map',
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			height: '500px',
		});
		
		map.addMarker({
  			lat: position.coords.latitude,
			lng: position.coords.longitude,
			title: 'Tu'
		});
	} 
	
	function handleErrors(error){
		switch(error.code)
		{
			case error.PERMISSION_DENIED:
				alert("The location acquisition process failed because the document does not have permission to use the Geolocation API.");
				break;
			case error.POSITION_UNAVAILABLE:
				break;
				alert("The position of the device could not be determined");
			case error.TIMEOUT:
				alert("Timeout");
				break;
			default:
				alert("Something bad - and unknown - happened");
				break;
		}
	}
});

	function mi_alerta () {
		alert ("Te dije que no pulsases!!");
	}
