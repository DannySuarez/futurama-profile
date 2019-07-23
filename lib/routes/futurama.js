const { Router } = require('express');
const getRandomQuote = require('../middleware/futuramaQoute');

const profiles = [];

module.exports = Router()

  .post('/', getRandomQuote, (req, res) => {
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

  });


