// const assert = require('assert');
// const Instrument = require('../src/instrument');
// const AudioSample = require('../src/audioSample');

// describe('Updating records' , () => {
//     let drums;
//     beforeEach((done) => {
//         drums = new Instrument({ name: 'Drums', audioSamples :[]});
//         drums.save()
//             .then(() => done());
//     });

//     function assertAudio(operation, done) {
//         operation
//         .then(() => Instrument.find({}))
//             .then((instruments) => {
//                 assert(instruments.length === 1);
//                 assert(instruments[0].audioSamples === )
//             })
//     }
// })
