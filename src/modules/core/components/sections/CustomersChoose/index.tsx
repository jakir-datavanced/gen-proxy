import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import customers from '../../../../../../public/images/customers-bg.png';

const cardsData = [
    {
        id: 1,
        icon: 'price-svgrepo.svg',
        heading: 'Low Price',
        description: 'The cost of using the app is from 6 to 10 $/month.'
    },
    {
        id: 2,
        icon: 'plane-svgrepo.svg',
        heading: 'Fast and simple',
        description: 'Create private mobile proxies quickly and easily'
    },
    {
        id: 3,
        icon: 'maximum-control.svg',
        heading: 'Maximum control',
        description: 'We support all the necessary features for working with a proxy'
    },
    {
        id: 4,
        icon: 'tariffs.svg',
        heading: 'Tariffs with limited traffic distribution',
        description: 'Working through GenProxy looks like visiting sites from your phone (not hotspot).'
    },
    {
        id: 5,
        icon: 'world.svg',
        heading: 'We work all across the world',
        description: 'Launch mobile proxies in any corner of the world'
    },
];

const CustomerChooseSection = () => {
    return (
        <section className='pt-20 pb-48 md:pb-44 relative choose-liniar'>
            <div className="container mx-auto">
                <div className='lg:w-9/12 mx-auto'>
                    <Typography Tag='h2' variant='sectitle' className="text-center mb-14 md:mb-20">
                        Why customers choose mobile proxies from GenProxy
                    </Typography>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-5">
                    {cardsData.map(card => (
                        <div key={card.id} className="max-w-64 md:max-w-auto mx-auto text-center px-2">
                            <Image src={`/images/svg/${card.icon}`} alt={card.heading} width={80} height={80} className="mb-4 mx-auto h-20" />
                            <Typography Tag='h3' variant='subText' className='text-primary-pink-1 mb-6 capitalize'>{card.heading}</Typography>
                            <Typography Tag='p' variant='infoSubText' className='text-black'>
                                {card.description}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerChooseSection;
