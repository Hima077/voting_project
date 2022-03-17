const { createPool } = require("mysql");



const db = createPool({

  port: 3306,

  host: "127.0.0.1",

  user: "root",

  password: "root",

  database: "online_voting",

  

});





module.exports = db;