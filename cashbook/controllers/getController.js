const _model = require('../models/model');
const model = new _model();

exports.index = (req, res, next) => {
    const date = new Date();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    res.redirect(`/main?year=${year}&month=${month}`);
}
exports.main = async (req, res, next) => {
    const data = await model.selectHistory(req.query.year, req.query.month-1);
    const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(data);
    res.render('main', {
        year: req.query.year, 
        month_str: monthStrs[req.query.month-1],
        month_num: req.query.month,
        income: '999,999원', 
        expenditure: '999,999원',
        numOfHistory: 9,
        histories: getHistories(data),
        dayInfo: getDayInfo(data),
    });
    function getHistories(data) {
        return data.reduce((pre, v, i) => {
            const curDate = new Date(v.date).getDate();
            if(!pre[curDate]) pre[curDate] = [];
            pre[curDate].push(v);
            return pre;
        }, {});
    }
    function getDayInfo(data) {
        return data.reduce((pre, v, i) => {
            const date = new Date(v.date);
            const weeks = ['일', '월', '화', '수', '목', '금', '토'];
            if(!pre[date.getDate()]) {
                pre[date.getDate()] = {
                    dayOfWeek: weeks[date.getDay()],
                    income: data.filter((history) => new Date(history.date).getDate() === date.getDate() && history.price > 0).reduce((pre, v, i) => {
                        return pre + v.price;
                    }, 0),
                    expenditure: data.filter((history) => new Date(history.date).getDate() === date.getDate() && history.price < 0).reduce((pre, v, i) => {
                        return pre + v.price;
                    }, 0),
                }
            }
            return pre;
        }, {});
    }
}
exports.calendar = (req, res, next) => {
    const year = req.query.year;
    const month = req.query.month-1;
    const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    res.render('calendar', { 
        year: year, 
        month_str: monthStrs[month],
        month_num: month+1,
    });
}
exports.statistic = (req, res, next) => {
    const year = req.query.year;
    const month = req.query.month-1;
    const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    res.render('statistic', {
        year: year, 
        month_str: monthStrs[month],
        month_num: month+1,
    });
}
