import React, { useEffect, useState } from "react";

const Sleepspots = () => {
    const [sleepspots, setSleepspots] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/sleepspots") // API-Endpunkt aufrufen
            .then(response => response.json())
            .then(data => setSleepspots(data))
            .catch(error => console.error("Fehler beim Laden:", error));
    }, []);

    return (
        <div>
            <h2>Sleepports</h2>
            <ul>
                {sleepspots.map((spot) => (
                    <li key={spot.id}>
                        <strong>{spot.title}</strong><br />
                        Koordinaten: {spot.coordinats} <br />
                        Infos: {spot.infos}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sleepspots;
