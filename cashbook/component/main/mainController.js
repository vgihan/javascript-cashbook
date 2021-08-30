const MainService = require('./mainService');

const redirect = (req, res, next) => {
    const date = MainService.makeNowDate();
    res.redirect(`/main/${date.year}/${date.month}`);
}
const main = async (req, res, next) => {
    const userDTO = req.params;
    const mainPageInfo = await MainService.makeMainPageInfo(userDTO);
    res.render('main', mainPageInfo);
}
const calendar = async (req, res, next) => {
    const userDTO = req.params;
    const calPageInfo = await MainService.makeCalPageInfo(userDTO);
    res.render('calendar', calPageInfo);
}
const statistic = async (req, res, next) => {

}

module.exports = {redirect, main, calendar, statistic}