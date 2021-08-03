const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const AudioSchema = require('./audioSchema');

const InstrumentSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is required.']
    },
    audio: [AudioSchema]
})
const Instrument = mongoose.model('instrument', InstrumentSchema);

module.exports = Instrument;