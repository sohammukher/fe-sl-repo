import React from 'react';
import { Link } from 'react-router-dom';

import { domain } from "../utils/endpoints";


const Landing = () => {
  return (
   

    <div className="">

    
    {/* <div className='bg-white p-10 bg-black bg-gradient-to-r  bg-gradient-to-r from-black via-white to-black from-black to-white w-screen'> */}
    <div className='p-10 bg-gradient-to-r from-black via-white to-black w-screen'>
      {/* <img className='object-none justify-' src='https://i.pinimg.com/originals/87/86/7b/87867b9749f01842a84f90228a7147f8.jpg' alt='banner' /> */}
    <h1 className="text-3xl font-bold text-center text-black">Welcome to SignLingual🖖🏻</h1>
    <p className="text-xl text-center font-semibold p-4 text-black">Break down communication barriers, Translate text into sign language instantly!</p>
    </div>



    <div className='absolute '>   
    <img className='h-screen object-cover w-screen opacity-30' src='https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg' alt='background' />
    </div>    

    {/* <div className="relative opacity-50"  style={{backgroundImage: "url(https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg)"}}> */}
    
    {/* <img className='relative opacity-20' src='https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg' /> */}
    


    <div className='flex justify-center items-center h-screen'>
      <div className='relative opacity-100 p-32 flex flex-col justify-center bg-gray-500 bg-opacity-50 rounded-3xl'>

      <div>
      <div className=' font-bold text-3xl p-3 '>Convert Text to Sign Language</div>
      <a href={domain} rel="noopener noreferrer">        
        <button className='p-4 m-2 bg-amber-400 rounded-2xl p-4 ml-[130px] w-44 border-2 border-black font-semibold text-xl  hover:bg-amber-300'>Convert</button>
      </a>
      </div>

      <div className=' mt-10'>
        <div className=' font-bold text-3xl p-3  ml-[50px]'>Login to Start Learning</div>
        <Link to= "/login">
        <button className='p-4 m-2 bg-amber-400 rounded-2xl p-4 ml-[130px] w-44 border-2 border-black font-semibold text-xl hover:bg-amber-300'>Login</button>
        </Link>
          </div>

      </div>
    </div>
    
    
    
    </div>
    // </div>
    );
  };
  
  export default Landing;
  