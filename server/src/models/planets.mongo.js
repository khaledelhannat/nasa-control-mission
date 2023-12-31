const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
    kepler_name: {
        type: String,
        required: true,
    }
});

// connects planetsSchema with "planets" collection
module.exports = mongoose.model('planet', planetsSchema);