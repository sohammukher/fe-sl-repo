import React from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import {useEffect} from "react"
import { Provider, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import appStore from '../utils/appStore';


const AppLayout = () => {

  const dispatch = useDispatch();

  // const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName }  = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        
        
      } else {
        // User is signed out
        dispatch(removeUser());
  
      }
    });
    }, []
    )
  
  
  return (
    <Provider store={appStore}> 
    <div>
      
      <Header />
      <Outlet />
     
    </div>
    </Provider>
  )
}

export default AppLayout
