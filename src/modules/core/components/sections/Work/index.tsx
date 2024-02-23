import React from 'react';
import workBanner from '../../../../../../public/images/work-banner.png';
import workImg from '../../../../../../public/images/work-img.png';
import workMobileImg from '../../../../../../public/images/work-mobile.png';
import Image from 'next/image';

import { Typography } from '../../typography'
import Button from '../../Button/button';

const Work = () => {

  return (
    <section className='bg-cover bg-center object-cover object-center py-16 md:py-24 relative' style={{ backgroundImage: `url(${workBanner.src})` }}>
      <div className='container'>
        <div className='text-center  md:w-10/12 mx-auto'>
            <div className='md:w-8/12 mx-auto mb-12 md:mb-16'>
                <Typography Tag='h2' variant='title' className='mb-6'>
                    How it works
                </Typography>
                <Typography Tag='p' variant='p' className='text-black'>
                    Elevating Your Mobile Experience with State-of-the-Art Proxy Services for Enhanced Connectivity, Security, and Unrestricted Access
                </Typography>
            </div>
          <Image className='hidden md:block  mb-8' src={workImg} alt="Work Img" />
          <Image className='md:hidden mb-8 mx-auto' src={workMobileImg} alt="Work Img" />
          <Button className='mb-6'>Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default Work;
