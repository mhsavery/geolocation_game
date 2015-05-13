$(document).ready(function(){

	function initialize() {
            var mapOptions = {
                zoom: 3,
                center: new google.maps.LatLng(0,0)
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var streetViewLayer = new google.maps.StreetViewCoverageLayer();
            streetViewLayer.setMap(map);
        }

        google.maps.event.addDomListener(window, 'load', initialize);




});
