import supertest from 'supertest';

import app from '../src/services/app';

const request = supertest;

test('should respond on root', () =>
  request(app)
    .get('/')
    .then((res) => {
      expect(res.status).toBe(200);
    }));
