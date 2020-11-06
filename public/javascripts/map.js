var map = L.map('main_map').setView([5.0676813,-75.499784],18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    /** 
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    */
}).addTo(map);

L.marker([5.0676813,-75.499784]).addTo(map);
L.marker([5.0672805,-75.4990974]).addTo(map);
L.marker([5.0669973,-75.5008676]).addTo(map);