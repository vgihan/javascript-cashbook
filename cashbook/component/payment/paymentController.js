const PaymentService = require('./paymentService');

const create = async (req, res, next) => {
    const userDTO = req.body;
    await PaymentService.insertPayment(userDTO);
    res.redirect(`/main/${userDTO.year}/${userDTO.month}`);
}
const del = async (req, res, next) => {
    const userDTO = req.body;
    await PaymentService.deletePayment(userDTO);
    res.redirect(`/main/${userDTO.year}/${userDTO.month}`);
}

module.exports = {create, del};