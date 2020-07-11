

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var fetch = require('node-fetch');

//add the index route to handle requests to the main page

app.get('/', function(request,request){
console.log('hit the index page');
});

//start the server on port 3000 of the host.

app.listen('3000', function(){
console.log('listening on port 3000... and localhost');
});
