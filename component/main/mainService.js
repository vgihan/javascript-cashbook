const HistoryModel = require('../../models/historyModel');
const PaymentModel = require('../../models/paymentModel');

function makeNowDate() {
    const nowDate = new Date();
    const nowMonth = nowDate.getMonth()+1;
    const nowYear = nowDate.getFullYear();
    return {date: nowDate, month: nowMonth, year: nowYear};
}
async function makeMainPageInfo(user) {
    const historyRecord = await HistoryModel.read({year: user.year, month: parseInt(user.month-1)});
    const paymentRecord = await PaymentModel.read();
    const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return {
        year: user.year, 
        month_str: monthStrs[user.month-1],
        month_num: user.month,
        income: historyRecord.reduce((pre, v) => {if(v.price > 0) pre += v.price;return pre;}, 0), 
        expenditure: historyRecord.reduce((pre, v) => {if(v.price < 0) pre += v.price;return pre;}, 0),
        numOfHistory: historyRecord.length,
        payments: paymentRecord,
        histories: getHistories(historyRecord),
        dayInfo: getDayInfo(historyRecord),
    };
    function getHistories(data) {
        return data.reduce((pre, v) => {
            const curDate = new Date(v.date).getDate();
            if(!pre[curDate]) pre[curDate] = [];
            pre[curDate].push(v);
            return pre;
        }, {});
    }
    function getDayInfo(data) {
        return data.reduce((pre, v) => {
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
async function makeCalPageInfo(user) {
    const historyRecord = await HistoryModel.read({year: user.year, month: user.month});
    const income = historyRecord.reduce((pre, v) => {if(v.price > 0) pre+=v.price; return pre;}, 0);
    const expenditure = historyRecord.reduce((pre, v) => {if(v.price < 0) pre+=v.price; return pre;}, 0)
    const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return {
        year: user.year, 
        month_str: monthStrs[user.month-1],
        month_num: user.month,
        income: income,
        expenditure: expenditure,
        sum: income+expenditure,
        history: getHistories(historyRecord),
    }
    function getHistories(data) {
        return data.reduce((pre, v) => {
            const curDate = new Date(v.date).getDate();
            if(!pre[curDate]) pre[curDate] = {income: 0, expenditure: 0, sum: 0};
            if(v.price > 0) pre[curDate].income += v.price;
            else pre[curDate].expenditure += v.price;
            return pre;
        }, {});
    }
}
async function makeStatPageInfo(user) {
    const historyRecord = await HistoryModel.read({year: user.year, month: user.month});
    const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return {
        year: user.year, 
        month_str: monthStrs[user.month-1],
        month_num: user.month,
        sum: recordSum(historyRecord),
        data: makeData(historyRecord),
    }
    
    function makeData(records) {
        const categories = ['생활', '의료/건강', '쇼핑/뷰티', '교통', '식비', '문화/여가', '미분류'];
        const result = resultInit(categories);
        result.forEach(element => {
            const categoryRecords = records.filter(record => record.category === element.category);
            element.expend = (-1)*recordSum(categoryRecords);
            element.history = recordOfDay(categoryRecords);
        });
    }
    function resultInit(categories) {
        return categories.reduce((pre, v) => {pre.push({category: v, expend: 0, history: {}}); return pre;}, []);
    }
    function recordSum(records) {
        return records.reduce((pre, v) => {pre += v.price; return pre;}, 0);
    }
    function recordOfDay(records) {
        return records.reduce((pre, v) => {
            const date = new Date(v.date).getDate();
            if(!pre[date]) pre[date] = [];
            pre[date].push({memo: v.memo, payment: v.payment, price: v.price});
        }, {});
    }
}

module.exports = {makeMainPageInfo, makeNowDate, makeCalPageInfo, makeStatPageInfo};