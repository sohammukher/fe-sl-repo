import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="relative">
    <h1>LANDING----------</h1>

    <div className="">
    <h1 className="text-3xl font-bold text-center">Welcome to Sign Language Converter</h1>
    <p className="text-lg text-center">Sign Language Converter: Break down communication barriers. Translate text into sign language instantly. Easy, customizable, and inclusive.</p>
    
    
    <div className='flex justify-center items-center h-screen'>
      <div className='p-10 flex flex-col justify-center bg-gray-500 bg-opacity-50 rounded-3xl  '>

      <div>
        <div className=' font-bold '>Convert Text to Sign Language</div>
        <button className='p-2 m-2 bg-amber-400 rounded-2xl p-4 ml-9 w-40 border-2 border-black'>Convert</button>
      </div>

      <div className=' mt-10'>
        <div className=' font-bold '>Login to Start Learning</div>
        <Link to= "/login">
        <button className='p-2 m-2 bg-amber-400 rounded-2xl p-4 ml-9 w-40 border-2 border-black'>Login</button>
        </Link>
          </div>

      </div>
    </div>
    
    
    
    </div>
    
    </div>
    );
  };
  
  export default Landing;
  