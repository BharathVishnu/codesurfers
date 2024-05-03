import Header from "./header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
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
        <div className="You found it!! click the link below"></div>
        <Link href={"/task1"}></Link>
        <Header/>
        <div className={` flex flex-col min-h-screen`} >
            <main className="flex-auto min-h-screen">
                {children}
            </main>
        </div>
    </>
    );
};