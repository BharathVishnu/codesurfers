import Login from "./login";
import React, { useState, useEffect } from 'react';
import Loading from "./loading";
import Task1 from "./task1";
import Task2 from "./task2";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch your data here


      setTimeout(() => {
        setLoading(false);
      }, 400);
    };

    fetchData();
  }, []);

  return (
    <main>      
      {loading ? (
        <Loading />
      ) : (
        <div>
                 <Login/>
                 <Task1/>
                 <Task2/>
        </div>
 
      )} 
    </main>
  )
}