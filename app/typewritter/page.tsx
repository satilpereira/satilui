'use client';

import Typewritter from '@components/Typewritter/Typewritter';
import { useState } from 'react';
import TwCodeBlock from '@components/Typewritter/TwCodeBlock';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const page = () => {
  const [text, setText] = useState('');
  const [printedText, setPrintedText] = useState('');
  const [speed, setSpeed] = useState(0);
  const [key, setKey] = useState({ key: Math.random() });
  const [isVisible, setIsVisible] = useState(false);

  return (
    <article className='mx-auto flex w-full max-w-7xl flex-col rounded-lg px-8'>
      <div className='space-y-8'>
        <h1 className=' text-xl font-bold md:text-6xl'>
          <span className='bg-gradient-to-r from-electric-400 to-pink-500 bg-clip-text text-transparent '>
            Typewritter
          </span>
          <span> Component</span>
        </h1>
        <p className='text-2xl font-semibold text-slate-400'>
          See your text being typed in real time
        </p>
      </div>
      <div className='mt-8 grid grid-cols-2 gap-8'>
        <div className='leading-[1.7]'>
          With this component, you can set both the typing speed and the cursor
          blinking speed. This makes the component higly customizable to attend
          your necessities. usually, greater fonts and lesser text can do better
          with slower text speed, while small fonts and large amounts of texts
          looks nicer when typed faster. I would also recommend you to keep the
          blinking speed slower than the typewritting.
        </div>
        <div className='flex flex-col gap-4'>
          <form className='flex w-full flex-col gap-4'>
            <fieldset className='flex flex-row items-center gap-4'>
              <label htmlFor='speed'>Speed:</label>
              <select
                className='w-full rounded-md border bg-darkindigo-700 px-4 py-1 active:rounded-b-none active:rounded-t-md'
                id='speed'
                name='speed'
                value={speed || 100}
                onChange={(e) => {
                  setSpeed(() => Number(e.target.value));
                }}
              >
                <option className='px-4 py-1' value='33'>
                  Fast
                </option>
                <option value='100'>Medium</option>
                <option value='170'>Slow</option>
              </select>
            </fieldset>
            <fieldset className='flex flex-col gap-4'>
              <label htmlFor='speed'>Text:</label>
              <textarea
                className='w-full rounded-md border bg-darkindigo-700 p-4'
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
            className='w-full rounded-md border bg-darkindigo-700'
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
            className='w-fullrounded-lg rounded-md border border-dashed bg-darkindigo-700 p-4'
          >
            {isVisible && (
              <Typewritter textSpeed={speed || 100}>{printedText}</Typewritter>
            )}
          </div>
        </div>
      </div>
      <div className='leading-[1.7]'>
        <h2 className='text-2xl font-semibold text-slate-400'>
          About the props:
        </h2>
        <ul className='pt-8'>
          <li>
            <b>className:</b> You can just set yout classnames just like you
            would normally in react
          </li>
          <li>
            <b>testSpeed:</b> Defines the time space between letters to be
            printed on screen
          </li>
          <li>
            <b>blinkSpeed:</b> Defines the time space on which the cursor blinks
          </li>
          <li>
            <b>children:</b> The text you want to be typewritted
          </li>
        </ul>
        <p className='text-red-400'>
          * The only prop really needed is the children, as the others have
          default values if not inserted
        </p>
        <div className={sourceCodePro.className}>
          <div className='mt-8 text-sm'>
            <TwCodeBlock />
          </div>
        </div>
      </div>
    </article>
  );
};

export default page;
