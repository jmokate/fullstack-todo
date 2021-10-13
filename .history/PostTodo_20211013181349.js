const pgAccess = require("./pgAccess")
require('./server.js')

const postTodo = async (todo) => {
  console.log("the item passed to post todo is ", todo)
  let client = await pgAccess.connectToDb();
    try {
      await client.query("BEGIN");
      const results = client.query("INSERT INTO todos(item) VALUES($1)", [todo]);
      await client.query("COMMIT");
      console.table(results.rows);
      return results.rows;

    } catch (error) {
      console.log('error posting a todo ', error)
      await client.query("ROLLBACK");
    }

}

module.exports={postTodo}