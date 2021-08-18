const AudioSample = require("../src/audioSample");
const InstrumentsController = require('../controllers/instruments_controller');
const Instrument = require("../src/instrument");
const mongoose = require('mongoose');

module.exports = {
    create(req, res, next) {
        Instrument.findOneAndUpdate(
            {name:req.body.instrument},
            {$push: {audioSamples: req.body}}
        )
        .then(audio => res.send(audio.audioSamples))
        .catch(next)
    }
}