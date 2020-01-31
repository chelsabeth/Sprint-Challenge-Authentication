const request = require('supertest');
const server = require('../api/server.js');

describe('auth-router', function() {

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('POST /register', function() {
        it('should return new user with text/html', function() {
           return request(server).post('/api/auth/register')
           .then(res => {
               expect(res.type).toMatch("text/html") // tests if it's a html or text string
           }) 
        })
    })

    describe('POST /register err', function() {
        it('should not return JSON', function() {
            return request(server).post('/api/auth/register')
            .then(res => {
                expect(res.type).not.toMatch(/json/i); 
                // tests the test above...so if you put in text/html this test will fail
            })
        })
    })

    describe('POST /login', function() {
        it('should return JSON', function() {
            return request(server).post('/api/auth/login')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })

    describe('POST /login err', function() {
        it('should not match text/html', function() {
            return request(server).post('/api/auth/login')
            .then(res => {
                expect(res.type).not.toMatch("text/html"); 
                // tests the test above...so if you put in /json/i this test will fail
            })
        })
    })

})
