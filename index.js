var express = require('express')
var app = express()

app.get('/:name', function (req, res) {
  var useName = req.params.name;
  var page ="<html>"+
            "<body>"+
                "<h1>"+
                useName + "的宠物" +
                "</h1>"+
            "</body>"+
            "</html>"
  res.send(page)
  console.log(req.params);
})

app.post('/:name', function (req, res) {

  res.send("a POST request received " + req.params.name)
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
