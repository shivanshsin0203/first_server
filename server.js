const express=require("express");
const app=express();
app.get("/",function (request,response) {
    response.send("<h1>Hello!!!</h1>");
});
app.get("/contact",function (request,response) {
    response.send("<h1>singhshivcansh12may@gamil.com</h1>");
});
app.get("/about",function (request,response) {
    response.send("<h1>check it out later</h1>");
});
app.listen(3000,function(){
    console.log("Server started");
});