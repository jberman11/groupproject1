///////////
function initMap() {
    var uluru = {lat:30.2837, lng:-97.7325}; //hard coding the lat and lng of a location
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 8, center: uluru}); //gets the map to display on the html page
    var marker = new google.maps.Marker({position: uluru, map: map}); //adds a marker to the map
}

/////need to style on the map-- heigh 400px, width: 100px with the id "#map" for the map to display
///api src for the map "https://maps.googleapis.com/maps/api/js?key=AIzaSyBe5nhhitWSBh2wXf_8j9mABNu4hu2Er4M&callback=initMap"
/// need to find a way to bring this api together with the search bar that we have for the cities--maybe we can somehow bring in the lat and lng