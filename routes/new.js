const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('form', { title: 'Message Board', header: 'Add a message!' });
});

module.exports = router;
