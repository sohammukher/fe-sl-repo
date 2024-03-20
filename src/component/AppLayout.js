import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import useOnlineStatus from "../utils/useOnlineStatus"


const AppLayout = () => {

  // const theme = 0; // Change

  const internetStatus = useOnlineStatus()
  // Internet Status
  console.log("internetStatus "+internetStatus)
  if(internetStatus === false){
    return (<>
          <Header />

    <h1 className=' text-6xl p-16'>You are Offline. Please Check Your Internet Connection and Reload the Page!</h1>
    </>)
  }



  
  
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
