const express = require('express');
const router = express.Router();
const getController = require('../controllers/getController');
const postController = require('../controllers/postController');

/* GET request */
router.get('/', getController.index);
router.get('/main', getController.main);
router.get('/calendar', getController.calendar);
router.get('/statistic', getController.statistic);

/* POST request */
router.post('/history', postController.history);
router.post('/payment', postController.payment);

module.exports = router;