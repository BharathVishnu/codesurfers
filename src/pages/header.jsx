import React from 'react';
import logo from "../../public/assets/hetia.png";
import logo1 from "../../public/assets/codingclub.png";
import Image from 'next/image';
const Header = () => {
  return (
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center ml-20 mt-10">
          <Image src={logo} />
        </div>
        <div className='mr-20 h-1 w-24'>
          <Image src={logo1} />
        </div>
      </div>
  );
};

export default Header;
