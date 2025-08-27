// Initialize the map centered over St. Louis
var map = L.map('map').setView([38.6274, -90.1982], 10);

// Add base tile layer
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by OpenStreetMap contributors',
  minZoom: 0,
  maxZoom: 20
}).addTo(map);

// Add 5 markers with popups
var marker1 = L.marker([38.634996, -90.223976]).addTo(map);
marker1.bindPopup("<b>Restaurant 1</b><br>Pappy's Smokehouse");

var marker2 = L.marker([38.632117, -90.305613]).addTo(map);
marker2.bindPopup("<b>Restaurant 2</b><br>Hi-Pointe Drive-In");

var marker3 = L.marker([38.60224, -90.29925]).addTo(map);
marker3.bindPopup("<b>Restaurant 3</b><br>El Paisano Mexican Restaurant");

var marker4 = L.marker([38.62499, -90.33549]).addTo(map);
marker4.bindPopup("<b>Restaurant 4</b><br>Lion's Choice");

var marker5 = L.marker([38.640261, -90.251483]).addTo(map);
marker5.bindPopup("<b>Restaurant 5</b><br>Imo's Pizza");
