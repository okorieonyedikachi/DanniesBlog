// Import the functions you need from the SDKs you need

const { initializeApp} = require('firebase-admin/app');
const { getDatabase} = require('firebase/database');


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

  databaseURL: "https://dannies-newsletter-default-rtdb.firebaseio.com/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const titleField = document.querySelector(".title");
const articleField = document.querySelector(".article");
const publishBtn = document.querySelector('.publish-btn');


console.log('dog')