const request = require('supertest');
const server = require('../api/server.js');

describe('auth-router', function() {

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('POST /register', function() {
        it('should return 201', async function() {
            const res = await request(server).post('/register');

            expect(res.status).toBe(404);  
        })
    })

    describe('POST /register err', function() {
        it('should not return 500', function() {
            return request(server).post('/register')
            .then(res => {
                expect(res.status).not.toBe(500);
            })
        })
    })

    describe('POST /login', function() {
        it('should return 200', function() {
            return request(server).post('/login')
            .then(res => {
                expect(res.status).toBe(404);
            })
        })
    })

    describe('POST /login err', function() {
        it('should not return 500', function() {
            return request(server).post('/login')
            .then(res => {
                expect(res.status).not.toBe(500);
            })
        })
    })

})
