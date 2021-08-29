const HistoryModel = require('../../models/historyModel');

const insertHistory = async (user) => {
    await HistoryModel.create(user);
}
const deleteHistory = async (user) => {
    await HistoryModel.delete(user);
}
const updateHistory = async (user) => {
    await HistoryModel.update(user);
}

module.exports = {insertHistory, deleteHistory, updateHistory};