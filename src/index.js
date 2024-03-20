import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './AppDepricated';
import reportWebVitals from './reportWebVitals';
import Landing from './component/Landing';
import Contact from './component/Contact';
// import { createBrowserRouter } from 'react-router-dom'
// import { RouterProvider } from 'react-router-dom'
import Error from './component/Error';


// Routing Imports
import {createBrowserRouter,RouterProvider, Route } from "react-router-dom";

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
      errorElement: <Error />,
      children:
      [ 
          {
          path: "/",
          element: <Landing/>,
          errorElement: <Error />,

        }
        ,
          {
              path: "/contact",
              element: <Contact/>,
              errorElement: <Error />,

          },

          {
            path: "/choice",
            element: <PostLoginChoice/>,
            errorElement: <Error />,

        },
        {
          path: "/kids",
          element: <KidsPage/>,
          errorElement: <Error />,

      },
      {
        path: "/adults",
        element: <AdultPage/>,
        errorElement: <Error />,

    },
    {
      path: "/feedback",
      element: <FeedbackSubmitted/>,
      errorElement: <Error />,

  },
  {
    path: "/faq",
    element: <FAQPage/>,
    errorElement: <Error />,

},


      ]
  },
  {

    path: "/login",
    element: <Login/>
  },

])

// Dark Mode Switch
// const darkToggle = document.querySelector('.toggle-dark');
// darkToggle.addEventListener('click',(event)=>{
//   console.log("Dark Mode Clickeds")
//   event.preventDefault();
//   document.documentElement.classList.toggle('dark');
// })

const root = ReactDOM.createRoot(document.getElementById('root'));

appRouter.routes.push(<Route path="*" element={<Error />} />);


// Routing Done From Root.
root.render(

<RouterProvider router={appRouter}/>

)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();