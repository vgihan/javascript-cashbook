const database = require('../database').getInstance().getConnection();

async function create(payment) {
    const query = `INSERT INTO payment(payment) VALUES (${payment.payment})`;
    return await new Promise((resolve, reject) => {
        database.serialize();
        database.all(query, (err, row) => {
            if(err) reject(err);
            else resolve(row);
        });
    });
}
async function read() {
    const query = `SELECT * FROM payment`;
    return await new Promise((resolve, reject) => {
        database.serialize();
        database.all(query, (err, row) => {
            if(err) reject(err);
            else resolve(row);
        });
    });
}
async function del(payment) {
    const query = `DELETE FROM payment WHERE id=${payment.name}`;
    return await new Promise((resolve, reject) => {
        database.serialize();
        database.all(query, (err, row) => {
            if(err) reject(err);
            else resolve(row);
        });
    });
}

module.exports = {create, read, del};