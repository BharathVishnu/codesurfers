import React, { useState } from 'react';

const Task2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-64">
      <div className='text-white text-4xl'>You Won !!!</div>
    </div>
  );
};

export default Task2;
