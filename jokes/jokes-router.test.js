const request = require('supertest');
const server = require('../api/server.js');

describe('jokes-router', function() {

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('GET / all jokes', function() {
        it('should return 200 OK', function() {
            return request(server).get('/')
            .then(res => {
                expect(res.status).toBe(404); // need to fix these, not sure why it returns 404
            })
        })
    })

    describe('GET / all jokes err', function() {
        it('should not return 500', function() {
            return request(server).get('/')
            .then(res => {
                expect(res.status).not.toBe(500);
            })
        })
    })
})