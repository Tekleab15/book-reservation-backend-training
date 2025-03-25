// __tests__/notfound.test.js
const request = require('supertest');
const app = require('../app');

describe('Unknown Route', () => {
  it('should return 404 for a non-existent endpoint', async () => {
    const response = await request(app).get('/nonexistent-url');
    expect(response.statusCode).toBe(404);
  });
});
