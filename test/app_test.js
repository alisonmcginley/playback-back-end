const assert = require('assert');
const request = require('supertest');
const router = require('../routes/index')

describe('the express app', () => {
    it('handles a GET request to /instrument', (done) => {
        request(router)
            .get('/instrument')
            .end((err, response) => {
                console.log(response)
            })
    })
})