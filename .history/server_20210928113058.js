const express = require('express')
const app = express()

app.post('/api/post', (req,res) => {
  console.log(req.body)
  res.send('hello there')
})


app.listen(5000, () => console.log("app is listening on port 5000"))