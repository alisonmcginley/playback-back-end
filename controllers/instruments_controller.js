const Instrument = require("../src/instrument");
const audioSample = require("../src/audioSample")



module.exports = {
    get(req, res) {
        const name = req.body["name"];
        Instrument.findOne({name: name}).exec(function(err, instruments){
            res.send(instruments.audioSamples)

        });
    },

    create(req, res, next) {
        const instrumentProps = req.body;

        Instrument.create(instrumentProps)
        .then(instrument => res.send(instrument))
        .catch(next)
    }
}
