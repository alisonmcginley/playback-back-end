const mongoose = require('mongoose');
const assert = require('assert');
const Instrument = require('../src/instrument');
const AudioSample = require('../src/audioSample');


describe('Assocations', () => {
    // creates drum and audiosample to check for relation
    let drums, audioSample;
    beforeEach((done) => {
        drums = new Instrument ({ name: 'Drums'});
        audioSample = new AudioSample ({ index: 0, name:'kick'});
        drums.audioSamples.push(audioSample);
        Promise.all([drums.save(), audioSample.save()])
            .then(() => done());
    });

    it('saves a relation between instrument and sample', (done) => {
        Instrument.findOne({ name: 'Drums'})
            .populate('audioSamples')
            .then((instrument) => {
                assert(instrument.audioSamples[0].name === 'kick')
                done();
            });
    });
});