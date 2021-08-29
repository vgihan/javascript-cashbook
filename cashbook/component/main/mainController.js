const MainService = require('./mainService');

const redirect = (req, res, next) => {
    const date = MainService.makeNowDate();
    res.redirect(`/main/${date.year}/${date.month}`);
}

const main = async (req, res, next) => {
    const userDTO = req.params;
    const mainPageInfo = await MainService.makeMainPageInfo(userDTO);
    console.log(mainPageInfo);
    res.render('main', mainPageInfo);
}

const calendar = (req, res, next) => {

}

const statistic = (req, res, next) => {

}

module.exports = {redirect, main, calendar, statistic}