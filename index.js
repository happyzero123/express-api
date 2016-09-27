var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Express')
  console.log('hello express');
})
app.get('/ppp', function (req, res) {
  res.send('Hello ppp')
  console.log('pppp');
})
app.listen(3000,function(){
  console.log('running on port 3000... plz visit http://localhost:3000');
})
