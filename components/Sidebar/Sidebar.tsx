'use client';

import { CgMenuLeft } from 'react-icons/cg';
import { useState } from 'react';
import Link from 'next/link';

const components = [{ name: 'Typewritter', href: '/typewritter' }];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='h-full'>
      <div
        className='float-right h-[48px] w-[48px] px-[9px] py-[14px] text-4xl'
        onClick={() => {
          setOpen((open) => !open);
        }}
      >
        <div
          className={`relative transition-all ${
            open ? 'items-end' : 'items-start'
          } w-[30px] `}
        >
          <div
            className={`absolute top-0 h-[3px] transition-all ${
              open ? 'translate-x-[100%]' : 'translate-x-0'
            } w-[50%] rounded-full bg-white`}
          ></div>
          <div
            className={`bg- absolute top-[8px] h-[3px] w-full rounded-full bg-white`}
          ></div>
          <div
            className={`absolute top-[16px] h-[3px] transition-all ${
              open ? 'translate-x-[33%]' : 'translate-x-0'
            } w-[75%] rounded-full bg-white`}
          ></div>
        </div>
        {/* <CgMenuLeft /> */}
      </div>
      <div
        className={`${open ? 'w-44' : 'w-0'} overflow-hidden transition-all`}
      >
        {open ? (
          <div>
            <ul>
              {Object.values(components).map((item) => {
                return (
                  <li key={item.name}>
                    <Link key={item.name} href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Sidebar;
