/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

console.log("Carga -> main.js");

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

const map = L.map('js-map').setView([-4.185640, -79.229579], 13);

const markerUrl = new URL(
    '../images/location.png',
    import.meta.url
  ).toString();

const configIcon = L.icon({
    iconUrl: markerUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35]
  });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([-4.185640, -79.229579],{icon: configIcon})
  .addTo(map).bindPopup('Cerro Yunanga')
    .openPopup();