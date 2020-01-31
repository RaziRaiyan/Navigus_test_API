const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isFavorite: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('NavigusProducts',ProductSchema);