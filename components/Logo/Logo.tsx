'use client';

import React from 'react';
import { motion } from 'framer-motion';

const transition = { duration: 4, yoyo: Infinity, ease: 'easeInOut' };

const Logo = () => {
  return (
    <div className='h-12 w-12 hover:cursor-pointer'>
      <motion.svg height={48} width={48} viewBox='0 0 300 300'>
        {/* Draws my S logo */}
        <motion.path
          d='M 266 266 L 266 37 L 37 37 L 37 266 L 189 266 L 189 189 L 113 189 L 113 113 L 189 113'
          fill='transparent'
          strokeWidth='67'
          stroke='#9140f9'
          strokeLinecap='square'
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileHover={{ pathLength: 0 }}
          transition={transition}
        />
      </motion.svg>
    </div>
  );
};

export default Logo;
