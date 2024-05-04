import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Task3 = () => {

  const [key,setKey] = useState(""); 
  const router = useRouter(); 

  const handleChange = (e) => {
    setKey(e.target.value);
  };



  return (
    <div className="flex flex-col items-center mt-48">
      <h1 className="text-9xl font-bold">TASK 4</h1>
      <div className="flex flex-col items-center mb-8 text-2xl">
      ... . -.-. --- -. -.. .. ... .--. .- ... ... .-- --- .-. -..
      </div>
      <div className='rounded-lg bg-gray-200 p-4 text-black mb-10'>
        First--  The thing is one of wonder and awe,having the legacy of a greek godess...lasting 3 long days,my name is what you surely possess
      </div>  
      <div className='rounded-lg bg-gray-200 p-4 text-black mb-10'>
        Second--  your first riddle
      </div>  
      
      
    </div>
  );
};

export default Task3;
