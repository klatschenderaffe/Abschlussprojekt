// Der Backend Server an sich

// Importiere notwendige Module
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // CORS importieren
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
// require("dotenv").config();

// Lade Umgebungsvariablen
dotenv.config();

// Erstelle eine Express-App
const app = express();
app.use(
  cors({
    origin: ['https://van-ventura.eu', 'http://localhost', 'http://frontend'], // Erlaube beide Origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
// app.use(cors({ origin: 'http://localhost:80' })); // damit das frondend auf die api zugreifen kann
app.use(express.json());
const SleepspotSchema = new mongoose.Schema({
  id: Number,
  title: String,
  coordinats: String,
  infos: String,
});

const Sleepspot = mongoose.model('Sleepspot', SleepspotSchema);

// Funktion importSleepspots definieren
async function importSleepspots() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('sleepportsDB');
    const collection = db.collection('sleepspots');

    // JSON-Datei aus dem Frontend-Ordner laden
    const filePath = path.join(__dirname, './data/sleepspots.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    console.log('📂 Geladene Daten:', data);

    // Alte Daten löschen und neue einfügen
    await collection.deleteMany({});
    await collection.insertMany(data);

    console.log('✅ Sleepports erfolgreich in MongoDB gespeichert!');
  } catch (err) {
    console.error('❌ Fehler beim Import der Sleepports:', err);
  } finally {
    await client.close();
  }
}

// Verbinde mit MongoDB und rufe importSleepspots() auf
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('MongoDB verbunden');

    // Rufe die Funktion importSleepspots() auf
    await importSleepspots();
  })
  .catch((err) => console.error('MongoDB Verbindung fehlgeschlagen', err));

// Postman Abfrage:
app.get('/', async (req, res) => {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('sleepportsDB');
    const sleepspots = await db.collection('sleepspots').find().toArray();
    res.json(sleepspots);
  } catch (err) {
    console.error('Fehler beim Abrufen:', err);
    res.status(500).send('Fehler beim Abrufen der Sleepports');
  } finally {
    await client.close();
  }
});

// API-Route einbinden
const sleepspotsRoutes = require('./routes/sleepspots');
app.use('/api/sleepspots', sleepspotsRoutes);

// Starte den Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
