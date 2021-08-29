const express = require('express');
const router = express.Router();
const historyController = require('./historyController');

router.post('/', historyController.create);
router.delete('/', historyController.del);
router.patch('/', historyController.update);

module.exports = router;