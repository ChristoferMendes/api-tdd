import supertest from 'supertest';
import app from '../../src/services/app';

const request = supertest;

describe('User Tests', () => {
  describe('Users Crud', () => {
    it('should list all users', async () => {
      const res = await request(app).get('/users');

      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0]).toHaveProperty('name', 'John Doe');
    });

    it('should insert a user with success', async () => {
      const res = await request(app).post('/users').send({ name: 'Walter White', email: 'walter@gmail.com' });

      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Walter White');
    });
  });
});
