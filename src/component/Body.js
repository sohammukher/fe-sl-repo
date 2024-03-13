import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Landing from './Landing'
import Contact from './Contact'
import AppLayout from './AppLayout'
import Login from './Login'

const Body = () => {

    const appRouter = createBrowserRouter(
        [
        {
            path: "/",
            element: <Login/>,
            children:
            [
                {
                    path: "/landing",
                    element: <Landing/>
                },
                {
                    path: "/contact",
                    element: <Contact/>
                },
            ]
        },
    ])
  return (
    <div>
        <RouterProvider router={appRouter}> 
        <AppLayout />
        </RouterProvider>
    </div>
  )
}

export default Body
