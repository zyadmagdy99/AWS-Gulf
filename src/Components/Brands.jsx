import React from 'react'
import { useTheme } from '../context/ThemeContext'

function Brands() {
  const {Ison} = useTheme();
  return (
    <div className={`${Ison?"bg-white":"bg-black"}  flex h-[7rem] flex-row-reverse justify-around md:justify-center border shadow-md shadow-gray-200  `}>
      <div className='flex items-center md:w-1/2 gap-4  md:gap-0 pe-4 md:pe-0 justify-around xl:justify-around'>
        <div className='xl:text-[50px] md:text-[35px] xl:pe-16 font-semibold text-[#009982]'>Kaspersk</div>
        <div className='flex items-center md:ps-10'>
          <p className='xl:text-[40px] md:text-[35px]  text-gray-600 font-semibold'>Microsoft</p>
          <img  src='./windows.png' className='w-8 xl:w-full md:w-12 ' alt='windows'/>
        </div>
      </div>
      <div className={`flex justify-center md:w-1/2 ${Ison?"text-[#003540]":"text-white"}  text-sm items-center md:text-3xl xl:text-[40px] ps-3 w-[120px] font-semibold`}>شراكاتنا مع العلامات التجارية الرائدة</div>
    </div>
  )
}

export default Brands
