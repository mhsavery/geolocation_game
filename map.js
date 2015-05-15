$(document).ready(function(){    

    var geocoder;
    var map;

	function initialize() {

            geocoder = new google.maps.Geocoder();
            var mapOptions = {
                zoom: 3,
                center: new google.maps.LatLng(0,0)
            };
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var streetViewLayer = new google.maps.StreetViewCoverageLayer();
            streetViewLayer.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);



    $(".location").focus(function(){


    });


    $(".go-to").click(function(){


    });


    $(".set").click(function(){


    });


    $("#createLink").click(function(){


    });




});
