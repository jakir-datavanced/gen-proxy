import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import proxyImg from '../../../../../../public/images/proxyimg.png';
import pricingMobile from '../../../../../../public/images/pricing-imgmobile.png';
import Button from '../../Button/button';

const proxySection = () => {
    return (
        <section className='relative pb-36'>
            <div className="container">
                <div className='lg:w-11/12 xl:w-8/12 mx-auto -mt-20'>
                    <div className='shadow-pricing liniar-proxy rounded-[2.5rem] md:flex  items-center relative overflow-hidden'>
                        <div className='md:w-7/12 relative md:py-16 md:ml-auto px-16 pt-12'>
                            <Typography Tag='h3' variant='subTitle' className='mb-6 text-3xll'>
                                Do you want a large mobile proxy farm?
                            </Typography>
                            <Typography Tag='p' variant='infoSubText' className='mb-8'>
                                We are ready to assist you in creating a scalable mobile proxy network.
                            </Typography>
                            <Button>Contact sales</Button>
                        </div>
                        <div className='w-5/12 hidden md:block'>
                            <Image className='' src={proxyImg} alt="partnar" />
                        </div>
                        <div className='md:hidden'>
                            <Image className='w-full' src={pricingMobile} alt="Pricing Mobile Img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default proxySection;
