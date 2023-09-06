'use client';

import { CgMenuLeft } from 'react-icons/cg';
import { useState } from 'react';

const components = [{ name: 'Typewritter', href: '/typewritter' }];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      {!open ? (
        <div
          className='p-4 text-4xl'
          onClick={() => {
            setOpen((open) => !open);
          }}
        >
          <CgMenuLeft />
        </div>
      ) : (
        <div className='w-44'>
          <div
            className='flex w-full justify-end p-4 text-4xl'
            onClick={() => {
              setOpen((open) => !open);
            }}
          >
            <CgMenuLeft />
          </div>
          <div>
            <ul>
              {Object.values(components).map((item) => {
                return (
                  <li>
                    <a href={item.href}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
