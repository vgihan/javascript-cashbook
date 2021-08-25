var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/main');
});
router.get('/main', function(req, res, next) {
  // 임시 데이터
  const histories = {
    21: [
      {category: '교통', memo: '후불 교통비 결제', payment: '현대카드', price: '-10,000원'},
      {category: '교통', memo: '후불 교통비 결제', payment: '현대카드', price: '-10,000원'},
      {category: '교통', memo: '후불 교통비 결제', payment: '현대카드', price: '-10,000원'},
    ],
    4: [
      {category: '교통', memo: '후불 교통비 결제', payment: '현대카드', price: '-10,000원'},
      {category: '교통', memo: '후불 교통비 결제', payment: '현대카드', price: '-10,000원'},
    ],
    7: [
      {category: '교통', memo: '후불 교통비 결제', payment: '현대카드', price: '-10,000원'},
    ]
  }
  const dayInfo = {
    21: {dayOfWeek: '월', income: 10000, expenditure: 30000},
    4: {dayOfWeek: '화', income: 0, expenditure: 30000},
    7: {dayOfWeek: '수', income: 0, expenditure: 30000},
  }
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  res.render('main', {
    year: year, 
    month: month, 
    income: '999,999원', 
    expenditure: '999,999원',
    numOfHistory: 9,
    histories: histories,
    dayInfo: dayInfo,
  });
});
router.get('/calendar', function(req, res, next) {
  res.render('caledar', { title: 'Express' });
});
router.get('/statistic', function(req, res, next) {
  res.render('statistic', { title: 'Express' });
});

module.exports = router;
