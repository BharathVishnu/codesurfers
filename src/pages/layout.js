import Header from "./header";
import localFont from 'next/font/local';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Layout({children}) {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
        AOS.refresh();
      }, [])

    return(
    <>
        <Header/>
        <div className={` flex flex-col min-h-screen`} >
            <main className="flex-auto min-h-screen">{children}</main>
        </div>
    </>
    );
};