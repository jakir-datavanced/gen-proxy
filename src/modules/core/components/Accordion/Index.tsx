// @use-client
'use client'
import { useState } from 'react';
import { Typography } from '../typography';

// SVG icon for the up arrow
const AngleUpIcon = () => (
    <svg width="20" height="12" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L11.5 2L21 11" stroke="#4E415F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);

// SVG icon for the down arrow
const AngleDownIcon = () => (
    <svg width="20" height="12" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L11.5 11L21 2" stroke="#4E415F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            {items.map((item: AccordionItem, index: number) => (
                <div key={index} className={`mb-6 shadow-accordion rounded-[2.5rem] ${openIndex === index ? 'accordionExpand' : ''}`}>
                    <button className="flex items-center justify-between text-primary-lightPurple-2 text-2sm md:text-3lg lg:text-xl leading-md font-semibold  shadow-accordion outline-none w-full py-5 px-7 lg:px-16 rounded-[2.5rem] " onClick={() => toggleAccordion(index)}>
                        <span className='text-left'>{item.title}</span>
                        {openIndex === index ? <AngleUpIcon /> : <AngleDownIcon />}
                    </button>
                    {openIndex === index && (
                        <div className="py-6 px-7 lg:px-16 content border-solid border">
                            <Typography Tag='p' variant='infoText' className='text-neutral-secheadlines'>{item.content}</Typography>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
