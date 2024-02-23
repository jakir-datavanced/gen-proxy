import React from 'react';
import proxyBanner from '../../../../../../public/images/proxy-banner.png';
import { Typography } from '../../typography'
import Button from '../../Button/button';

const ProxyGuide = () => {
    return (
        <section className='bg-cover bg-center object-cover object-center pb-80 md:pb-20 pt-20 relative' style={{ backgroundImage: `url(${proxyBanner.src})` }}>
            <div className='container md:px-20'>
                <div className='md:w-7/12 lg:w-6/12 xl:w-5/12'>
                    <Typography Tag='h2' variant='sectitle' className='textWhite mb-8'>
                        Looking for proxies from various countries?
                    </Typography>
                    <Typography Tag='p' variant='text' className='infoText mb-6'>
                        Buy 3G, 4G, 5G, or LTE mobile proxies from Gen Proxy s trusted sellers.
                        Many of our clients have evolved into professional mobile proxy providers, making large-scale mobile proxy farms. Here, you can buy 4G, 3G, 5G, and LTE mobile proxies at competitive rates.
                        You get great support, outstanding network uptime, and robust data protection.
                    </Typography>
                    <Typography Tag='p' variant='text' className='infoText mb-9'>
                        Most of our affiliated sellers provide unlimited internet traffic, trusted IP addresses, and a guarantee of 100% anonymity. Their self-made mobile proxies are crafted for seamless, no-hassle integration with any software.
                    </Typography>
                    <Button className='get-period'>buy proxies from trusted sellers</Button>
                </div>
            </div>
        </section>
    );
}

export default ProxyGuide;
