const PaymentService = require('./paymentService');

const create = async (req, res, next) => {
    const userDTO = req.body;
    await PaymentService.insertPayment(userDTO);
    res.redirect(`/main/${userDTO.year}/${userDTO.month}`);
}
const del = async (req, res, next) => {

}
const update = async (req, res, next) => {
    
}

module.exports = {create, del, update};