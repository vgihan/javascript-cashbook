const express = require('express');
const router = express.Router();
const paymentController = require('./paymentController');

router.post('/', paymentController.create);
router.delete('/', paymentController.del);

module.exports = router;