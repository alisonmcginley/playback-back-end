const mongoose = require('mongoose');

mongoose.Promise= global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost:27017/instrument');
    mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
        console.warn('Warning', error);
    });
});

beforeEach((done) => {
    mongoose.connection.collections.instruments.drop(() => {
        done();
    });
});