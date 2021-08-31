const Sqlite = require('sqlite3');

module.exports = database = (function() {
    var instance;
    const conn = new Sqlite.Database('database/cashbook.db', (err) => {
        if(err) console.error(err);
        else console.log('Success Connect')
    });
    dbInit();
    async function dbInit() {
        const createHistoryTable = `CREATE TABLE IF NOT EXISTS history (
            id          integer      primary key         autoincrement,
            date        date         not null,
            category    varchar(8)   not null,
            memo        varchar(100) not null,
            payment     varchar(8)   not null,
            price       integer      not null
        );`;
        const createPaymentTable = `CREATE TABLE IF NOT EXISTS payment (
            id          integer      primary key          autoincrement,
            payment     varchar(8)   not null
        );`;
        await query(createHistoryTable);
        await query(createPaymentTable);
    }
    function query(query) {
        return new Promise((resolve, reject) => {
            conn.serialize();
            conn.all(query, (err, row) => {
                if(err) reject(err);
                else resolve(row);
            });
        });
    }
    function init() {
        return {
            getConnection() {
                return conn;
            }
        };
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();