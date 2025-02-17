// Importiere notwendige Module
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");  // CORS importieren 
const dotenv = require('dotenv');
const { MongoClient } = require("mongodb");
// require("dotenv").config();

// Lade Umgebungsvariablen
dotenv.config();

// Erstelle eine Express-App
const app = express();
app.use(cors({ origin: 'http://localhost:3001' }));// damit das frondend auf die api zugreifen kann 
app.use(express.json());


// Verbinde mit MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error('MongoDB Verbindung fehlgeschlagen', err));

// Beispiel-Schema und Model
const SleepspotSchema = new mongoose.Schema({
    id: Number,
    title: String,
    coordinats: String,
    infos: String
});
const Sleepspot = mongoose.model('Sleepspot', SleepspotSchema);

// const router = express.Router();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

app.get("/", async (req, res) => {
    try {
       await client.connect();
        const db = client.db("sleepportsDB");
        const sleepspots = await db.collection("sleepspots").find().toArray();
        res.json(sleepspots);
    } catch (err) {
        console.error("Fehler beim Abrufen:", err);
        res.status(500).send("Fehler beim Abrufen der Sleepports");
    } finally {
        await client.close();
    }
});


// API-Route einbinden
const sleepspotsRoutes = require("./routes/sleepspots");
app.use("/api/sleepspots", sleepspotsRoutes);

// Starte den Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
