/* AIzaSyB7SCPWioTnCJikbu-4KihUHNygkADIQ80 */

function initMap() {
  const myLatLng = {
    lat: 44.512691497802734,
    lng: 11.339189529418945
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Sono qui"
  });
}