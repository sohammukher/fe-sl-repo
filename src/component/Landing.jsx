import React from 'react';

const Landing = () => {
  return (
    <div className="relative">
      <img
        src="https://www.soundtrad.com/wp-content/uploads/2023/03/collection-hand-gestures-sign-language.jpg"
        alt="TEXT"
        className="w-full"
      />
      <div className="absolute inset-x-0 top-0 bg-white bg-opacity-50 p-8">
        <h1 className="text-3xl font-bold text-center">Welcome to Sign Language Converter</h1>
        <p className="text-lg text-center">Sign Language Converter: Break down communication barriers. Translate text into sign language instantly. Easy, customizable, and inclusive.</p>
      </div>
    </div>
  );
};

export default Landing;
