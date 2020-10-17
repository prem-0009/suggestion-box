const mongoose = require('mongoose');

let schemaSuggestion = new mongoose.Schema ({
    title:{type: String, lowercase: true, unique: true, required: true },
    name:{type: String, lowercase: true,  required: true },
    name:{type: String, lowercase: true,  required: true },
    name:{type: Number, default: 0 },
    name:{type: Boolean},
    name:{type: Date, default: Date.now},
})

module.exports = mongoose.model('suggestion', schemaSuggestion);