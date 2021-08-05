const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/audioSample');
const Schema = mongoose.Schema;

const AudioSchema = new Schema ({
    index: {
        type : Number
    },
    name: {
        type: String
    },
    instrument: { type: Schema.Types.ObjectId, ref: 'instrument' }
});

const AudioSample = mongoose.model('audioSample', AudioSchema);

module.exports = AudioSample;