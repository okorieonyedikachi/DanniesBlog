// import firestore from "firebase-admin";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

console.log(db);

const titleField = document.querySelector(".title");
const articleField = document.querySelector(".article");
const publishBtn = document.getElementById("publish-btn");
const saveBtn = document.getElementById("save-btn");
const blogForm = document.querySelector(".blog");

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

const title = titleField.value;
const article = articleField.value;

function saveArticle(isPublished) {
  if (article.length && title.length){
    // generating id
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let blogTitle = title.split(" ").join("-");
    let id = "";
    for(let i = 0; i < 4; i++) {
        id += letters[Math.floor(Math.random() * letters.length)];
    }

    // setting up docName

    let docName = `${blogTitle}-${id}`;
    let date = new Date();

    db.collection("Blogs").doc("docName")
        .set({
            // userId: "",
            title: title,
            body: article,
            isPublished: isPublished, 
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
        .then(() => {
          console.log("Data added successfully:", docName)
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
            // Handle error
          });
  } 
   
}

publishBtn.addEventListener('click', ()=> {
  console.log("Publish")
  saveArticle(true)
})

saveBtn.addEventListener('click', ()=> {
  saveArticle(false)
  console.log("saved")
})

// blogForm.addEventListener("submit", () => {
//     // console.log(titleField.value, articleField.value);
// //   e.preventDefault();
//     if (article.length && title.length){
//         // generating id
//         let letters = "abcdefghijklmnopqrstuvwxyz"
//         let blogTitle = title.split(" ").join("-");
//         let id = "";
//         for(let i = 0; i < 4; i++) {
//             id += letters[Math.floor(Math.random() * letters.length)];
//         }

//         // setting up docName

//         let docName = `${blogTitle}-${id}`;
//         let date = new Date();

//         db.collection("Blogs").doc(docName)
//         .set({
//             userId: "",
//             title: title,
//             body: article,
//             isPublished: "", 
//             publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
//         })
//         .then(() => {
//           location.href = `/${docName}`
//           })
//           .catch((error) => {
//             console.error("Error adding document: ", error);
//             // Handle error
//           });
//     }
//   db.collection("posts")
//     .add({
//       title: titleField.value,
//       content: articleField.value,
//     })
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//       // Handle successful write
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//       // Handle error
//     });
// });
