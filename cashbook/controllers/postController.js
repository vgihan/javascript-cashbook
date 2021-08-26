const _model = require('../models/model');
const model = new _model();

exports.history = async (req, res, next) => {
    const history = {
        date: req.body.date,
        category: req.body.category,
        memo: req.body.memo,
        payment: req.body.payment,
        price: req.body.price,
    };
    await model.insertHistory(history);
    res.redirect(`/main?year=${req.body.year}&month=${req.body.month}`);
}
exports.payment = async (req, res, next) => {
    const payment = req.body.payment;
    await model.insertPayment(payment);
    res.redirect(`/main?year=${req.body.year}&month=${req.body.month}`);
}