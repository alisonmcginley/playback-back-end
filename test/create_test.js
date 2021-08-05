const assert = require('assert');
const Instrument = require('../src/instrument');
const AudioSample = require('../src/audioSample');

describe('Creating records', () => {
    it('saves an instrument', (done) => {
    const drums = new Instrument ({
        name: 'drums'
    });

    drums.save()
        .then(() => {
            assert(!drums.isNew);
            done()
        });
    });

});

