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
                    WHERE strftime('%Y',date)='${condition.year}' and strftime('%m',date)='${(parseInt(condition.month)+1).toString().padStart(2, '0')}';`;
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

module.exports = {create, read, update, del};