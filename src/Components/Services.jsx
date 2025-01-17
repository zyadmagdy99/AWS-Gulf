import React from 'react'
import Slider from "react-slick";
import { FiArrowUpLeft } from "react-icons/fi";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '../context/ThemeContext';

function Services() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1424, // Large devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Medium devices (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Small devices (phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const{Ison}= useTheme();
  return (
    <div className={`${Ison?"bg-white":"bg-black"} flex px-16 gap-6 flex-col`}>
      <div>
        <h2 className={`text-3xl font-semibold ${Ison?"text-[#003540]":"text-[#35a0b6]"}  md:text-start`}>خدماتنا</h2>
        <p className={`${Ison?"text-[#003540]":"text-white"} md:text-start flex flex-col py-4 ps-1 gap-2 text-black/50`}>يسعدنا ان نقدم أنفسنا كمزود حلول مستقل لأهم العلامات التجارية العالمية المتعلقة بصناعة تكنولوحيا المعلومات و تطوير البرمجيات.</p>
      </div>
      <div className=''>
        {/* sdasda */}
        <Slider {...settings}>
      <div className=''>
        <div className='flex flex-col justify-center  gap-4 items-center border md:w-[25rem] h-[25rem] hover:cursor-pointer hover:bg-[#eaf5f6] hover:scale-105 transition-transform duration-300'>
          <img className='md:w-[16rem] w-[14rem] pt-5' src="/service11.png" alt="service2" />
          <h3  className={`text-xl ${Ison?"text-[#003540]":"text-[#35a0b6]"}`}>تطوير المواقع الإلكترونية
          </h3>
          <p className={`xl:px-8 lg:px-24 px-5 md:px-12 ${Ison?"text-black/50":"text-white"}`}>الاعتماد على حلولنا الرقمية يعني الاستفادة من خبرتنا لتحويل أفكارك إلى واقع رقمي جذاب يحقق النجاح.</p>
        <div className={`${Ison?"text-[#003540]":"text-[#35a0b6]"} flex hover:underline  underline-offset-2 justify-center items-center`}>
          <FiArrowUpLeft />
          اعرف المزيد

        </div>
        </div>
      </div>
      <div className=''>
      <div className='hover:cursor-pointer hover:bg-[#eaf5f6] hover:scale-105 transition-transform duration-300 flex flex-col justify-center gap-2 items-center h-[25rem] md:w-[25rem] border'>
          <img className='lg:w-[16rem] w-[14rem] pt-5' src="/service3.png" alt="service1" />
          <h3 className={`text-xl ${Ison?"text-[#003540]":"text-[#35a0b6]"}`}>تصميم يركز على المستخدم
          </h3>
          <p className={`xl:px-8 lg:px-24 px-5 md:px-12 ${Ison?"text-black/50":"text-white"}`}>في سينترون، ننجح تجارب مستخدم بديهية وجدابة بصريًا، مصممة وفقًا لاحتياجات جمهورك، مما يضمن تفاعلات ذات مغزى تعكس هوية علامتك التجارية.
</p>
<div className={`${Ison?"text-[#003540]":"text-[#35a0b6]"} flex hover:underline pb-6 underline-offset-2 justify-center items-center`}>
          <FiArrowUpLeft />
          اعرف المزيد

        </div>
        </div>      </div>
      <div className=''>
      <div className='hover:cursor-pointer hover:bg-[#eaf5f6] hover:scale-105 transition-transform duration-300 flex flex-col justify-center gap-4 items-center h-[25rem] md:w-[25rem] border'>
          <img className='w-[16rem] pt-5' src="/service2.png" alt="service3" />
          <h3 className={`text-xl ${Ison?"text-[#003540]":"text-[#35a0b6]"}`}>تطوير تطبيقات الجوال
          </h3>
          <p className={`xl:px-8 lg:px-24 px-5 md:px-12 ${Ison?"text-black/50":"text-white"}`}>نقدم تطبيقات موبايل مبتكرة تتجاوز التوقعات، معززة حضورك الرقمي بالكفاءة والتأثير.
</p>
<div className={`${Ison?"text-[#003540]":"text-[#35a0b6]"} flex hover:underline underline-offset-2 justify-center items-center`}>
          <FiArrowUpLeft />
          اعرف المزيد

        </div>
        </div>      </div>
    </Slider>
      {/* xczxczxc */}
      </div>
      <p className={`text-start ${Ison?"text-[#003540]":"text-[#35a0b6]"} mb-6 text-lg ms-4 underline cursor-pointer underline-offset-2`}>استكشف خدماتنا</p>
    </div>
  )
}

export default Services
