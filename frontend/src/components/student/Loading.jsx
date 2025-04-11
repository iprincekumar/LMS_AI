import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid mb-4"></div>

      {/* Loading Text */}
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        Loading your dashboard...
      </p>
    </div>
  );
};

export default Loading;
