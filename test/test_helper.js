const mongoose = require('mongoose');
mongoose.Promise= global.Promise;

// connects to mongodb before performing tests
before((done) => {
    mongoose.connect('mongodb://localhost:27017/instrument');
    mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
        console.warn('Warning', error);
    });
});

// drops the tests database
beforeEach((done) => {
    mongoose.connection.collections.instruments.drop(() => {
        done();
    });
});