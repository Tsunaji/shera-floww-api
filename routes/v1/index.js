var express = require('express');
var router = express.Router();
var sales_order = require('./sales_order');

router.use('/sales-order', sales_order);

module.exports = router;