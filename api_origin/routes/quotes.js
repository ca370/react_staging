const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(quotes.getMultiple(req.query.page));
  } catch(err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

module.exports = router;