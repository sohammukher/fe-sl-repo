import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';


const AppLayout = () => {

  // const theme = 0; // Change

  
  
  return (
    <div >
    <Provider store={appStore}> 

      <Header />

      <Outlet />
      </Provider>

     
    </div>
  )
}

export default AppLayout
