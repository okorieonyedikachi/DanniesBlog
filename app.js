const bodyParser = require("body-parser");
const express = require("express");
const https = require("https")
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/homepage.html")
})

app.get("/signUp", (req, res) => {
    res.sendFile(__dirname + "/public/signup.html")
})

app.post ("/signUp", (req, res) => {
    res.redirect("/signUp") 
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email

    console.log(firstName, lastName, email)
    
})


app.listen(PORT,() => {"Server is running on port 3000"})

