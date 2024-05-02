import React from 'react';

const Task1 = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Task 1</h1>
      <div className="flex flex-col items-center mb-8">
        <p className="text-lg mb-2">Text 1 skhjfs s <span className='hover:text-red-500'>khkjhsdkf </span> fkjsdhfkjsd fhsd <span className='hover:text-red-500'>khkjhsdkf </span> fksdhfjsd fhsdgfjhsd fjhsdfg <span className='hover:text-red-500'>khkjhsdkf </span> sdjhfgsdjhfg sdfh sdfjhgsdfjhsdvfjh sd hsdgfjhsd <span className='hover:text-red-500'>khkjhsdkf </span> sdjhfgsdjhf sd</p>
        {/* Add more text elements here */}
      </div>
      <input
        type="text"
        placeholder="Enter your text here"
        className="border border-gray-300 rounded-md px-64 py-10 text-black"
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

export default Task1;
