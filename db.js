/** Database for lunchly */

const pg = require("pg");


const db = new pg.Client('postgresql://myuser:mypass@localhost:5432/lunchly');

db.connect();

module.exports = db;
