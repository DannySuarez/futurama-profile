const request = require('superagent');

const getRandomQuote = (character, count) => {
  return request
    .get(`https://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);  
};

module.exports = { getRandomQuote };
