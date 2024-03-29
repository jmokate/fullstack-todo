const pgAccess = require("../pgAccess");
require('../server.js');


const getTodo = async() => {
  let pool = await pgAccess.connectToDb();
  try {
    await pool.query("BEGIN");
    const results = await pool.query("SELECT * FROM todos");
    await pool.query("COMMIT");
    return results.rows;
  } catch (err) {
    console.log("error getting todos", err);
    return [];
  }
};

const postTodo = async (todo) => {
  let pool = await pgAccess.connectToDb();
    try {
      await pool.query("BEGIN");
      let result = await pool.query("INSERT INTO todos(text) VALUES($1) RETURNING *", [todo]);
      await pool.query("COMMIT");
      return result.rows;
    } catch (error) {
      console.log('error posting a todo ', error);
      await pool.query("ROLLBACK");
    }
};

const putTodo = async (id) => {
  let pool = await pgAccess.connectToDb();
  try {
    await pool.query("BEGIN");
    let result = await pool.query("UPDATE todos SET is_checked = NOT is_checked WHERE id = ($1) RETURNING *", [id]);
    await pool.query("COMMIT");
    return result.rows[0];
  } catch (err) {
    console.log('put error is ', err);
    pool.query("ROLLBACK");
  }
};

const deleteTodo = async (id) => {
  let pool = await pgAccess.connectToDb();
  try {
    pool.query("BEGIN");
    let result = await pool.query("DELETE FROM todos WHERE id = ($1) RETURNING *", [id]);
    pool.query("COMMIT");
    return result.rows;
  } catch (err) {
    console.log('error deleting post ', err);
    await pool.query("ROLLBACK");
  }
};

module.exports={postTodo, getTodo, putTodo, deleteTodo};