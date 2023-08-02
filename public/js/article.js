console.log("dannie");

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


const db = firebase.firestore();

console.log(db);

const displayArticles = () => {
  const mainContainer = document.getElementsByClassName("main");

  mainContainer.innerHTML = `
        <div class="col-lg-9 px-0 title">
        <h2>${articleData.title}</h2>
        </div>
        <div class="col-lg-9 px-0 article">
        <p class="lh-lg fs-5">${articleData.body}</p>
        </div>
    `;
};

function fetchArticle(articleId) {
    return db.collection('Blogs')
        .doc()
        .get()
        .then(doc => {
            if(doc.exists) {
                const articleData = doc.data();
                displayArticles(articleData);
            } else {
                console.log("article not found")
            }
        })
        .catch(error => {
                     console.error('Error fetching article:', error);
                   });
}

// function fetchArticle(articleId) {
//     return db.collection('Blogs')
//       .doc()
//       .get()
//       .then(doc => {
//         if (doc.exists) {
//           const articleData = doc.data();
//           displayArticles(articleData);
//         } else {
//           console.error('Article not found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching article:', error);
//       });
//   }
  
  // Get the article ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');
  
  // Call fetchArticle when the page loads
  fetchArticle(articleId);
