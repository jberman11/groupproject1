
function initMap() {
    var map = new google.maps.Map(document.getElementById('maps'), {
      zoom: 16,
      center: {lat:30, lng: -90}
    });

    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat:30, lng: -90} 
    });
    marker.addListener('click', toggleBounce);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
