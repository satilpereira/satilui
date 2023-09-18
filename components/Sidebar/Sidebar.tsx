'use client';

import { CgMenuLeft } from 'react-icons/cg';
import { useState } from 'react';
import Link from 'next/link';

const components = [{ name: 'Typewritter', href: '/typewritter' }];

const Sidebar = () => {
  return (
    <nav className='minus-nav'>
      <div className={`w-full overflow-hidden p-16`}>
        {/* Components */}
        <div>
          <h2 className='pb-4 font-bold'>Components</h2>
          <ul>
            {Object.values(components).map((item) => {
              return (
                <li key={item.name} className='text-base'>
                  <Link key={item.name} href={item.href}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
