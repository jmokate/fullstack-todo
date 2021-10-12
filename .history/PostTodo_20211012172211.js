require("./pgAccess")

const postTodo = async () => {

    try {
      await client.query("BEGIN");
      const results = client.query("INSERT INTO todos(item) VALUES($1) RETURNING id, date_created");
      console.table(results.rows);
      return results.rows;

    } catch (error) {
      console.log('error posting a todo ', error)
    }

}

module.exports={postTodo}