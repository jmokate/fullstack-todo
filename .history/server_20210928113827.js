const express = require('express')
const app = express()

app.post('/api/post', async (req,res) => {
   await console.log(req.body)
  res.send('hello there')
})

app.get('/api/get', (req,res) => {
  res.send('get path working')
})


app.listen(5000, () => console.log("app is listening on port 5000"))