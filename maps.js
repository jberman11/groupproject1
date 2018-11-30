
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: schools.city
    });

    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: schools.city 
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
