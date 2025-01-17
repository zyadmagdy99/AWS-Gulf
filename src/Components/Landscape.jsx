import React from 'react'
import { FaBehance } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext';



function Landscape() {
  const {Ison} = useTheme()
  return (
    <div className={`${Ison?"bg-white":"bg-black"}  flex  flex-col-reverse justify-center items-center gap-10 md:gap-0 md:flex-row md:p-10 p-4 `}>
      <div className='flex items-center md:items-start flex-col justify-center md:w-2/5 gap-6 md:gap-10 md:px-6'>
      <h1 className={` ${Ison?"text-[#003540]":"text-white"}  lg:text-[50px] font-bold text-[35px] text-start `}>دليلك نحو المستقبل</h1>
      <p className='text-[#767676] md:text-start  lg:text-[20px]'>استشارات التسويق، تصميم واجهات المستخدم وتجربة المستخدم للمواقع، تطبيقات الهواتف البرمجية، الإعلانات المدفوعة، إنشاء المحتوى، التصميم الجرافيكي، الذكاء الاصطناعي وإنتاج الفيديو.</p>
      <div>
      <a className="rounded-md w-[160px] flex justify-center items-center lg:h-[60px] hover:text-[#04323d] hover:bg-white hover:border hover:border-[#04323d] text-white bg-[#04323D] px-5 py-2.5 text-sm font-medium "
              href="/">
            اتصل بنا الآن 
            </a> 
      </div>
      <div className='flex text-[#04323D] gap-4'>
      <FaBehance className='size-5 cursor-pointer'/>
      <FaInstagramSquare className='size-5 cursor-pointer'/>
      <FaLinkedin className='size-5 cursor-pointer'/>
      <FaYoutube className='size-5 cursor-pointer'/>
      <FaFacebook className='size-5 cursor-pointer'/>
      <BsSnapchat className='size-5 cursor-pointer'/>
      <BsTwitterX className='size-5 cursor-pointer'/>

      </div>
      </div>
      <div className='md:w-3/5 flex flex-col gap-10 md:gap-6 lg:gap-9 justify-between items-center'>
        <div className='flex justify-center items-center'>
          <img src="./whitehome.png" alt="homelanding" />
        </div>
        <div className={`${Ison?"text-[#003540]":"text-white"}  lg:text-2xl md:text-xl gap-9 md:gap-6 md:w-4/5 font-serif flex justify-between`}>
            <div className='border border-[#328b9c] hover:cursor-pointer hover:bg-[#003540] hover:text-white px-3 py-4 rounded-md tracking-widest'>Marketing Solutions</div>
            <div className='border border-[#328b9c] px-3 py-4 rounded-md hover:cursor-pointer tracking-widest hover:bg-[#003540] hover:text-white'>Sowftware Solutions</div>
        </div>
      </div>
    </div>
  )
}

export default Landscape
