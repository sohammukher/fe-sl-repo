import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './AppDepricated';
import reportWebVitals from './reportWebVitals';
import Landing from './component/Landing';
import Contact from './component/Contact';
// import { createBrowserRouter } from 'react-router-dom'
// import { RouterProvider } from 'react-router-dom'


// Routing Imports
import {createBrowserRouter,RouterProvider } from "react-router-dom";

import AppLayout from './component/AppLayout'
import Login from './component/Login';
import PostLoginChoice from './component/PostLoginChoice';
import { KidsPage } from './component/KidsPage';
import AdultPage from './component/AdultPage';
import FeedbackSubmitted from './component/FeedbackSubmitted';
import FAQPage from './component/FAQPage';
// import { Provider, useDispatch } from 'react-redux';
// import { addUser, removeUser } from '../utils/userSlice'
// import appStore from '../utils/appStore';

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout/>,
      children:
      [ 
          {
          path: "/",
          element: <Landing/>
        }
        ,
          {
              path: "/contact",
              element: <Contact/>
          },

          {
            path: "/choice",
            element: <PostLoginChoice/>
        },
        {
          path: "/kids",
          element: <KidsPage/>
      },
      {
        path: "/adults",
        element: <AdultPage/>
    },
    {
      path: "/feedback",
      element: <FeedbackSubmitted/>
  },
  {
    path: "/faq",
    element: <FAQPage/>
},
      ]
  },
  {

    path: "/login",
    element: <Login/>
  }
])

// Dark Mode Switch
// const darkToggle = document.querySelector('.toggle-dark');
// darkToggle.addEventListener('click',(event)=>{
//   console.log("Dark Mode Clickeds")
//   event.preventDefault();
//   document.documentElement.classList.toggle('dark');
// })

const root = ReactDOM.createRoot(document.getElementById('root'));


// Routing Done From Root.
root.render(

<RouterProvider router={appRouter}/>

)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();