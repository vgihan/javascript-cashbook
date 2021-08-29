const HistoryService = require('./historyService');

async function create(req, res, next) {
    const userDTO = req.body;
    await HistoryService.insertHistory(userDTO);
    res.redirect(`/main/${userDTO.year}/${userDTO.month}`);
}
async function del(req, res, next) {
    const userDTO = req.body;
    await HistoryService.deleteHistory(userDTO);
    res.redirect(`/main/${userDTO.year}/${userDTO.month}`);
}
async function update(req, res, next) {
    const userDTO = req.body;
    await HistoryService.updateHistory(userDTO);
    res.redirect(`/main/${userDTO.year}/${userDTO.month}`);
}

module.exports = {create, del, update};