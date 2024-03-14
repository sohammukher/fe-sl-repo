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


  
  
  return (
    <div>
    <Provider store={appStore}> 

      <Header />

      <Outlet />
      </Provider>

     
    </div>
  )
}

export default AppLayout
