require('dotenv').config()
const {Pool} = require('pg')
const config = {
  user: process.env.USER,
  password: process.env.PASS,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB
}
// client.connect()
//   .then(() => console.log("connected successfully to the database my friends"))
//   .catch((err) => console.log("there was an error", err))
//   .finally(() => client.end())

connectToDb = async () => {
  const pool = new Plient(config);
 
  if (Pool) {
    //console.log("pool exists");
    return pool
  } else {
    try {
      await pool.connect();
      console.log("pool is connected to db");
      return pool
    } catch (err) {
      console.log("not connected to the db ", error)
    }
 // }
}

module.exports={connectToDb}
