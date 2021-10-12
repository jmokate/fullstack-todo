require("./pgAccess")

const postTodo = async (item) => {

    try {
      await client.query("BEGIN");
      const results = client.query("INSERT INTO todos(item) VALUES($1) RETURNING id, date_created", [item]);
      console.table(results.rows);
      return results.rows;

    } catch (error) {
      console.log('error posting a todo ', error)
    }

}

module.exports={postTodo}