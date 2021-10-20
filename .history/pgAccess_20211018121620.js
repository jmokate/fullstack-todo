require('dotenv').config();
const {Pool} = require('pg');

const config = {
  user: process.env.USER,
  password: process.env.PASS,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB
};


connectToDb = async () => {
  const pool = new Pool(config);
 
  if (pool) {
    return pool
  } else {
    try {
      await pool.connect();
      console.log("pool is connected to db");
      return pool
    } catch (err) {
      console.log("not connected to the db ", error)
    }
  }
};

module.exports={connectToDb};
