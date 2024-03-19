import React from 'react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <div className="bg-transparent min-h-screen py-12">
      <div className="relative">
        {/* Background image */}
        {/* <div className="absolute inset-0 bg-fit bg-center z-0" style={{ backgroundImage: "url('https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg')", opacity: "0.3" }}></div> */}
        <div className="p-10 absolute h-screen bg-cover w-screen" style={{ backgroundImage: "url('https://w.forfun.com/fetch/2c/2ceda46989c2534b90b8aabf48f66a97.jpeg')", opacity: "0.3" }}></div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 relative z-10 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-8 text-center">FAQ</h1>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">What is this app?</h2>
            <p className='text-lg font-semibold'>This is a web app designed to convert text into sign language animations. It utilizes machine learning algorithms to generate sign language animations based on the input text.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">How does it work?</h2>
            <p className='text-lg font-semibold' >Follow these simple steps to convert your text to sign language -</p>
            <p className='text-lg font-bold' >Step 1 -</p>
            <p className='text-lg font-semibold' >Type your text or paste it in the input box on the left side of the screen.</p>
            <p className='text-lg font-bold' >Step 2 -</p>
            <p className='text-lg font-semibold' >Watch the live video on the right side of the screen to see your text converted to sign language.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">What technologies are used?</h2>
            <p className='text-lg font-semibold'>The app is built using React.js for the frontend user interface and Tailwind CSS for styling.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Can I use this on other devices?</h2>
            <p className='text-lg font-semibold'>Yes, the app is designed to be responsive and should work on most modern devices.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Is the sign language accurate?</h2>
            <p className='text-lg font-semibold'>The accuracy of sign language generation depends on the underlying machine learning models and the quality of the training data. While we strive for accuracy, there may be limitations and errors in the generated sign language animations.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Can I contribute to this project?</h2>
            <p className='text-lg font-semibold'>Yes, this project is open-source. You can find the source code on GitHub and contribute by submitting bug fixes, improvements, or new features.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Who can I contact for support?</h2>
            <p className='text-lg font-semibold'>If you encounter any issues or have questions about the app, you can contact our support team through our <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link> page. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
