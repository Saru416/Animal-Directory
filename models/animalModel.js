const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        trim: true,
        maxLength: 50
    },
    type: {
        type: String,
        default: "wild"
    },
    expectedage: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
},{timetamps: true})

module.exports = mongoose.model('Animal', AnimalSchema)