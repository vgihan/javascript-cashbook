var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const date = new Date();
  const month = date.getMonth()+1;
  const year = date.getFullYear();
  res.redirect(`/main?year=${year}&month=${month}`);
});
router.get('/main', function(req, res, next) {
  const year = req.query.year;
  const month = req.query.month-1;
  const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
  res.render('main', {
    year: year, 
    month_str: monthStrs[month],
    month_num: month+1,
    income: '999,999원', 
    expenditure: '999,999원',
    numOfHistory: 9,
    histories: histories,
    dayInfo: dayInfo,
  });
});
router.get('/calendar', function(req, res, next) {
  const year = req.query.year;
  const month = req.query.month-1;
  const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  res.render('calendar', { 
    year: year, 
    month_str: monthStrs[month],
    month_num: month+1,
  });
});
router.get('/statistic', function(req, res, next) {
  const year = req.query.year;
  const month = req.query.month-1;
  const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  res.render('statistic', {
    year: year, 
    month_str: monthStrs[month],
    month_num: month+1,
  });
});

module.exports = router;
