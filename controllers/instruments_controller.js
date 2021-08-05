const Instrument = require("../src/instrument");

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there'});
    },

    create(req, res, next) {
        const instrumentProps = req.body;

        Instrument.create(instrumentProps)
        .then(instrument => res.send(instrument))
        .catch(next)
    }
}
