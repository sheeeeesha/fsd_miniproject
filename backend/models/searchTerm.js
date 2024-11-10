const mongoose = require('mongoose');

const searchTermSchema = new mongoose.Schema({
    term: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    count: {type: Number, default:1},
    // Additional fields if needed, e.g., userId, location, etc.
});

module.exports = mongoose.model('SearchTerm', searchTermSchema);
