var express = require('express');
var router = express.Router();
var apiV1Router = require('./v1')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/v1', apiV1Router);

module.exports = router;