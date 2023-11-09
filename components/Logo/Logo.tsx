'use client';
/**
 * Logo Component
 *
 * This component renders an animated 'S' logo.
 *
 * @component
 * @example
 * // Usage of Logo component in a React component:
 * import Logo from './Logo'; // Import the Logo component
 * //...
 * return (
 *   <Logo />
 * );
 *
 * @returns {JSX.Element} The rendered Logo component.
 */
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animation transition settings for the logo path.
 *
 * @type {Object}
 * @property {number} duration - The duration of the animation.
 * @property {string} ease - The easing function for the animation.
 * @property {number} yoyo - The number of times the animation loops (Infinity for infinite loop).
 */
const transition = { duration: 4, yoyo: Infinity, ease: 'easeInOut' };

/**
 * Logo Component
 *
 * @returns {JSX.Element} The rendered Logo component.
 */
const Logo = () => {
  return (
    <div className='h-12 w-12 hover:cursor-pointer'>
      <motion.svg height={48} width={48} viewBox='0 0 300 300'>
        {/* Draws the 'S' logo using SVG path */}
        <motion.path
          d='M 266 266 L 266 37 L 37 37 L 37 266 L 189 266 L 189 189 L 113 189 L 113 113 L 189 113'
          fill='transparent'
          strokeWidth='67'
          stroke='#9140f9'
          strokeLinecap='square'
          initial={{ pathLength: 0 }} // Initial animation state for the path
          animate={{ pathLength: 1 }} // Animation to be played
          whileHover={{ pathLength: 0 }} // Animation on hover
          transition={transition} // Animation transition settings
        />
      </motion.svg>
    </div>
  );
};

export default Logo;
