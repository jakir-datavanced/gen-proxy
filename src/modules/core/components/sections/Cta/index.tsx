'use client'
import React, { useState } from 'react';
import { Typography } from '../../typography';
import Button from '../../Button/button';

const SubscribeSection: React.FC = () => {

    return (
        <section className='py-10 cta-liniar'>
            <div className='container mx-auto'>
                <div className='md:w-8/12 mx-auto md:flex items-center justify-between'>
                    <div className='mb-6 md:mb-0 text-center'>
                        <Typography Tag='span' className='text-3md tracking-[0.625em] uppercase cousine inline-block leading-[1.8rem] mb-4'>
                            Still have questions?
                        </Typography>
                        <Typography Tag='h2' variant='subText' className='text-white'>
                            Check out the following helpful resources
                        </Typography>
                    </div>
                    <div className='d-flex text-center md:text-left gap-8'>
                        <Button className='uppercase bg-white border-2 border-solid borde-white purple mr-6'>start now</Button>
                        <Button className='uppercase bg-transparent border-2 border-solid borde-white'>faq</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
