var express = require("express");
var http = require("http");
var app = express();
var parser = require("body-parser");

app.get("/",function(req,res,next){
    res.send("Hello");    
});

app.get("/http/",function(req,res,next){
   return res.json(req.query); 
});

app.use(function(req,res,next){
   next(); 
});

app.use(parser.json());
app.use(parser.urlencoded({extended : true}));

app.post("/haams/",function(req,res,next){
   return res.send(req.body); 
});


app.listen(process.env.PORT,function(){
   console.log("Server is running well"); 
});