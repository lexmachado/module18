-
   http//localhost:3001/ \
  
  
  const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)