var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! (Reinhart Caesar - 5115100132 - PBKK G)");
});

app.listen(3000);