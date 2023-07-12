const { https } = "https";

const PORT = 3000;
import bodyParser from "body-parser";
import fs from "fs";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccount = JSON.parse(
  fs.readFileSync(
    "./dannies-newsletter-firebase-adminsdk-2bfzr-3dc1eca0b8.json",
    "utf8"
  )
);

// Initialization of Cloud firestore(firebase)
initializeApp({
  credential: cert(serviceAccount),
  ignoreUndefinedProperties: true,
});

const db = getFirestore();
const usersCollection = db.collection("users");
const newUserRef = usersCollection.doc();
const blogCollection = db.collection("Blogs");
// const newBlogRef = blogCollection.doc();
db.settings({ ignoreUndefinedProperties: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'))

app.use(express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/homepage.html");
});

// GET and POST Request for editor page
app.get("/editor", (req, res) => {
  res.sendFile(__dirname + "/public/views/editorpage.html");
});

app.post("/editor", (req, res) => {
  const title = req.body.title;
  const article = req.body.article;
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (article.length && title.length) {
    // generating id
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let blogTitle = title.split(" ").join("-");
    let id = "";
    for (let i = 0; i < 4; i++) {
      id += letters[Math.floor(Math.random() * letters.length)];
    }
  
  // setting up docName
  let docName = `${blogTitle}-${id}`;
  let date = new Date();

  

  blogCollection.doc(docName).set({
    Title: title,
    Article: article,
    publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  });
  }  
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});

app.post("/signup", (req, res) => {
  res.redirect("/signup");

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  newUserRef.add({
    FirstName: firstName,
    LastName: lastName,
    Email: email,
  });
});

app.listen(PORT, () => {
  "Server is running on port 3000";
});
