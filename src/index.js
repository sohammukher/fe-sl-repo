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
      ]
  },
  {

    path: "/login",
    element: <Login/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));


// Routing Done From Root.
root.render(<RouterProvider router={appRouter}/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();