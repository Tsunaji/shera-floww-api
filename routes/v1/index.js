var express = require('express');
var router = express.Router();
var saleOrder = require('./saleOrder.route');

router.use('/sale-order', saleOrder);

module.exports = router;