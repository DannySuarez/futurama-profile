const request = require('supertest');
const app = require('../lib/app');

describe('futurama', () => {
  it('creates profile with POST', () => {
    return request(app)
      .post('/profile')
      .send({
        name: 'danny',
        favoriteCharacter: 'Bender'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'danny',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });
});
