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
    await HistoryModel.update(user);
}

module.exports = {insertHistory, deleteHistory, updateHistory};