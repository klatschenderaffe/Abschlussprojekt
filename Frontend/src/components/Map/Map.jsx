import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import icon from '../../assets/markericon.png';
// Soll später in MongoDB
import locations from '../../data/sleepspots.json';

const Map = () => {
  // API Key for Mapbox
  const TOKEN = import.meta.env.VITE_MAP_KEY;

  const [viewport, setViewport] = useState({
    latitude: 51.1657,
    longitude: 10.4515,
    zoom: 4,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    // Size of Mapbox
    <div style={{ width: '50vw', height: '50vh' }} className='map'>
      {/* Style Mapbox */}
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={TOKEN}
        width='100%'
        height='100%'
        transitionDuration='200'
        mapStyle='mapbox://styles/klatschenderaffe2/cm0fa3jqu00xz01qs30mgbmxr'
        onMove={(evt) => {
          console.log('Map moved:', evt.viewport);
          setViewport(evt.viewport);
        }}
      >
        {/* Load Locations from JSON File */}
        {locations.map((location) => {
          const [latitude, longitude] = location.coordinats
            .split(', ')
            .map(Number);
          return (
            <Marker key={location.id} latitude={latitude} longitude={longitude}>
              <div
                onClick={() => setSelectedLocation(location)}
                title={location.title} // Tooltip mit dem Titel
              >
                <img
                  src={icon}
                  alt=''
                  height={'50px'}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Marker>
          );
        })}

        {/* Popup by clicking on a location */}
        {selectedLocation && (
          <Popup
            className='popup'
            latitude={parseFloat(selectedLocation.coordinats.split(', ')[0])}
            longitude={parseFloat(selectedLocation.coordinats.split(', ')[1])}
            onClose={() => setSelectedLocation(null)}
            closeOnClick={false}
            anchor='top'
          >
            <div className='popup-text'>
              <h3>{selectedLocation.title}</h3>
              <p>{selectedLocation.infos}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Map;
