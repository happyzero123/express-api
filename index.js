var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var page ="<html>"+
            "<body>"+
                "<h1>i'm index.html</h1>"+
            "</body>"+
            "</html>"
  res.send(page)
  console.log('hello express');
})
app.get('/about', function (req, res) {
  var page ="<html>"+
            "<body>"+
                "<h1>i'm about.html</h1>"+
            "</body>"+
            "</html>"
  res.send(page)
  console.log('pppp');
})
app.listen(3000,function(){
  console.log('running on port 3000... plz visit http://localhost:3000');
})
