const Instrument = require("../src/instrument");
const audioSample = require("../src/audioSample")



module.exports = {
    get(req, res) {
        const name = req.body["name"];
        console.log(req.params)
        Instrument.findOne({name: name}).exec(function(err, instruments){

            res.send(instruments.audioSamples)

        });
    },

    getAll(req,res) {
        Instrument.find({}).exec(function(err, instruments){
            res.send(instruments)
        });
    },

    create(req, res, next) {
        const instrumentProps = req.body;

        Instrument.create(instrumentProps)
        .then(instrument => res.send(instrument))
        .catch(next)
    }
}
