import { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import icon from '../../assets/markericon.png';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  // API Key for Mapbox
  const TOKEN = import.meta.env.VITE_MAP_KEY;
  const mapContainer = useRef(null); // Container für die Karte
  const map = useRef(null); // Map-Instanz
  const [locations, setLocations] = useState([]); // Daten aus der MongoDB

  // Daten vom Backend holen
  const [viewport, setViewport] = useState({
    latitude: 51.1657,
    longitude: 10.4515,
    zoom: 4,
  });

  // Karte initialisieren
  useEffect(() => {
    if (map.current) return; // Karte bereits initialisiert

    mapboxgl.accessToken = TOKEN;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/klatschenderaffe2/cm0fa3jqu00xz01qs30mgbmxr',
      center: [viewport.longitude, viewport.latitude],
      zoom: viewport.zoom,
    });

    // new mapboxgl.Marker().setLngLat([5.3826, 53.1025]).addTo(map.current);

    // new mapboxgl.Marker().setLngLat([ 6.1295, 49.8022]).addTo(map.current);

    // Daten vom Backend holen
    // Array durchgehen mit foreach
    // für jedes Element die Koordinaten parsen

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://172.18.0.3:5000/api/sleepspots'); //api/sleepspots RAUS GEKÜRZT 'http://localhost:5000/api/sleepspots'
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          let lat;
          let lng;
          if (
            Object.prototype.toString.call(element.coordinats) ===
            '[object Array]'
          ) {
            lat = element.coordinats[0];
            lng = element.coordinats[1];
          } else {
            // element is string...
            const coordString = element.coordinats.split(',');
            lat = coordString[0].trim();
            lng = coordString[1].trim();
          }
          var html = '<div class="marker-popup">' + element.title + '</div>';

          var customPopUp = new mapboxgl.Popup({
            anchor: 'bottom', // To show popup on top
            offset: { bottom: [0, -10] }, // To prevent popup from over shadowing the marker.
            closeOnClick: true, // To prevent close on mapClick.
          }).setHTML(html); // You can set any valid HTML.

          const marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .setPopup(customPopUp)
            .addTo(map.current);
        }
      }
    };
    xhr.send();
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('http://localhost:5000/api/sleepspots');
    //       const data = await response.json();
    //       data.array.forEach(element => {
    //         const coords = element["coordinates"].split(",");

    //       });
    //       //setLocations(data);
    //     } catch (error) {
    //       console.error('Fehler beim Abrufen der Daten:', error);
    //     }
    //   };
    //   fetchData();
    // }, []);

    // Kartenbewegung verfolgen
    map.current.on('move', () => {
      setViewport({
        longitude: map.current.getCenter().lng,
        latitude: map.current.getCenter().lat,
        zoom: map.current.getZoom(),
      });
    });
  }, [locations]); // Karte neu initialisieren, wenn Daten geladen sind

  return (
    <div
      ref={mapContainer}
      style={{ width: '50vw', height: '50vh' }}
      className='map'
    />
  );
};

export default Map;
