const request = require('supertest');
const app = require('../lib/app')

describe('futurama', () => {
  it('creates profile with POST', () => {
    return request(app)
      .post('/')
      .send({
        name: 'danny',
        favoriteCharacter: 'Bender'
      })
      .then(res => {
        console.log(res.body);
        
        expect(res.body).toEqual({
          name: 'danny',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });
});
