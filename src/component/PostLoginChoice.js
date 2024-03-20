import React from 'react'
import MenuType from './MenuType'
import {useState,useEffect} from "react";
import ChoiceShimmer from './ChoiceShimmer';


import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'

import { Link, Navigate, useNavigate } from 'react-router-dom';



const PostLoginChoice = () => {

    const [showShimmer, setShowShimmer] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const navigate = useNavigate();
  
    useEffect(() => {
      if(!localStorage.getItem('isLoggedIn')){
        navigate("/login");
      }
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName }  = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, isLoggedIn: true}))
          
          
        }
        // else {
        //   // User is signed out
        //   dispatch(removeUser());
    
        // }
      });
      }, []
      )


    useEffect(() => {
        // Simulate delay with setTimeout
        const delayTimeout = setTimeout(() => {
          setShowShimmer(false); // Hide shimmer effect after delay
        }, 1000); // Set delay time in milliseconds
    
        // Clear timeout to avoid memory leaks
        return () => clearTimeout(delayTimeout);
      }, []); // Run only once after initial render




    const type = [
        {name:"Kids",
        image:"https://images.inc.com/uploaded_files/image/1920x1080/getty_118389834_231136.jpg"},

        {name:"Adults",
        image:"https://media.thegospelcoalition.org/wp-content/uploads/2023/03/06163341/serving-youth-young-adult-1920x1080.jpg"},
    ]
    
   // Shimmer Logic
  if(showShimmer){
    return(<ChoiceShimmer/>)
  }


  return (
    <div>

    {/* <div className="absolute">
                <img src = {img2}
                     alt='Background' />
      </div> */}
    
        <div className='p-2 mt-20   text-4xl text-center font-semibold'>Choose your age group </div>

        <p className='font-semibold text-xl p-3 text-center'>Select the age group that you belong to and start learning sign language</p>


        <div className=' flex m-12  justify-center'>
        
        {type.map((curr, index) => (
    <Link to={curr.name==="Kids"?"/kids":"/adults"}>
      <MenuType props={curr} />
      </Link>
             ))}
        </div>
    
    </div>
  )
}

export default PostLoginChoice