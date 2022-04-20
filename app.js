const exp = require('constants');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');

//express server port
const port = 3030;

app.listen(port, () =>{
 console.log("Server status: Online.")
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.use(express.static("public"));


