/* // AIzaSyB7SCPWioTnCJikbu-4KihUHNygkADIQ80 



function initMap() {
  const myLatLng = {
    lat: 44.50951401998059,
    lng: 11.300555926121575
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
} */