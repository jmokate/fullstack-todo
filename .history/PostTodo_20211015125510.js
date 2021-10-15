const pgAccess = require("./pgAccess")
require('./server.js')


const getTodo = async() => {
  console.log("database GET started")
  let client = await pgAccess.connectToDb()
  try {
    await client.query("BEGIN");
    const results = await client.query("SELECT * FROM todos")
    await client.query("COMMIT");
    //console.table(results.rows)
    return results.rows

  } catch (err) {
    console.log("error getting todos", err)
  }
}

const postTodo = async (todo) => {
  console.log("the item passed to post todo is ", todo)
  let client = await pgAccess.connectToDb();
    try {
      await client.query("BEGIN");
      const results = await client.query("INSERT INTO todos(text) VALUES($1) returning id", [todo]);
      await client.query("COMMIT");
     // console.table(results.rows[0]);
      //return results.rows[0];

    } catch (error) {
      console.log('error posting a todo ', error)
      await client.query("ROLLBACK");
    }

}

const deleteTodo = async (id) => {
  console.log("item passed to delete ", id)
  let client = await pgAccess.connectToDb();
  try {
    client.query("BEGIN");
    let result = await client.query("DELETE FROM todos(id) WHERE id = VALUES($1)", [id])
    client.query("COMMIT");
    console.table(result.rows[0])
  } catch (err) {
    console.log('error deleting post ', err);
    await client.query("ROLLBACK");
  }
}

module.exports={postTodo, getTodo, deleteTodo}