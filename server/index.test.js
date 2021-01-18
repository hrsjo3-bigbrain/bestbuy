const request = require('supertest');
const { app } = require('./index');

describe('GET /products/:id', () => {
  test('It should respond with a product object', async () => {
    const response = await request(app).get('/products/60021bc40276d4416e8f8cf3');
    expect(response.statusCode).toBe(200);
    expect(response.body._id).toBe('60021bc40276d4416e8f8cf3');
  });
});