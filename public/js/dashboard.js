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
firebase.initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const db = firebase.firestore();

console.log(db);

function displayArticles(articles) {
  const draftsList = document.getElementById("drafts-list");
  const publishedList = document.getElementById("published-list");

  draftsList.innerHTML = "";
  publishedList.innerHTML = "";

  articles.forEach((article) => {
    const articleCard = document.createElement("div");
    articleCard.className = "article-card";
    articleCard.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.body}</p>
        <hr>
      `;

    if (article.isPublished == true) {
      publishedList.appendChild(articleCard);
    } else {
      draftsList.appendChild(articleCard);
    }
  });
}

// Function to fetch published articles from Firestore
document
  .getElementById("published-links")
  .addEventListener("click", fetchPublishedArticles);
function fetchPublishedArticles() {
  return db
    .collection("Blogs")
    .where("isPublished", "==", true)
    .get()
    .then((querySnapshot) => {
      const articles = [];
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return articles;
    });
}

// Function to fetch draft articles from Firestore
function fetchDraftArticles() {
  return db
    .collection("Blogs")
    .where("isPublished", "==", false)
    .get()
    .then((querySnapshot) => {
      const articles = [];
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return articles;
    });
}

// Function to fetch and display articles
function fetchAndDisplayArticles() {
  Promise.all([fetchPublishedArticles(), fetchDraftArticles()])
    .then(([publishedArticles, draftArticles]) => {
      const articles = publishedArticles.concat(draftArticles);
      displayArticles(articles);
    })
    .catch((error) => {
      console.error("Error fetching and displaying articles:", error);
    });
}

// Call fetchAndDisplayArticles when the page loads
fetchAndDisplayArticles();
// function fetchArticles() {

//   db.collection("Blogs")
//     // .where("isPublished", "==", true)
//     .get()
//     .then((querySnapshot) => {
//       const articles = [];
//       querySnapshot.forEach((doc) => {
//         articles.push({
//           isPublished: doc.isPublished,
//           id: doc.id,
//           ...doc.data(),
//         });
//       });

//       displayArticles(articles);
//     })
//     .catch((error) => {
//       console.error("Error fetching articles:", error);
//     });
// }

// // Call fetchArticles when the page loads
// fetchArticles();
