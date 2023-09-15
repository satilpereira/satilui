'use client';

import React, { FC, useState, useEffect } from 'react';

interface Props {
  className?: string;
  children: string;
  textSpeed?: number;
  blinkSpeed?: number;
}

const Typewritter: FC<Props> = (props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [blink, setBlink] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const { children, textSpeed = 100 } = props;

    if (currentIndex < children.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(children.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, textSpeed);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    // If the text is fully displayed, do nothing
  }, [currentIndex, props]);

  useEffect(() => {
    const { blinkSpeed = 500 } = props;
    const timeoutId = setTimeout(() => {
      setBlink((blink) => !blink);
    }, blinkSpeed);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [blink]);

  return (
    <div className={props.className}>
      {displayedText}{' '}
      <span
        aria-hidden
        className={`pointer-events-none ${blink ? 'opacity-100' : 'opacity-0'}`}
      >
        _
      </span>
    </div>
  );
};

export default Typewritter;
