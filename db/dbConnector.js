const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/users.db');


module.exports = {db};