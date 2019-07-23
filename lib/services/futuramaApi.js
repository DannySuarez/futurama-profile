const request = require('superagent');

const getRandomQuote = count => {
  return request
    .get(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.body);
};

module.exports = getRandomQuote;
