console.log("home");

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

function displayBlogs(blogs) {
  const blogContainer = document.getElementById("blog-container");

  blogContainer.innerHTML = "";

  blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "col-lg-12 px-0 blog-container";

    // to trunate the number of words to display on the homepage.

    const truncatedContent =
      blog.body.length > 200
        ? blog.body.slice(0, 200) + "..." // Add ellipsis (...) if truncated
        : blog.body;
    blogCard.innerHTML = `
        <h1 class="display-6 fst-italic">${blog.title}</h1>
        <p class="lead my-3">${truncatedContent}</p>
        <p class="lead mb-0">
            <a href="#" class="text-body-emphasis fw-bold"
              >Continue reading...</a
            >
        </p>
        `;
    if (blog.isPublished == true) {
      blogContainer.appendChild(blogCard);
    }
  });
}

function fetchArticles() {
  db.collection("Blogs")
    .where("isPublished", "==", true)
    .get()
    .then((querySnapshot) => {
      const blogs = [];
      querySnapshot.forEach((doc) => {
        blogs.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      displayBlogs(blogs);
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
}

// Call fetchArticles when the page loads
fetchArticles();
