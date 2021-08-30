const HistoryModel = require('../../models/historyModel');

const insertHistory = async (user) => {
    const history = user;
    history['price'] = parseInt(user.price)*parseInt(user.sign);
    await HistoryModel.create(history);
}
const deleteHistory = async (user) => {
    await HistoryModel.delete(user);
}
const updateHistory = async (user) => {
    const history = user;
    history['price'] = history['price'].replace(/[^0-9]/g, '');
    history['price'] = parseInt(history['price'])*parseInt(history['sign']);
    await HistoryModel.update(history);
}

module.exports = {insertHistory, deleteHistory, updateHistory};