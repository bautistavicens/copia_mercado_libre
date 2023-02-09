const express = require('express');
const app = express();
const path = require('path');

//express server port

app.listen(process.env.PORT || 3000, () =>{
 console.log("Server status: Online.")
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.use(express.static("public"));


