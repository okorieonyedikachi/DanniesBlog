// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase-admin/app");
const { getDatabase } = require("firebase/database");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZhz4m8nw-35c0YkCiGoKdRJo14TA3Tzk",
  authDomain: "dannies-newsletter.firebaseapp.com",
  databaseURL: "https://dannies-newsletter-default-rtdb.firebaseio.com",
  projectId: "dannies-newsletter",
  storageBucket: "dannies-newsletter.appspot.com",
  messagingSenderId: "189740482664",
  appId: "1:189740482664:web:3cfcd7c4113646bd753bdd",

  // databaseURL: "https://dannies-newsletter-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

const titleField = document.querySelector(".title");
const articleField = document.querySelector(".article");
// const publishBtn = document.querySelector(".publish-btn");


let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

document.getElementById('publish-btn').addEventListener("click", () => {
  if (articleField.value.length && titleField.value.length) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let blogTitle = titleField.value.split(" ").join("-");
    let blogId = "";
    for (let i = 0; i < 4; i++) {
      id += letters[Math.floor(Math.random() * letters.length)];
    }
    // setting up docName for the firestore

    let docName = `${blogTitle} - ${blogId}`;
    let date = new Date();

    //Accessing firestore
    db.collection("Blogs")
      .doc("docName")
      .set({
        title: titleField.value,
        article: articleField.value,
        bannerImage: bannerPath,
        publishedAt: `${date.getDate()} ${
          months[date.getMonth()]
        } ${date.getFullYear()}`,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((err) => {
        console.error(err);
      });
  }
});
