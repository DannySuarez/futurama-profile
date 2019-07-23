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

  it('can get profile', () => {
    return request(app)
      .get('/api/v1/profile')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'danny',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        }]);
      }); 
  });

  it('can get profile by ID', () => {
    return request(app)
      .get('/api/v1/profile/0')
      .then(res => {        
        expect(res.body).toEqual({
          name: 'danny',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)  
        });
      });
  });

  it('can delete by ID', () => {
    return request(app)
      .delete('/api/v1/profile/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'danny',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });

});
