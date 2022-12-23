const Pool = require("pg").Pool
require("dotenv").config()

const isProduction = process.env.NODE_ENV === "production"

const pool = new Pool({
    name: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_POST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_POST
})

module.exports = pool