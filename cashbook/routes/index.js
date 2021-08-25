const express = require('express');
const router = express.Router();
const getController = require('../controllers/getController');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('database/cashbook.db', (err) => {
  if(err) console.error(err);
  else console.log('Success Connect')
});

/* GET home page. */
router.get('/', getController.index);
router.get('/main', getController.main);
router.get('/calendar', getController.calendar);
router.get('/statistic', getController.statistic);

/* POST controller */
router.post('/history', (req, res, next) => {
  
});
router.post('/payment', (req, res, next) => {

});

module.exports = router;
