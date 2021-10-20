const pgAccess = require("./pgAccess");
require('./server.js');


const getTodo = async() => {
  let pool = await pgAccess.connectToDb();
  try {
    await pool.query("BEGIN");
    const results = await pool.query("SELECT * FROM todos")
    await pool.query("COMMIT");
    return results.rows;

  } catch (err) {
    console.log("error getting todos", err);
    return [];
  }
}

const postTodo = async (todo) => {
  let pool = await pgAccess.connectToDb();
    try {
      await pool.query("BEGIN");
      await pool.query("INSERT INTO todos(text) VALUES($1)", [todo]);
      await pool.query("COMMIT");


    } catch (error) {
      console.log('error posting a todo ', error);
      await pool.query("ROLLBACK");
    }

}
const putTodo = async (id) => {
  let pool = await pgAccess.connectToDb();
  try {
    await pool.query("BEGIN");
    await pool.query("UPDATE todos SET is_checked = NOT is_checked WHERE id = ($1)", [id]);
    await pool.query("COMMIT");


  } catch (err) {
    console.log('put error is ', err);
    pool.query("ROLLBACK");
  }
}

const deleteTodo = async (id) => {
  console.log("item passed to delete ", id)
  let pool = await pgAccess.connectToDb();
  try {
    pool.query("BEGIN");
    await pool.query("DELETE FROM todos WHERE id = ($1)", [id])
    pool.query("COMMIT");
  } catch (err) {
    console.log('error deleting post ', err);
    await pool.query("ROLLBACK");
  }
}

module.exports={postTodo, getTodo, putTodo, deleteTodo}