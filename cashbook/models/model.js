class Model {
    constructor() {
        this.sqlite = require('sqlite3').verbose();
        this.db = new this.sqlite.Database('database/cashbook.db', (err) => {
            if(err) console.error(err);
            else console.log('Success Connect')
        });
        this.dbInit();
    }
    async dbInit() {
        const createHistoryQuery = `CREATE TABLE IF NOT EXISTS history (
            id          integer      primary key         autoincrement,
            date        date         not null,
            category    varchar(8)   not null,
            memo        varchar(100) not null,
            payment     varchar(8)   not null,
            price       integer      not null
        );`;
        const createPaymentQuery = `CREATE TABLE IF NOT EXISTS payment (
            id          integer      primary key          autoincrement,
            payment     varchar(8)   not null
        );`;
        await this.query(createHistoryQuery);
        await this.query(createPaymentQuery);
    }
    async selectHistory(year, month) {
        const query = `SELECT * FROM history
                       WHERE strftime('%Y',date)='${year}' and strftime('%m',date)='${(month+1).toString().padStart(2, '0')}';`;
        return await this.query(query);
    }
    async selectPayment() {
        const query = `SELECT * FROM payment`;
        return await this.query(query);
    }
    async insertHistory(history) {
        const query = `INSERT INTO history(date, category, memo, payment, price)
                       VALUES('${history.date}', '${history.category}', '${history.memo}', '${history.payment}', ${history.price});`;
        return await this.query(query);
    }
    async insertPayment(payment) {
        const query = `INSERT INTO payment(payment) VALUES (${payment})`;
        return await this.query(query);
    }
    query(query) {
        return new Promise((resolve, reject) => {
            this.db.serialize();
            this.db.all(query, (err, row) => {
                if(err) reject(err);
                else resolve(row);
            });
        });
    }
}

module.exports = Model;