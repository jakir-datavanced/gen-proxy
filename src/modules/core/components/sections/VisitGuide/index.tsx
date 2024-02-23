'use client'
import React from 'react';
import visitBanner from '../../../../../../public/images/visit-banner.png';
import viewguideMobile from '../../../../../../public/images/viewguide-mobile.png';
import { Typography } from '../../typography'
import Button from '../../Button/button';

const VisitGuide = () => {
    return (
        <section className='bg-cover bg-center object-cover object-center pb-8 md:pb-44 pt-80 md:pt-44 relative flex items-end' style={{ backgroundImage: `url(${visitBanner.src})` }}>
            <div className='container px-8 md:px-20'>
                <div className='md:w-7/12 lg:w-6/12 xl:w-5/12 ml-auto'>
                    <Typography Tag='h2' variant='sectitleWhite' className='sectitleWhite capitalize mb-4'>
                        visit our guide
                    </Typography>
                    <Typography Tag='span' className='text-3md tracking-[0.625em] uppercase cousine inline-block leading-[1.8rem] mb-5'>
                        Setting up mobile proxies on any Android: A to Z
                    </Typography>
                    <Typography Tag='p' variant='text' className='mb-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Button className='mb-6'>Learn More</Button>
                </div>
            </div>
            {/* Apply styles when device width is below 1024 */}
            <style jsx>{`
                @media (max-width: 1023px) {
                    .hero-banner {
                        background-image: url(${viewguideMobile.src}) !important;
                    }
                }
                `}
        </style>
        </section>
    );
}

export default VisitGuide;
