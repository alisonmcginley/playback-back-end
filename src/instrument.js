const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/instrument');
const AudioSchema = require('./audioSample')
const Schema = mongoose.Schema;

const InstrumentSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is required.'],
    },
    audioSamples: [AudioSchema]
});

const Instrument = mongoose.model('instrument', InstrumentSchema);

module.exports = Instrument;