center = [19.2176494,72.8533899]
var mymap = L.map('map').setView(center, 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.dark',
    accessToken: 'pk.eyJ1Ijoia2l0ZXJldHN1IiwiYSI6ImNqc216MTExNzA2NDE0OW80bWhyNmwyMmoifQ.v7pnFYhTlfA59e_sMBMSBA'
}).addTo(mymap);

var marker = L.marker(center).addTo(mymap);

marker.bindPopup("<b>NJ MEDIA HOUSE</b> Pvt Ltd., <br>Off No.4 Kailas Bldg No.2,<br/>Borivali West, Mumbai.").openPopup();
