const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const router = express.Router();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
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

module.exports = router;
