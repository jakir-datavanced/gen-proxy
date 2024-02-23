import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import PricingBanner from '../../../../../../public/images/pricing-bg.png';
import pricingImg from '../../../../../../public/images/pricing-img.png';
import pricingMobile from '../../../../../../public/images/pricing-imgmobile.png';
import Button from '../../Button/button';

const listsData = [
    {
        id: 1,
        icon: 'light-check.svg',
        item: 'Unlimited Speed'
    },
    {
        id: 2,
        icon: 'light-check.svg',
        item: 'Logs in the personal account',
    },
    {
        id: 3,
        icon: 'light-check.svg',
        item: 'SMS duplication in Telegram Bot',
    },
    {
        id: 4,
        icon: 'light-check.svg',
        item: 'Change IP feature',
    },
    {
        id: 5,
        icon: 'light-check.svg',
        item: 'Telegram uptime notification',
    }
];

const pricingSection = () => {
    return (
        <section className='bg-cover bg-center object-cover object-center pt-24 pb-44 relative' style={{ backgroundImage: `url(${PricingBanner.src})` }}>
            <div className="container">
                <div className='md:w-9/12 xl:w-7/12 mx-auto mb-20 text-center'>
                    <Typography Tag='h2' variant='sectitle' className='mb-4 md:mb-5'>
                        Pricing for Any Budget
                    </Typography>
                    <Typography Tag='p' variant='infoSubText' className='text-black'>
                        Our rates are perfect for any volume!
                    </Typography>
                </div>
                <div className='md:flex items-center gap-x-4 mb-10 md:mb-20'>
                    <div className='lg:w-11/12 xl:w-8/12 mx-auto'>
                        <div className='shadow-pricing liniar-pricing rounded-[2.5rem] md:flex relative overflow-hidden'>
                            <div className='w-5/12 hidden md:block'>
                                <Image className='h-full' src={pricingImg} alt="partnar" />
                            </div>
                            <div className='md:w-6/12 relative md:py-16 md:ml-auto px-10 pt-12'>
                                <div className='mb-4'>
                                    {listsData.map(card => (
                                        <div key={card.id} className="flex items-start gap-4 mb-4">
                                            <Image src={`/images/svg/${card.icon}`} alt={card.item} width={20} height={16} className="flex-shrink-0 mt-1 md:mt-2 w-5 md:w-7 h-4 md:h-5" />
                                            <Typography Tag='span' variant='infoSubText' className='mb-2 text-black'>{card.item}</Typography>
                                        </div>
                                    ))}
                                </div>
                                <div className='text-center mt-4'>
                                    <Typography Tag='p' variant='sectitle' className='text-black mb-4'>
                                        €20<span className='text-2lg font-normal'>/ Proxy For 30 Days</span>
                                    </Typography>
                                    <Button className='mb-4 md:mb-6'>start now</Button>
                                </div>
                            </div>
                            <div className='md:hidden'>
                                <Image className='w-full' src={pricingMobile} alt="Pricing Mobile Img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default pricingSection;
