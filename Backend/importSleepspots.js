require("dotenv").config();
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function importSleepspots() {
    try {
        await client.connect();
        const db = client.db("sleepportsDB");
        const collection = db.collection("sleepspots");

        // JSON-Datei aus dem Frontend-Ordner laden
        const filePath = path.join(__dirname, "../Frontend/src/data/sleepspots.json");
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        // Falls Collection existiert, alte Daten löschen
        await collection.deleteMany({});
        await collection.insertMany(data);

        console.log(" Sleepports erfolgreich in MongoDB gespeichert!");
    } catch (err) {
        console.error("Fehler beim Import:", err);
    } finally {
        await client.close();
    }
}

importSleepspots();
