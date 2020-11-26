center = [19.2176494,72.8533899]
var mymap = L.map('map').setView(center, 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGlydGgwMzM5IiwiYSI6ImNraHg4YTdtcDF5dmkycG5wanlnaWFpZncifQ.i7-iCnSQO5BaIKavsf28IQ'
}).addTo(mymap);
var marker = L.marker(center).addTo(mymap);

marker.bindPopup("<b>NJ MEDIA HOUSE</b> Pvt Ltd., <br>Off No.4 Kailas Bldg No.2,<br/>Borivali West, Mumbai.").openPopup();
