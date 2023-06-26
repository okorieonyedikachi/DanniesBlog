const bodyParser = require("body-parser");
const express = require("express");
const https = require("https")
const PORT = 3000;


const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

const serviceAccount = require("./dannies-newsletter-firebase-adminsdk-2bfzr-3dc1eca0b8.json");


// Initialization of Cloud firestore(firebase)
initializeApp({
    credential:cert(serviceAccount)
  });
  

const db = getFirestore();
const usersCollection = db.collection('users')
const newUserRef = usersCollection.doc();


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

    newUserRef.set({
    FirstName: firstName,
    LastName: lastName,
    Email: email
    });
    
})


app.listen(PORT,() => {"Server is running on port 3000"})

