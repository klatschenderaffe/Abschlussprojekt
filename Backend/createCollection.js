// Kann ausgefuehrt werden um ein Schema zu erstellen, wird gerade aber nicht benutzt

require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function createCollection() {
  try {
    await client.connect();
    const db = client.db('sleepportsDB');

    await db.createCollection('sleepspots', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['id', 'title', 'coordinats', 'infos'],
          properties: {
            id: { bsonType: 'int', description: 'Muss eine Ganzzahl sein' },
            title: { bsonType: 'string', description: 'Muss ein String sein' },
            coordinats: { bsonType: 'string', description: 'GPS-Koordinaten' },
            infos: { bsonType: 'string', description: 'Zusätzliche Infos' },
          },
        },
      },
    });

    console.log("✅ Collection 'sleepspots' mit Schema wurde erstellt!");
  } catch (err) {
    console.error('Fehler beim Erstellen der Collection:', err);
  } finally {
    await client.close();
  }
}

createCollection();
