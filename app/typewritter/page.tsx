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
    <article className='mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-lg border border-dashed p-8 shadow-lg'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold'>Typewritter component</h1>
        <p className='text-lg'>See your text being typed in real time</p>
      </div>
      <form className='w-full max-w-sm space-y-4'>
        <fieldset className='flex flex-row gap-4'>
          <label htmlFor='speed'>Time between digits (ms):</label>
          <input
            className='w-full rounded-md border bg-inherit p-4'
            type='number'
            id='speed'
            name='speed'
            step={4}
            min={0}
            max={1000}
            value={speed || 100}
            onChange={(e) => {
              setSpeed(() => Number(e.target.value));
            }}
          />
        </fieldset>
        <fieldset className='flex flex-col gap-4'>
          <label htmlFor='speed'>Text:</label>
          <textarea
            className='w-full rounded-md border bg-inherit p-4'
            id='text'
            name='text'
            placeholder='Type something here ...'
            value={text}
            onChange={(e) => {
              setText((text) => e.target.value);
            }}
          />
        </fieldset>
      </form>
      <button
        className='w-full max-w-sm rounded-md border'
        onClick={() => {
          setKey({ key: Math.random() });
          setPrintedText(text);
          setIsVisible(true);
        }}
      >
        Test
      </button>
      <div>See results below:</div>
      <div
        key={key.key}
        className='w-full max-w-sm rounded-lg border border-dashed p-4'
      >
        {isVisible && (
          <Typewritter textSpeed={speed || 100}>{printedText}</Typewritter>
        )}
      </div>
    </article>
  );
};

export default page;
