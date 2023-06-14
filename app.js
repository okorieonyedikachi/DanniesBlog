const bodyParser = require("body-parser");
const express = require("express");
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get( "/", (req, res) => {
    res.sendFile(__dirname + "/homepage.html")
})

app.listen(PORT,() => {"Server is running on port 3000"})