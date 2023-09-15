import React from 'react';
import Image from 'next/image';
import Logo from '@components/Logo/Logo';

const Navbar = () => {
  return (
    <nav className='border-electric-600 flex h-20 w-full flex-row items-center border-b px-4'>
      <div>
        <Logo />
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
