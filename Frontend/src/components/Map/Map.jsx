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

  // Daten vom Backend holen
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/sleepspots');
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    };
    fetchData();
  }, []);


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

    // Kartenbewegung verfolgen
    map.current.on('move', () => {
      setViewport({
        longitude: map.current.getCenter().lng,
        latitude: map.current.getCenter().lat,
        zoom: map.current.getZoom(),
      });
    });

     // Datenquelle und Layer hinzufügen
     map.current.on('load', () => {
      if (locations.length > 0) {
        // GeoJSON-Daten erstellen
        const geoJsonData = {
          type: 'FeatureCollection',
          features: locations.map((location) => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: location.coordinats.split(', ').map(Number),
            },
            properties: {
              title: location.title,
              infos: location.infos,
              id: location._id, // Eindeutige ID für jedes Feature
            },
          })),
        };

        // Quelle hinzufügen
        map.current.addSource('sleepspots', {
          type: 'geojson',
          data: geoJsonData,
        });

        // Layer hinzufügen
        map.current.addLayer({
          id: 'sleepspots-layer',
          type: 'circle',
          source: 'sleepspots',
          paint: {
            'circle-radius': 6,
            'circle-color': '#FF0000',
          },
        });

        // Popup bei Klick auf einen Marker
        map.current.on('click', 'sleepspots-layer', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const { title, infos } = e.features[0].properties;

          // Popup erstellen
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<h3>${title}</h3><p>${infos}</p>`)
            .addTo(map.current);
        });

        // Mauszeiger ändern, wenn über einen Marker gefahren wird
        map.current.on('mouseenter', 'sleepspots-layer', () => {
          map.current.getCanvas().style.cursor = 'pointer';
        });

        map.current.on('mouseleave', 'sleepspots-layer', () => {
          map.current.getCanvas().style.cursor = '';
        });
      }
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

export default Map
