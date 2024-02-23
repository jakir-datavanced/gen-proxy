'use client'
import React from 'react';
import heroBanner from '../../../../../../public/images/hero-banner.png';
import trustpilot from '../../../../../../public/images/trustpilot.png';
import mobileBanner from '../../../../../../public/images/mobile/mobile-hero-banner.png';
import Image from 'next/image';

import { Typography } from '../../typography';
import Link from 'next/link';

const listsData = [
    {
        id: 1,
        icon: 'teligram.svg',
        item: 'Telegram-Chat'
    },
    {
        id: 2,
        icon: 'youtube-round.svg',
        item: 'YouTube channel',
    },
    {
        id: 3,
        icon: 'suppoer.svg',
        item: 'Support',
    }
];


const Hero = () => {
    return (
        <section className='pt-16 relative'>
            <div className='container'>
                <div className='md:w-7/12 mx-auto'>
                    <ul>
                        <li className='grid grid-cols-3 justify-between gap-10 mt-1'>
                            {listsData.map(card => (
                                <div key={card.id} className="flex flex-col items-center justify-center">
                                    <Link href="/" className='mb-3'>
                                        <Image src={`/images/svg/${card.icon}`} alt={card.item} width={80} height={80} className="mx-auto flex-shrink-0" />
                                    </Link>
                                    <Typography Tag='span' variant='infoSubText' className='text-black mb-2 w-full text-center'>{card.item}</Typography>
                                </div>
                            ))}
                        </li>
                    </ul>

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
