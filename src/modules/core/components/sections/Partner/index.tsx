'use client'
// components/partner/PartnerSection.tsx
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Typography } from '../../typography';
import Partnaricon1 from '../../../../../../public/images/partnaricon.png';
import Partnaricon2 from '../../../../../../public/images/partnaricon2.png';
import Partnaricon3 from '../../../../../../public/images/partnaricon3.png';

// Custom styles for the slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnerSection: React.FC = () => {
  // Configure the settings for the slider
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="pb-32 pt-20 liniar-partnar">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Typography Tag='h1' variant='title' className="text-center">
            Partners
          </Typography>
        </div>
        <Slider {...sliderSettings}>
          <div className='px-8 '>
            <div className='border-2 rounded-[2.5rem]  text-center shadow-partnar partnar-liniar partnarCard px-8 py-10'>
              <Image className='h-36 mb-4 mx-auto' src={Partnaricon1} alt="partnar" />
              <Typography Tag='p' variant='infoSubText'>
                Short Description Placeholder
              </Typography>
            </div>
          </div>
          <div className='px-8'>
            <div className='border-2 rounded-[2.5rem]  pernerCard text-center partnar-liniar partnarCard px-8 py-10'>
              <Image className='h-36 mb-4 mx-auto' src={Partnaricon2} alt="partnar" />
              <Typography Tag='p' variant='infoSubText'>
                Short Description Placeholder
              </Typography>
            </div>
          </div>
          <div className='px-8'>
            <div className='border-2 rounded-[2.5rem]  text-center flex flex-col items-center justify-end partnar-liniar partnarCard  px-8 py-10'>
              <Image className='h-20 mb-4 mx-auto' src={Partnaricon3} alt="partnar" />
              <Typography Tag='p' variant='infoSubText'>
                Short Description Placeholder
              </Typography>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PartnerSection;

