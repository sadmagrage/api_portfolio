const mysql = require("mysql2/promise");
require("dotenv").config();

const uri = process.env.MYSQL_URI + "\"" + process.env.MYSQL_URI2 + "\"" + process.env.MYSQL_URI3;

const db = mysql.createPool(uri);

const getUserByUsername = async (username) => {
    const [result] = await db.execute('SELECT username, password FROM tb_user WHERE username = ?;', [username]);
    return result[0];
}

module.exports = { db, getUserByUsername };