'use client';

import Typewritter from '@components/Typewritter/Typewritter';
import { useState } from 'react';

const page = () => {
  const [text, setText] = useState('');
  const [printedText, setPrintedText] = useState('');
  const [speed, setSpeed] = useState(0);
  const [key, setKey] = useState({ key: Math.random() });
  const [isVisible, setIsVisible] = useState(false);

  return (
    <article className='flex flex-col gap-4'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold'>Typewritter component</h1>
        <p className='text-lg text-gray-700'>
          See your text being typed in real time
        </p>
      </div>
      <form className='w-full max-w-sm space-y-4'>
        <fieldset className='flex flex-row gap-4'>
          <label htmlFor='speed'>Speed:</label>
          <input
            className='w-full rounded-md border'
            type='number'
            id='speed'
            name='speed'
            step={4}
            value={speed}
            onChange={(e) => {
              setSpeed((speed) => Number(e.target.value));
            }}
          />
        </fieldset>
        <fieldset className='flex flex-col gap-4'>
          <label htmlFor='speed'>Text:</label>
          <textarea
            className='w-full rounded-md border'
            id='text'
            name='text'
            value={text}
            onChange={(e) => {
              setText((text) => e.target.value);
            }}
          />
        </fieldset>
      </form>
      <button
        className='w-full max-w-sm border'
        onClick={() => {
          setKey({ key: Math.random() });
          setPrintedText(text);
          setIsVisible(true);
        }}
      >
        Test
      </button>
      <div
        key={key.key}
        className='w-full max-w-sm rounded-lg border border-dashed p-4'
      >
        {isVisible && (
          <Typewritter textSpeed={speed}>{printedText}</Typewritter>
        )}
      </div>
    </article>
  );
};

export default page;
