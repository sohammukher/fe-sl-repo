import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUsers, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const AboutUsPage = () => {

    const navigate = useNavigate();

    const handleGetStarted = () => {

        navigate("/");
        
    }
  return (
    <div>
      <div className='p-10 bg-gradient-to-r from-black via-white to-black w-screen'>
        <h1 className="text-3xl font-bold text-center text-black">Welcome to SignLingual🖖🏻</h1>
        <p className="text-xl text-center font-semibold p-4 text-black">Break down communication barriers, Translate text into sign language instantly!</p>
      </div>

      <div className="bg-transparent min-h-screen flex items-center justify-center">
        <div className="absolute h-screen bg-cover w-screen" style={{ backgroundImage: "url('https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg')", opacity: "0.3" }}></div>

        <div className="container mx-auto px-2  py-24 relative z-10 bg-white bg-opacity-75 rounded-lg shadow-2xl mt-2">
          <h1 className="text-5xl font-bold mb-8 p-8 text-center">About SignLingual</h1>

          <div className="mb-8 text-center">
          <p className='text-2xl font-semibold'>SignLingual is a web application aimed at bridging communication barriers by converting text into sign language animations.</p>
          <p className='text-2xl font-semibold p-6'>Our goal is to make sign language more accessible and inclusive for everyone.</p>
        </div>

          <div className="flex justify-around mb-8 mt-16">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faComments} className="text-4xl text-lime-600 mr-2" />
              <p className="text-xl font-semibold">Instantly translate text into sign language animations</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-500 mr-2" />
              <p className="text-xl font-semibold">Empower the deaf and hard of hearing community</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHeart} className="text-4xl text-red-500 mr-2" />
              <p className="text-xl font-semibold">Continuous improvement and user feedback</p>
            </div>
          </div>


        

          <div className="text-center">
            <button  className="p-4 my-6 bg-amber-500 rounded-lg font-semibold hover:bg-amber-400 text-lg px-5 py-5 w-48 "
         onClick={handleGetStarted}
           >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
