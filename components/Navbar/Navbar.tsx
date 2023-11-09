import React from 'react';
import Logo from '@components/Logo/Logo';
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='glassmorphism fixed z-10 flex h-20 w-full flex-row items-center justify-between border-b border-electric-600 px-4'>
      <Link href={'/'}>
        <Logo />
      </Link>
      <Link
        className='text-5xl text-white'
        href={'https://github.com/satilpereira/satilui'}
        target='_blank'
      >
        <FaGithubSquare />
      </Link>
    </nav>
  );
};

export default Navbar;
