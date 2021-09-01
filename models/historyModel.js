const database = require('../database').getInstance().getConnection();

async function create(history) {
    const query = `INSERT INTO history(date, category, memo, payment, price)
                    VALUES('${history.date}', '${history.category}', '${history.memo}', '${history.payment}', ${history.price});`;
    return await new Promise((resolve, reject) => {
        database.serialize();
        database.all(query, (err, row) => {
            if(err) reject(err);
            else resolve(row);
        });
    });
}
async function read(condition) {
    const query = `SELECT * FROM history
                    WHERE strftime('%Y',date)='${condition.year}' and strftime('%m',date)='${parseInt(condition.month).toString().padStart(2, '0')}';`;
    return await new Promise((resolve, reject) => {
        database.serialize();
        database.all(query, (err, row) => {
            if(err) reject(err);
            else resolve(row);
        });
    });
}
async function readMonthExpend(condition) {
    const preDate = new Date(condition.year, parseInt(condition.month)-7, 1);
    const curDate = new Date(condition.year, parseInt(condition.month), 0);
    const preDateString = [preDate.getFullYear(), (preDate.getMonth()+1).toString().padStart(2, '0'), preDate.getDate().toString().padStart(2, '0')].join('-');
    const curDateString = [curDate.getFullYear(), (curDate.getMonth()+1).toString().padStart(2, '0'), curDate.getDate().toString().padStart(2, '0')].join('-');
    const query = `SELECT strftime("%Y-%m", date) year_month, category, sum(price) expend FROM history
                    WHERE price<0 and date BETWEEN '${preDateString}' and '${curDateString}'
                    GROUP BY year_month, category;`;
    return await new Promise((resolve, reject) => {
        database.serialize();
        database.all(query, (err, row) => {
            if(err) reject(err);
            else resolve(row);
        });
    });
}
async function update(history) {
    const query = `UPDATE history SET date='${history.date}', category='${history.category}', memo='${history.memo}', payment='${history.payment}', price=${history.price}
                    WHERE id=${history.id}`;
    return await new Promise((resolve, reject) => {
        database.serialize();
        database.all(query, (err, row) => {
            if(err) reject(err);
            else resolve(row);
        });
    });
}
async function del(history) {
    const query = `DELETE FROM history WHERE id=${history.id}`;
    return await new Promise((resolve, reject) => {
        database.serialize();
        database.all(query, (err, row) => {
            if(err) reject(err);
            else resolve(row);
        });
    });
}

module.exports = {create, read, readMonthExpend, update, del};