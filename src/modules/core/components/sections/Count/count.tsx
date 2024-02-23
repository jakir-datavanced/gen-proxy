// @use-client
'use client'
import React from 'react';
import CountUp from 'react-countup';
interface CountUpProps {
    start: number;
    end: number;
    duration?: number;
    separator?: string;
    decimals?: number;
}

const CountUpComponent: React.FC<CountUpProps> = ({
    start,
    end,
    duration = 2, // Default duration in seconds
    separator = ',',
    decimals = 0, // Number of decimal places
}) => {
    return (
        <CountUp start={start} end={end} duration={duration} separator={separator} decimals={decimals}>
            {({ countUpRef }) => (
                <span className='text-white font-black text-3xxl md:text-3xll xl:text-3xxl leading-md' ref={countUpRef} />
            )}
        </CountUp>
    );
};

export default CountUpComponent;
