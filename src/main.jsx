import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Addpost from './pages/Addpost.jsx';
import Posts from './pages/Posts.jsx';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Addpost />
  },
  {
    path:"/posts",
    element: <Posts />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
