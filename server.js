const bodyParser = require("body-parser");
const express = require("express");
const https = require("https")
const PORT = 3000;


const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

const serviceAccount = require("./dannies-newsletter-firebase-adminsdk-2bfzr-3dc1eca0b8.json");
const { dirname } = require("path");


// Initialization of Cloud firestore(firebase)
initializeApp({
    credential:cert(serviceAccount),
    ignoreUndefinedProperties: true
  });
  

const db = getFirestore();
const usersCollection = db.collection('users');
const newUserRef = usersCollection.doc();
// db.settings({ ignoreUndefinedProperties: true });


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/homepage.html")
   
})

// app.get("/editor", (req, res) => {
//     res.sendFile(__dirname + "/public/editor.html")
// })
// app.post("editor",(req, res) => {
//     res.sendFile("/editor")
// })

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/signup.html")
    
})

app.post ("/signup", (req, res) => {
    res.redirect("/signup") 
    
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email

    newUserRef.set({
    FirstName: firstName,
    LastName: lastName,
    Email: email
    });
    
})


app.listen(PORT,() => {"Server is running on port 3000"})

