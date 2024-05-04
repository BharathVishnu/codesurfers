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
        FIRST--  The thing is one of wonder and awe,having the legacy of a greek godess...lasting 3 long suns and moons,my name is what you surely possess
      </div>  
      <div className='rounded-lg bg-gray-200 p-4 text-black mb-10'>
        SECOND--  In the realm of numbers, I stand apart, mistaken for a prime from the start. Mathematicians test, yet I defy, the big brother of pseudo primes am I. From a modest start, my siblings shine, under the name Carmichael, I recline. What am I?
      </div>  
};

export default Task3;
