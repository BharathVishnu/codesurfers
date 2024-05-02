import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { supabase } from '../pages/supabase';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

//   const fetchDataFromSupabase = async () => {
//     try {
//         const { data, error } = await supabase
//         .from('login') 
//         .select('*')
//         .eq('user', username)
//         .eq('password', password)
      

//       if (error) {
//         window.alert("Invalid Server Error");
//         return;
//       }

//       if (data && data.length === 1) {
//         // router.push('/book'); 
//         window.alert('Success');
//       } else {
//         window.alert("Invalid Credentials");
//       }
//     } catch (error) {
//         console.log(error);
//       window.alert("Server Error");
//     }
//   };

  const handleLoginClick = () => {
    if (!username || !password) {
      window.alert("Please enter both username and password.");
      return;
    }
    // fetchDataFromSupabase();
  };

  return (
    <div className="flex items-center justify-center mt-40">
      <div className="bg-yellow rounded-lg p-8 shadow-2xl w-full md:w-2/3 md:max-w-xl">
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-semibold text-white mb-2">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-semibold text-white mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div
          className="mt-5 md:ml-50 mx-auto md:w-[272px] opacity-[90%] text-md text-center bg-[#6B739D] hover:text-black hover:font-bold hover:bg-white text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl hover:shadow-black transition duration-500 relative overflow-hidden"
          onClick={handleLoginClick}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-20 animate-pulse"></span>
          <span className="relative z-10">SUBMIT</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
