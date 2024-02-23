'use client'
import React, { useState } from 'react';
import { Typography } from '../../typography';
import Button from '../../Button/button';

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your logic to handle the email subscription
    console.log('Email subscribed:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <section>
      <div className="container relative mx-auto -mb-16 pt-16">
        <div className='subsCription-liniar rounded-[2.5rem] py-14 md:w-10/12 mx-auto px-10'>
          <Typography Tag='h2' variant='sectitle' className='text-white subText text-center text-2xl mb-5 md:mb-8'>
            Subscribe to our Newsletter
          </Typography>
          <form onSubmit={handleSubmit} className="md:flex items-center justify-center md:w-10/12 xl:w-7/12 gap-6 mx-auto text-center">
            <div className='relative w-full'>
              <span className='absolute left-6 top-4'>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.35559 1.77299C2.41802 1.75795 2.48311 1.75 2.55 1.75H14.45C14.5169 1.75 14.582 1.75795 14.6444 1.77299L8.5 6.43778L2.35559 1.77299ZM1.7 3.44972V11.375C1.7 11.8582 2.08056 12.25 2.55 12.25H14.45C14.9194 12.25 15.3 11.8582 15.3 11.375V3.44972L9.00451 8.2292C8.70455 8.45693 8.29545 8.45693 7.99549 8.2292L1.7 3.44972ZM2.55 0C1.14167 0 0 1.17525 0 2.625V11.375C0 12.8247 1.14167 14 2.55 14H14.45C15.8583 14 17 12.8247 17 11.375V2.625C17 1.17525 15.8583 0 14.45 0H2.55Z" fill="#949394" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={handleEmailChange}
                className="text-2sm leading-tight border rounded-[1.87rem] pl-14 pr-10 py-4 focus:outline-none focus:border-primary-500 text-placeHolder shrink-0 mb-7 md:mb-0 w-full"
              />
            </div>
            <Button className='bg-primary-pink shrink-0'>Sign up</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
