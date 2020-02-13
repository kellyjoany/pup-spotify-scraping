import request from 'supertest';
import app from '../../src/app';

require('dotenv/config');

describe('Log', () => {
  it('should be able to store results in log file', async () => {
    const response = await request(app)
      .post('/log')
      .send();

    expect(response.status).toBe(201);
  });

  it('should be able to get the results in log file', async () => {
    const response = await request(app)
      .get('/log')
      .send();

    expect(response.status).toBe(200);
  });
});
