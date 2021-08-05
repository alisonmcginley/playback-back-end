const Instrument = require("../src/instrument");

module.exports = {
    get(req, res) {
        const name = req.body["name"];
        Instrument.findOne({name: name}).exec(function(err, instruments){
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
