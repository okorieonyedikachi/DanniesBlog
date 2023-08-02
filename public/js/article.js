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
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

console.log(db);

console.log(articleId)
// const displayArticles = (blog) => {
//   const mainContainer = document.getElementsByClassName("main");
  
//       mainContainer.innerHTML += `
//       <div class="col-lg-9 px-0 title">
//       <h2>${blog.title}</h2>
//       </div>
//       <div class="col-lg-9 px-0 article">
//       <p class="lh-lg fs-5">${blog.body}</p>
//       </div>
//       `;
  
//   }

// let docRef = db.collection("Blogs").doc(articleId);
//  console.log (docRef)

//  docRef.get().then((doc) => {
//   if (doc.exists) {
//       console.log("Document data:", doc.data());
//   } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//   }
//  })



  // displayArticles()

// Function to display the full article content

// const articleData = doc.data();



// Function to fetch the article from Firestore based on its ID
function fetchArticle(articleId) {
  let docRef = db.collection("Blogs").doc(articleId);
  console.log (docRef)
  // db.collection('Blogs')
    
    
    docRef.get().then((doc) => {
      if (doc.exists) {
        const articleData = doc.data();
        console.log(articleData)
        displayArticle(articleData);
      } else {
        console.log('Article not found');
      }
    })
    
    // .catch(error => {
    //   console.log('Error fetching article:', error);
    // });
}

function displayArticle(articleData) {
  const mainContainer = document.getElementsByClassName('main');
  mainContainer.innerHTML = `
    <div class="col-lg-9 px-0 title">
      <h2>${articleData.title}</h2>
    </div>
    <div class="col-lg-9 px-0 article">
      <p class="lh-lg fs-5">
       baisbiaf rfheoi
      </p>
    </div>
    <hr id="hr1" />
    <hr id="hr2" />
    <div class="reaction-bar">
      <!-- ... other reaction buttons ... -->
      <button class="reaction-btn" data-reaction="love">❤️</button>
      <span id="love-count">0</span>
    </div>
  `;
}

// Get the article ID from the URL query parameter
// const urlParams = new URLSearchParams(window.location.search);
// const articleId = urlParams.get('id');

// Call fetchArticle when the page loads
fetchArticle(articleId);