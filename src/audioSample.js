const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/audioSample');
const Schema = mongoose.Schema;

// schema to allow audio to serve as subdocument in instrument
const AudioSchema = new Schema ({
    index: {
        type : Number
    },
    name: {
        type: String
    },
    AUDIO_URI:{
        type: String
    }
});


module.exports = AudioSchema;