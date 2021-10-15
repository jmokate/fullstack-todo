const pgAccess = require("./pgAccess")
require('./server.js')


const getTodo = async() => {
  console.log("database GET started")
}

const postTodo = async (todo) => {
  console.log("the item passed to post todo is ", todo)
  let client = await pgAccess.connectToDb();
    try {
      await client.query("BEGIN");
      const results = await client.query("INSERT INTO todos(item) VALUES($1) returning id", [todo]);
      await client.query("COMMIT");
      console.table(results.rows[0]);
      //return results.rows[0];

    } catch (error) {
      console.log('error posting a todo ', error)
      await client.query("ROLLBACK");
    }

}

module.exports={postTodo, getTodo}