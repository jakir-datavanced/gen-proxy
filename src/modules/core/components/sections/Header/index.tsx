'use client'
import Image from 'next/image';
import Logo from '../../../../../../public/images/logo.png';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../../Button/button';

const Header = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsSignIn(prevState => !prevState);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    return (
        <header className="absolute top-0 left-0 z-10 w-full lg:px-2 py-8 lg:py-12">
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center">
                        <Image className='w-36 md:w-52 xl:w-60' src={Logo} alt="logo" />
                    </div>
                    <div className="flex items-center space-x-10">
                        {/* Mobile Menu Button */}
                        <button
                            className="block lg:hidden focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9 18.619H23.8C20.9831 18.619 18.7 20.7934 18.7 23.4762V28.3333C18.7 31.0161 20.9831 33.1905 23.8 33.1905H28.9C31.7169 33.1905 34 31.0161 34 28.3333V23.4762C34 20.7934 31.7169 18.619 28.9 18.619ZM10.2 18.619H5.1C2.2831 18.619 0 20.7934 0 23.4762V28.3333C0 31.0161 2.2831 33.1905 5.1 33.1905H10.2C13.0169 33.1905 15.3 31.0161 15.3 28.3333V23.4762C15.3 20.7934 13.0169 18.619 10.2 18.619ZM28.9 0.809509H23.8C20.9831 0.809509 18.7 2.98389 18.7 5.66665V10.5238C18.7 13.2066 20.9831 15.3809 23.8 15.3809H28.9C31.7169 15.3809 34 13.2066 34 10.5238V5.66665C34 2.98389 31.7169 0.809509 28.9 0.809509ZM15.3 5.66665V10.5238C15.3 13.2066 13.0169 15.3809 10.2 15.3809H5.1C2.2831 15.3809 0 13.2066 0 10.5238V5.66665C0 2.98389 2.2831 0.809509 5.1 0.809509H10.2C13.0169 0.809509 15.3 2.98389 15.3 5.66665Z" fill="white" />
                            </svg>

                        </button>
                        {/* Desktop Menu */}
                        <nav className='hidden lg:flex'>
                            <ul className="flex space-x-10 items-center">
                                <li>
                                    <Link href="/" className='text-xl xl:text-2xl text-white leading-sm urbanist font-semibold'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className='text-xl xl:text-2xl text-white leading-sm urbanist font-semibold'>
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className='text-xl xl:text-2xl text-white leading-sm urbanist font-semibold'>
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className='text-xl xl:text-2xl text-white leading-sm urbanist font-semibold'>
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* Sign In / Sign Up Buttons */}
                        <div className='hidden lg:flex'>
                            <div className='bg-primary-pink-1 rounded-full'>
                                <Button onClick={handleToggle} className={` ${isSignIn ? 'rounded-full bg-white text-primary-pink-1 shadow-switch' : 'bg-primary-pink-1'}`}>Sign In</Button>
                                <Button onClick={handleToggle} className={` ${!isSignIn ? 'rounded-full bg-white text-primary-pink-1 shadow-switch' : 'bg-primary-pink-1'}`}>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden w-full h-full fixed top-0 left-0 px-10 py-8 flex justify-between flex-column flex-wrap mobileMenuWrap">
                        <nav className="flex justify-between items-start w-full">
                            <ul className="mb-12">
                                <li className='mb-4'>
                                    <Link href="/" className='text-4lg text-white leading-sm urbanist font-semibold'>
                                        Home
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link href="/about" className='text-4lg text-white leading-sm urbanist font-semibold'>
                                        Features
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link href="/services" className='text-4lg text-white leading-sm urbanist font-semibold'>
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className='text-4lg text-white leading-sm urbanist font-semibold'>
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                            <button onClick={closeMobileMenu}>
                                <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.4469 0.55316C32.7094 -0.184387 31.5135 -0.184387 30.776 0.55316L17 14.3292L3.22401 0.55316C2.48648 -0.184387 1.29069 -0.184387 0.553161 0.55316C-0.184387 1.29069 -0.184387 2.48648 0.553161 3.22401L14.3292 17L0.553199 30.7759C-0.184349 31.5135 -0.184349 32.7092 0.553199 33.4469C1.29073 34.1844 2.48652 34.1844 3.22405 33.4469L17 19.6708L30.776 33.4469C31.5135 34.1844 32.7094 34.1844 33.4469 33.4469C34.1844 32.7092 34.1844 31.5135 33.4469 30.7761L19.6708 17L33.4469 3.22401C34.1844 2.48648 34.1844 1.29069 33.4469 0.55316Z" fill="white" />
                                </svg>
                            </button>
                        </nav>
                        <p className='text-2sm leading-normal text-white font-normal mb-8'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam fugit delectus culpa eveniet possimus perferendis omnis ad, pariatur quasi impedit accusantium dicta est dignissimos reprehenderit ex iure, architecto minima obcaecati.
                        </p>
                        <div className='text-center flex justify-center flex-wrap items-center w-full'>
                            <div className='bg-primary-pink-1 rounded-full inline-block'>
                                <Button onClick={handleToggle} className={` ${isSignIn ? 'rounded-full bg-white text-primary-pink-1 shadow-switch' : 'bg-primary-pink-1'}`}>Sign In</Button>
                                <Button onClick={handleToggle} className={` ${!isSignIn ? 'rounded-full bg-white text-primary-pink-1 shadow-switch' : 'bg-primary-pink-1'}`}>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
