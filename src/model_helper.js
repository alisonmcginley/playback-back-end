const mongoose = require('mongoose');
mongoose.Promise= global.Promise;

// connects to DB and reports open when connection is made
// done before any other model functions
before((done) => {
    mongoose.connect('mongodb://localhost:27017/playback');
    mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
        console.warn('Warning', error);
    });
});