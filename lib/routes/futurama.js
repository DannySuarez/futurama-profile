const { Router } = require('express');
const getRandomQuote = require('../middleware/futuramaQoute');

const profiles = [];

module.exports = Router()

  .post('/profile', getRandomQuote, (req, res) => {
    const {
      name,
      favoriteCharacter
    } = req.body;

    const profile = {
      name: name,
      favoriteCharacter: favoriteCharacter,
      tagline: req.quote.quote
    };

    profiles.push(profile);
    res.send(profile);

  })

  .get('/api/v1/profile', (req, res) => {
    res.send(profiles);    
  })

  .get('/api/v1/profile/:id', (req, res) => {    
    res.send(profiles[req.params.id]);
  })

  .delete('/api/v1/profile/:id', (req, res) => {
    const deleted = profiles.splice(req.params.id, 1);    
    res.send(deleted[0]);
  });


