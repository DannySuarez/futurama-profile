const { getRandomQuote } = require('../services/futuramaApi');

module.exports = (req, res, next) => {
  getRandomQuote(req.body.favoriteCharacter, 1)
    .then(quoteArray => {
      req.quote = quoteArray[0];
      next();
    });
};
