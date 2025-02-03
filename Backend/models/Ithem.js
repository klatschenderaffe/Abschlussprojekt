const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Item', ItemSchema);
