exports.index = (req, res, next) => {
    const date = new Date();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    res.redirect(`/main?year=${year}&month=${month}`);
}
exports.main = (req, res, next) => {
    const year = req.query.year;
    const month = req.query.month-1;
    const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const histories = {};
    const dayInfo = {};
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
