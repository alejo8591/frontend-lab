
var default_lat_lng = new google.maps.LatLng(37.6735925, -1.6968357000000651);

if (navigator.geolocation) {

    var success = function(position){

        console.log('success');

        drawMap(new google.maps.LatLng(position.coords.latitude, pos.coords.longitude));
    };

    var fail = function(error){

        console.log(error);

        drawMap(default_lat_lng);

    };

    var options = {

        maximumAge: 50000,
        enableHighAccuracy: true,
        timeout: 6000
    };

    navigator.geolocation.getCurrentPosition(success, fail, options);

} else {

    drawMap(default_lat_lng);
}


var drawMap;

drawMap = function (latLng) {

    console.log('drawMap');

    console.log(latLng);

    var options = {
        zoom: 10,
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), options);

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Mi ubicación'
    });
};
