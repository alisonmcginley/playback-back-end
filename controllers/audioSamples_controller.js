const AudioSample = require("../src/audioSample");
const InstrumentsController = require('../controllers/instruments_controller');
const Instrument = require("../src/instrument");
const mongoose = require('mongoose');

module.exports = {
    create(req, res, next) {
        const audioProps = req.body;

        AudioSample.create(audioProps)
        .then(audio => res.send(audio))
        .catch(next)
        // findOne&Update
    }
}