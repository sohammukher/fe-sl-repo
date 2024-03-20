import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-orange-300 bg-opacity-60 z-50">
      <div className="w-40 h-40 border-t-4 border-yellow-800 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
