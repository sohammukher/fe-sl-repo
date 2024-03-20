import React,{useEffect} from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import useOnlineStatus from "../utils/useOnlineStatus"
// import { useHistory } from 'react-router-dom'; // Import useHistory hook


const AppLayout = () => {

  // Scaling :
  // const history = useHistory(); // Initialize useHistory hook

  useEffect(() => {
    // Force the browser to zoom out
    console.log("Application Loaded")
    // document.body.style.zoom = "67%"; // Adjust the zoom level as needed


    // Handle Key Press Part Starts
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        // Show confirmation dialog
        const confirmQuit = window.confirm("Are you sure you want to quit the application?");
        
        // If user confirms, close the application
        if (confirmQuit) {
          window.location.href = '/login'; // Redirect to another route

        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };


    // Handle Key Press Part End



  }, []);


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


  // Keyboard ShortCut:
  


  
  
  return (
    <div   >
    <Provider store={appStore}> 

      <Header />

      <Outlet />
      </Provider>

     
    </div>
  )
}

export default AppLayout
