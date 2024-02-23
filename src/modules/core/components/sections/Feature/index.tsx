'use client'
import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import FeatureImg from '../../../../../../public/images/offer-img.png';
import Button from '../../Button/button';

const listsData = [
    {
        id: 1,
        icon: 'check.svg',
        item: 'Remote IP address change + Changing the IP address by following a link'
    },
    {
        id: 2,
        icon: 'check.svg',
        item: 'Replacement Passive OS Fingerprint (TCP/IP Fingerprint)',
    },
    {
        id: 3,
        icon: 'check.svg',
        item: 'The ability to create multiple proxy access points for 1 phone',
    },
    {
        id: 4,
        icon: 'check.svg',
        item: 'A Telegram bot for notifications and managing IP address changes',
    },
    {
        id: 5,
        icon: 'check.svg',
        item: 'Automatic IP rotation',
    },
    {
        id: 6,
        icon: 'check.svg',
        item: 'Support for .OVPN and UDP',
    },
    {
        id: 7,
        icon: 'check.svg',
        item: 'Trusted IP addresses',
    },
    {
        id: 8,
        icon: 'check.svg',
        item: 'The «Unique IP» feature',
    },
    {
        id: 9,
        icon: 'check.svg',
        item: 'SOCKS5 and HTTP proxies supported',
    },
    {
        id: 10,
        icon: 'check.svg',
        item: 'Unlimited traffic',
    },
    {
        id: 11,
        icon: 'check.svg',
        item: 'High speed',
    },
    {
        id: 12,
        icon: 'check.svg',
        item: 'Data protection',
    }
];

const OfferSection = () => {
    return (
        <section className='pb-10 md:pb-20 pt-20 relative'>
            <div className="container mx-auto lg:px-16 xl:px-24">
                <div className='text-center mb-10 md:mb-16'>
                    <Typography Tag='h2' variant='sectitle' className="text-center purple">
                        We Offer
                    </Typography>
                </div>
                <div className='lg:flex items-center gap-x-4 mb-10 md:mb-14'>
                    <div className='lg:w-9/12'>
                        <div className="grid md:grid-cols-2 row-end-5 gap-x-16 rounded-[2.5rem] offer-liniar px-10 md:px-14 py-14 relative">
                            <div className='hidden md:block absolute inset-x-0 h-4/5 mx-auto w-px bg-neutral-borders-gray borderShape'></div>
                            {listsData.map(card => (
                                <div key={card.id} className="flex items-start gap-4 mb-6">
                                    <Image src={`/images/svg/${card.icon}`} alt={card.item} width={20} height={16} className="mx-auto flex-shrink-0 mt-1 md:mt-2 w-5 md:w-7 h-4 md:h-5" />
                                    <Typography Tag='span' variant='text' className='text-black w-full'>{card.item}</Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='ml-auto -mt-36 w-5/12 md:w-3/12 z-10 relative'>
                        <Image className='w-full h-full' src={FeatureImg} alt="Offer Img" />
                    </div>
                </div>
                <div className='text-center'>
                    <Button className='mb-4 md:mb-6 get-period' >Get a 2-day trial period</Button>
                </div>
            </div>
            <style jsx>{`
                .borderShape {
                    top: 0;
                    bottom:0;
                    margin:auto;
                }
            `}</style>
        </section>
    );
};

export default OfferSection;