var map = L.map('map').setView([38.6274,-90.1982], 10);

  // load a tile layer
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
	minZoom: 0,
	maxZoom: 20,
}).addTo(map);

var marker1 = L.marker([38.634996, -90.223976]).addTo(map);
var marker2 = L.marker([38.632117, -90.305613]).addTo(map);
var marker3 = L.marker([38.60224, -90.29925]).addTo(map);
var marker4 = L.marker([38.62499, -90.33549]).addTo(map);
var marker5 = L.marker([38.640261, -90.251483]).addTo(map);

marker1.bindPopup("<b>Resturant 1</b><br>Pappy's Smokehouse").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Hi-Pointe Drive-In").openPopup();
marker3.bindPopup("<b>Resturant 3</b><br>El Paisano Mexican Restaurant").openPopup();
marker4.bindPopup("<b>Resturant 4</b><br>Lion's Choice").openPopup();
marker5.bindPopup("<b>Resturant 5</b><br>Imo's Pizza").openPopup();
