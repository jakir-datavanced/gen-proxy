import React from 'react';
import CountUp from './count';
import { Typography } from '../../typography';

const CountComponent: React.FC = () => {
    return (
        <div className='container'>
            <div className='count-liniar count-mobile-liniar py-10 md:py-20 relative rounded-[2.50rem] px-10 lg:px-20 -mt-32 md:-mt-20'>
                <div className='grid md:grid-cols-3 '>
                    <div className='text-center mb-8 md:mb-0'>
                        <CountUp start={0} end={5000} duration={5} />
                        <span className='text-white font-black text-3xxl md:text-3xll xl:text-3xxl leading-md'>+</span>
                        <Typography Tag='p' variant='infoSubText' className='mt-1'>
                            Installations in <b>the Play Market</b>
                        </Typography>
                    </div>
                    <div className='text-center mb-8 md:mb-0'>
                        <CountUp start={0} end={1500} duration={4} />
                        <span className='text-white font-black text-3xxl md:text-3xll xl:text-3xxl leading-md'>+</span>
                        <Typography Tag='p' variant='infoSubText' className='mt-1'>
                            Participants <b> Telegram Chat Participants</b>
                        </Typography>
                    </div>
                    <div className='text-center'>
                        <CountUp start={0} end={99} duration={3} />
                        <span className='text-white font-black text-3xxl md:text-3xll xl:text-3xxl leading-md'>%</span>
                        <Typography Tag='p' variant='infoSubText' className='mt-1'>
                            Network Uptime
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountComponent;
