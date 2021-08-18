const Instrument = require("../src/instrument");
const audioSample = require("../src/audioSample")


module.exports = {
    // gets instrument audiosamples by instrument name
    get(req, res) {
        const name = req.body["name"];
        console.log(req.params)
        Instrument.findOne({name: name}).exec(function(err, instruments){
            res.send(instruments.audioSamples)
        });
    },

    // getds all instrumenst
    getAll(req,res) {
        Instrument.find({}).exec(function(err, instruments){
            res.send(instruments)
        });
    },

    // creates an instrument without audiosamples
    create(req, res, next) {
        const instrumentProps = req.body;

        Instrument.create(instrumentProps)
        .then(instrument => res.send(instrument))
        .catch(next)
    }
}
