import supertest from 'supertest';

import app from '../src/services/app';

const request = supertest;

// test('should respond on root', () =>
//   request(app)
//     .get('/')
//     .then((res) => {
//       expect(res.status).toBe(200);
//     }));

describe('App test', () => {
  it('should respond on root', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
  });
});
