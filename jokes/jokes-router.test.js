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
            return request(server).get('/api/jokes')
            .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImNoZWxzZWEiLCJwYXNzd29yZCI6IiQyYSQwOCQ5UXJqcEo0aVFONGEuQlhwNHlPNk91UjNnT2pEQVBWOGFzUGRYQVRJa2JsQUY0TU5TdmV6ZSJ9LCJpYXQiOjE1ODA0ODk5MzksImV4cCI6MTU4MDU3NjMzOX0.7Ir2UW1-rM8tRjzARZge1ZLBt80hsDUo2MT_yPFs_E0")
            .then(res => {
                expect(res.status).toBe(200); // need to fix these, not sure why it returns 404
            })
        })
    })

    describe('GET / all jokes err', function() {
        it('should not return 500', function() {
            return request(server).get('/api/jokes')
            .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImNoZWxzZWEiLCJwYXNzd29yZCI6IiQyYSQwOCQ5UXJqcEo0aVFONGEuQlhwNHlPNk91UjNnT2pEQVBWOGFzUGRYQVRJa2JsQUY0TU5TdmV6ZSJ9LCJpYXQiOjE1ODA0ODk5MzksImV4cCI6MTU4MDU3NjMzOX0.7Ir2UW1-rM8tRjzARZge1ZLBt80hsDUo2MT_yPFs_E0")
            .then(res => {
                expect(res.status).not.toBe(500);
            })
        })
    })
})