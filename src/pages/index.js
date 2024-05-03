import LoginForm from '@/components/login';
import React, { useState, useEffect } from 'react';
import Loading from "@/components/loading";

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
        <LoginForm/>
 
      )} 
    </main>
  )
}