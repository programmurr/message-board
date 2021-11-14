const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('form', { title: 'New Form page' });
});

module.exports = router;
