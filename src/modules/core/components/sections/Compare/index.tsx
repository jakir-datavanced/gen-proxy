import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import CompareBanner from '../../../../../../public/images/compare-banner.png';
import otherProxy from '../../../../../../public/images/other-proxy.png';
import Genproxyimg from '../../../../../../public/images/genproxyimg.png';
import Button from '../../Button/button';

const listsData = [
    {
        id: 1,
        icon: 'warn.svg',
        item: 'Easily detectable'
    },
    {
        id: 2,
        icon: 'warn.svg',
        item: 'Legit users don’t connect from datacenter IPs',
    },
    {
        id: 3,
        icon: 'warn.svg',
        item: 'Low IP trust score',
    },
    {
        id: 4,
        icon: 'warn.svg',
        item: 'Lowers accounts trust score',
    },
    {
        id: 5,
        icon: 'warn.svg',
        item: 'Can’t change IP on demand',
    }
];

const GenProxyList = [
    {
        id: 1,
        icon: 'light-check.svg',
        item: 'Undetectable'
    },
    {
        id: 2,
        icon: 'light-check.svg',
        item: 'Legit users don’t connect from datacenter IPs',
    },
    {
        id: 3,
        icon: 'light-check.svg',
        item: 'Low IP trust score',
    },
    {
        id: 4,
        icon: 'light-check.svg',
        item: 'Lowers accounts trust score',
    },
    {
        id: 5,
        icon: 'light-check.svg',
        item: 'Can rotate IP via API or automatically',
    }
];

const compareSection = () => {
    return (
        <section className='hero-banner bg-cover bg-center object-cover object-center py-24 relative' style={{ backgroundImage: `url(${CompareBanner.src})` }}>
            <div className="container">
                <div className='md:w-9/12 xl:w-7/12 mx-auto mb-20 text-center'>
                    <Typography Tag='h1' variant='title' className='mb-4 lg:mb-5'>
                        Other Mobile Proxies or GenProxy
                    </Typography>
                    <Typography Tag='p' variant='infoSubText' >
                        Find out why using our 4G mobile proxies is safer and more efficient for your operations
                    </Typography>
                </div>
                <div className='md:w-10/12 mx-auto'>
                    <div className='lg:flex items-center justify-between'>
                        <div className='lg:w-5/12 bg-cover bg-center object-cover object-cente px-10 md:px-16 py-16 rounded-[2.5rem] relative mb-8 lg:mb-0'>
                            <Image className='absolute left-0 top-0 w-full h-full rounded-[2.87rem]' src={otherProxy} alt="Trustpilot Logo" />
                            <div className='relative'>
                                <Typography Tag='h3' variant='navTitle' className='mb-4 md:mb-6 text-center'>
                                    Other Proxies
                                </Typography>
                                {listsData.map(card => (
                                    <div key={card.id} className="flex items-start gap-4 mb-4">
                                        <Image src={`/images/svg/${card.icon}`} alt={card.item} width={20} height={16} className="mx-auto flex-shrink-0 mt-1 md:mt-2 w-5 md:w-7 h-4 md:h-5" />
                                        <Typography Tag='span' variant='infoSubText' className='w-full'>{card.item}</Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='lg:w-2/12 mb-8 lg:mb-0'>
                            <Typography Tag='h1' variant='title' className='text-3xl md:text-5xxl text-center'>
                                VS
                            </Typography>
                        </div>
                        <div className='lg:w-5/12 bg-cover bg-center object-cover object-cente px-10 md:px-16 py-16 rounded-[2.5rem] relative'>
                            <Image className='absolute left-0 top-0 w-full h-full rounded-[2.87rem]' src={Genproxyimg} alt="Trustpilot Logo" />
                            <div className='relative'>
                                <Typography Tag='h3' variant='navTitle' className='mb-4 md:mb-6 text-center'>
                                    Other Proxies
                                </Typography>
                                {GenProxyList.map(card => (
                                    <div key={card.id} className="flex items-start gap-4 mb-4">
                                        <Image src={`/images/svg/${card.icon}`} alt={card.item} width={20} height={16} className="mx-auto flex-shrink-0 mt-1 md:mt-2 w-5 md:w-7 h-4 md:h-5" />
                                        <Typography Tag='span' variant='infoSubText' className='w-full'>{card.item}</Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-5/12 lg:ml-auto text-center mt-10'>
                        <Button className='mb-4 md:mb-6 bg-purple'>try for free</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default compareSection;
