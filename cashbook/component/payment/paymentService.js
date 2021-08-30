const PaymentModel = require('../../models/paymentModel');

async function insertPayment(user) {
    await PaymentModel.create(user);
}
async function deletePayment(user) {
    await PaymentModel.del(user);
}

module.exports = {insertPayment, deletePayment};