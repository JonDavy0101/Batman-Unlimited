$(document).ready(function() {
	var x = document.getElementById("demo");

	function getLocation() {
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(showPosition);
	  } else { 
	    x.innerHTML = "Geolocation is not supported by this browser.";
	  }
	}

	function showPosition(position) {
	  x.innerHTML = "Hi. This is Oracle. We have received your distress call. We noticed that your coordinates are: <br>Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + "<br>Hang in there. Help is on it way!";
	}
});