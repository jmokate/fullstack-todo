require('dotenv').config()
const {Client} = require('pg')
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
  const client = new Client(config);
 
  if (client) {
    console.log("client exists");
    return client
  } else {
    try {
      await client.connect();
      console.log("client is connected to db");
      return client
    } catch (err) {
      console.log("not connected to the db ", error)
    }
  }
}

module.exports={connectToDb}
