const router = require('express').Router();
const mainController = require('./mainController');

router.get('/', mainController.redirect);
router.get('/main/:year/:month', mainController.main);
router.get('/calendar/:year/:month', mainController.calendar);
router.get('/statistic/:year/:month', mainController.statistic);

module.exports = router;