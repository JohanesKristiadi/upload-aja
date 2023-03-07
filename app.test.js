const request = require('supertest');
// const superTest = require('supertest')
const app = require("./app")

describe('#GET /greetings', () => {
    it('it should return hello world', async () => {
        const response = await request(app)
            .get('/greetings')
            .expect('Content-Type', "application/json; charset=utf-8")
            .expect(200)
            .expect({
                "greet" : "Hello"
            });
    });
    it('it should return user array', async () => {
        const response = await request(app)
            .get('/users')
            .expect('Content-Type', "application/json; charset=utf-8")
            .expect(200)
            .expect(
                [ { id: 1, name: 'Johanes' }, { id: 2, name: 'Alvin' } ]
            );
    });
});
