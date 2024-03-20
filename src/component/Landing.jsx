import React from 'react';
import { Link, redirect } from 'react-router-dom';

import { domain } from "../utils/endpoints";


const Landing = () => {
  return (
    <div className="" style={{
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      height: '100vh',
    }}>
      {/* <div className='bg-white p-10 bg-black bg-gradient-to-r  bg-gradient-to-r from-black via-white to-black from-black to-white w-screen'> */}
      {/* <div className='p-10 bg-gradient-to-r from-black via-white to-black w-screen'> */}
      {/* <img className='object-none justify-' src='https://i.pinimg.com/originals/87/86/7b/87867b9749f01842a84f90228a7147f8.jpg' alt='banner' /> */}
      {/* <h1 className="text-3xl font-bold text-center text-black">Welcome to SignLingual🖖🏻</h1>
    <p className="text-xl text-center font-semibold p-4 text-black">Break down communication barriers, Translate text into sign language instantly!</p>
    </div> */}

      {/* <div className="absolute ">
        <img
          className="h-screen object-cover w-screen opacity-30"
          src="https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg"
          alt="background"
        />
      </div> */}

      {/* <div className="relative opacity-50"  style={{backgroundImage: "url(https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg)"}}> */}

      {/* <img className='relative opacity-20' src='https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg' /> */}
      <div style={{
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
      }}>
        <div className="big-image" style={{
          height: '100vh',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg")'
          // backgroundImage: 'url(https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg)',
        }}>
          <div className="text-stone-200" style={{
            position: 'absolute',
            top: '10%',
            left: 0,
            height: '90%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <div className="bg-zinc-950 bg-opacity-95 p-10 rounded-lg">
            <h1 style={{
              textAlign: 'center',
              fontSize: '65px',
              margin: '0 0 5px',
              letterSpacing: '0',
              fontWeight: 700,
            }}>Welcome to SignLingual!</h1>
            <p style={{
              fontSize: '30px',
              margin: 0,
            }}>Break down communication barriers, Translate text into sign language instantly!</p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: '20px',
            }}>
              <Link to={domain}>
              <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >Convert</button>
              </Link>
              <Link to="/choice">
                {/* <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">Learn</button>   */}
                <button type="button" class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft: '20px',
                }}>
                  Learn
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center h-screen">
        <div className="relative opacity-100 p-32 flex flex-col justify-center bg-gray-500 bg-opacity-50 rounded-3xl">
          <div>
            <div className=" font-bold text-3xl p-3 ">
              Convert Text to Sign Language
            </div>
            <a href={domain} rel="noopener noreferrer">
              <button className="p-4 m-2 bg-amber-400 rounded-2xl p-4 ml-[130px] w-44 border-2 border-black font-semibold text-xl  hover:bg-amber-300">
                Convert
              </button>
            </a>
          </div>

          <div className=" mt-10">
            <div className=" font-bold text-3xl p-3  ml-[50px]">
              Login to Start Learning
            </div>
            <Link to="/login">
              <button className="p-4 m-2 bg-amber-400 rounded-2xl p-4 ml-[130px] w-44 border-2 border-black font-semibold text-xl hover:bg-amber-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
    // </div>
  );
  };
  
  export default Landing;
  