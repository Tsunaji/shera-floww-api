var express = require('express');
var router = express.Router();
const saleOrder = require('../../controllers/saleOrder.controller');

router.get('/', saleOrder.findAll);
router.get('/search', saleOrder.validate("search"), saleOrder.search);

module.exports = router;