import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";


// Hauptkomponente für die Mapbox  
const MapboxMap = () => {
    const [sleepspots, setSleepspots] = useState([]);         // State für den geladenen spot 
    const [selectedSpot, setSelectedSpot] = useState(null); // State für den aktuell ausgewählten Spot


    // API-Anfrage beim ersten Rendern
    useEffect(() => {
        fetch("http://localhost:5000/api/sleepspots")
            .then(response => response.json())
            .then(data => setSleepspots(data))  // daten werde in der State gespeichert 
            .catch(error => console.error("Fehler beim Laden:", error));  // Fehler-Handling
    }, []);

    return (
        <Map
            initialViewState={{
                longitude: 10.0,   // Startposition der Karte 
                latitude: 50.0,
                zoom: 4,
            }}
            style={{ width: "100vw", height: "100vh" }}     // Vollbild-Karte
            mapStyle="mapbox://styles/mapbox/streets-v11"   // Karten-Design 
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}    // API-Schlüssel aus Umgebungsvariablen 
        >
             {/* Alle Sleepports als Marker auf die Karte setzen */}
            {sleepspots.map((spot) => {
                const [lat, lon] = spot.coordinats.split(", ").map(Number); // Sicherstellen, dass Koordinaten als Zahl gespeichert sind
                return (
                    <Marker key={spot.id} longitude={lon} latitude={lat} onClick={() => setSelectedSpot(spot)}>
                        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                            📍
                        </button>
                    </Marker>
                );
            })}

             {/* Popup für den ausgewählten Spot anzeigen */}
            {selectedSpot && (
                <Popup
                    longitude={parseFloat(selectedSpot.coordinats.split(", ")[1])}
                    latitude={parseFloat(selectedSpot.coordinats.split(", ")[0])}
                    onClose={() => setSelectedSpot(null)}   // Schließt das Popup beim Klicken 
                >
                    <div>
                        <h3>{selectedSpot.title}</h3>
                        <p>{selectedSpot.infos}</p>
                    </div>
                </Popup>
            )}
        </Map>
    );
};

export default MapboxMap;
