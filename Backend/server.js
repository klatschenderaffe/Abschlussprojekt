// Importiere notwendige Module
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");  // CORS importieren 
const dotenv = require('dotenv');

// Lade Umgebungsvariablen
dotenv.config();

// Erstelle eine Express-App
const app = express();
app.use(cors()); // damit das frondend auf die api zugreifen kann 
app.use(express.json());

// massage das es geht "bin da" 
app.get("/", (req, res) => {
    res.json({ massage: "Bin da"})
});

// Verbinde mit MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error('MongoDB Verbindung fehlgeschlagen', err));

// Beispiel-Schema und Model
const ItemSchema = new mongoose.Schema({
    name: String,
    description: String
});
const Item = mongoose.model('Item', ItemSchema);

// CRUD-Routen
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

//napp.post('/items', async (req, res) => {
   // const newItem = new Item(req.body);
  //  await newItem.save();
   // res.json(newItem);
//});

// API-Route einbinden
const sleepspotsRoutes = require("./routes/sleepspots");
app.use("/api/sleepspots", sleepspotsRoutes);

// Starte den Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
