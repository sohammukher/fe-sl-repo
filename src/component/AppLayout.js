import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import {useEffect} from "react"


const AppLayout = () => {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName }  = user;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    }, []
    )
  
  
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout
