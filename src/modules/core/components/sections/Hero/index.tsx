'use client'
import React from 'react';
import heroBanner from '../../../../../../public/images/hero-banner.png';
import trustpilot from '../../../../../../public/images/trustpilot.png';
import mobileBanner from '../../../../../../public/images/mobile/mobile-hero-banner.png';
import Image from 'next/image';

import { Typography } from '../../typography'
import Button from '../../Button/button';

const Hero = () => {
  return (
    <section className='hero-banner bg-cover bg-center object-cover object-center pb-16 md:pb-28 lg:pb-48 xl:pb-60 pt-60 md:pt-80 relative flex h-screen md:h-full' style={{ backgroundImage: `url(${heroBanner.src})` }}>
      <div className='container md:px-10 lg:px-32 flex items-end'>
        <div className='md:w-8/12 xl:w-5/12'>
          <Typography Tag='h1' variant='title' className='mb-4 md:mb-6'>
            Create 4G/5G mobile proxies using Android devices
          </Typography>
          <Typography Tag='p' variant='p' className='mb-6 md:mb-9'>
            Mobile network connection (simcard) in your Android is required to make 4G proxies. Use numerous devices and create 4G mobile proxy farm for large-scale output!
          </Typography>
          <Button className='mb-4 md:mb-6'>Learn More</Button>
          <Image src={trustpilot} alt="Trustpilot Logo" />
        </div>
      </div>
      {/* Apply styles when device width is below 1024 */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .hero-banner {
            background-image: url(${mobileBanner.src}) !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
