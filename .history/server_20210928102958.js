const express = require('express')
const app = express()

app.post('/api/post', (req,res) => {
  console.log(req)
})


app.listen(5000, () => console.log("app is listening on port 5000"))