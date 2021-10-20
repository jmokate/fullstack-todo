const pgAccess = require("./pgAccess")
require('./server.js')


const getTodo = async() => {
  let pool = await pgAccess.connectToDb()
  try {
    await pool.query("BEGIN");
    const results = await pool.query("SELECT * FROM todos")
    await pool.query("COMMIT");
    return results.rows

  } catch (err) {
    console.log("error getting todos", err)
    await pool.query("ROLLBACK")
  }
}

const postTodo = async (todo) => {
  let pool = await pgAccess.connectToDb();
    try {
      await pool.query("BEGIN");
      const results = await pool.query("INSERT INTO todos(text) VALUES($1) returning id", [todo]);
      await pool.query("COMMIT");


    } catch (error) {
      console.log('error posting a todo ', error)
      await pool.query("ROLLBACK");
    }

}
const putTodo = async (id) => {
  //console.log("put todo reached with id of ", id)
  let pool = await pgAccess.connectToDb();
  try {
    await pool.query("BEGIN");
    let result = await pool.query("UPDATE todos SET is_checked = NOT is_checked WHERE id = ($1) RETURNING *", [id])
    await pool.query("COMMIT");
    console.table(result.rows)


  } catch (err) {
    console.log('put error is ', err)
    pool.query("ROLLBACK")
  }
}

const deleteTodo = async (id) => {
  console.log("item passed to delete ", id)
  let pool = await pgAccess.connectToDb();
  try {
    pool.query("BEGIN");
    let result = await pool.query("DELETE FROM todos WHERE id = ($1) RETURNING *", [id])
    pool.query("COMMIT");
    // console.table(result.rows)
    // return(result.rows)
  } catch (err) {
    console.log('error deleting post ', err);
    await pool.query("ROLLBACK");
  }
}

module.exports={postTodo, getTodo, putTodo, deleteTodo}