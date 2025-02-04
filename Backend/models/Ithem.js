const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id: {
    type: String,
    required: true,
},
    isbn: {
    type: String,
    required: true,
},
});

module.exports = mongoose.model('Item', ItemSchema);
