import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Task3 = () => {

  const [key,setKey] = useState(""); 
  const router = useRouter(); 

  const handleChange = (e) => {
    setKey(e.target.value);
  };

  const handleClick = () => {
    if(key.toUpperCase() =='SECONDISPASSWORD') {
        console.log("matched");
        router.push("/wayne");
    }
  };  

  return (
    <div className="flex flex-col items-center mt-48">
      <h1 className="text-9xl font-bold">TASK 3</h1>
      <div className="flex flex-col items-center mb-8 text-xl">
      ... . -.-. --- -. -.. .. ... .--. .- ... ... .-- --- .-. -..
      </div>
      {/* link */}
      <p className='mb-8 test-2xl'>https://puzzel.org/en/jigsaw/play?p=-Nx-I0uCNFoooaxKIC0O</p> 
      <input
        type="text"
        value={key}
        onChange={handleChange}
        placeholder="Enter your text here"
        className="border border-gray-300 rounded-md px-64 py-10 text-black"
      />
       <div
          className="mt-5 md:ml-50 mx-auto md:w-[272px] opacity-[90%] text-md text-center bg-[#6B739D] hover:text-black hover:font-bold hover:bg-white text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl hover:shadow-black transition duration-500 relative overflow-hidden"
           onClick={handleClick}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-20 animate-pulse"></span>
          <span className="relative z-10">NEXT</span>
        </div>
    </div>
  );
};

export default Task3;
