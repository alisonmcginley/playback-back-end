const mongoose = require('mongoose');

mongoose.Promise= global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost:27017/playback');
    mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
        console.warn('Warning', error);
    });
});