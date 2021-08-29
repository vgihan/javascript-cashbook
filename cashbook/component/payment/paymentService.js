const HistoryModel = require('../../models/historyModel');

async function insertHistory(user) {
    await HistoryModel.create(user);
}

module.exports = {insertHistory};