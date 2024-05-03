import React, { useState } from 'react';

const Task2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Task 2</h1>
      <audio
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/assets/audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <input
        type="text"
        placeholder="Enter your text here"
        className="border border-gray-300 rounded-md px-64 py-10 text-black mt-10 "
      />
      <div
        className="mt-5 md:ml-50 mx-auto md:w-[272px] opacity-[90%] text-md text-center bg-[#6B739D] hover:text-black hover:font-bold hover:bg-white text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl hover:shadow-black transition duration-500 relative overflow-hidden"
        //   onClick={handleLoginClick}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-20 animate-pulse"></span>
        <span className="relative z-10">NEXT</span>
      </div>
    </div>
  );
};

export default Task2;
