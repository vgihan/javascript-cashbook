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

module.exports = {makeMainPageInfo, makeNowDate};