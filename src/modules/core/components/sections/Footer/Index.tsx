'use client'
import Image from 'next/image';
import Logo from '../../../../../../public/images/logo.png';
import paymentImg from '../../../../../../public/images/visa-img.png';
import Link from 'next/link';
import React from 'react';
import { Typography } from '../../typography';

const Footer: React.FC = () => {
    // Define an array of menu items
    const menuItems = [
        { title: 'Category', links: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
        { title: 'Category', links: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
        { title: 'Category', links: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
        { title: 'Category', links: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
        { title: 'Category', links: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
    ];

    return (
        <footer className="bg-neutral-secheadlines pt-24 pb-10 md:pb-24">
            <div className='container mx-auto'>
                <div className="mb-10">
                    <Image className='w-36 md:w-52 xl:w-60' src={Logo} alt="logo" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 md:mb-16">
                    {menuItems.map((menuItem, index) => (
                        <div key={index} className="col-span-1 mb-4">
                            <Typography Tag='h3' variant='navTitle' className='mb-4 md:mb-6'>
                                {menuItem.title}
                            </Typography>
                            <ul className="space-y-2">
                                {menuItem.links.map((link, linkIndex) => (
                                    <li className='mb-4' key={linkIndex}>
                                        <Link href="#" className='text-2lg text-white leading-md font-normal'>{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='md:flex justify-between'>
                    <div className='md:w-6/12 mb-4 md:mb-0'>
                        <Typography Tag='p' variant='infoSubText' className='mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <Typography Tag='p' variant='text' className='text-center md:text-left'>
                            Copyright 2023
                        </Typography>
                    </div>
                    <div className='md:w-4/12 mx-auto md:ml-auto'>
                        <Image className='mx-auto md:ml-auto' src={paymentImg} alt="visa" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
