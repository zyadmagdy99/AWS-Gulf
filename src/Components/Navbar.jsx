import React, { useState } from 'react'
import { TbWorld } from "react-icons/tb";
import { useTheme } from '../context/ThemeContext';

import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const {Ison , toggle} = useTheme()
  const [showNav, setshowNav] = useState(false)
  console.log('====================================');
  console.log(showNav);
  console.log('====================================');
  function handleNav(){
    setshowNav(!showNav)
  }
  return (
    <div className=''>
<header className={`shadow-sm ${Ison ? 'bg-white' : 'bg-black'}`}>
  {showNav?(<div className='h-[22rem] flex bg-blue-100'>  <ul className={`flex flex-col gap-8 ${Ison?"text-black/50":"text-white"}  w-full p-4 text-start xl:px-16 `}>
            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> خدماتنا </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> تكنولوجيا المعلومات والأجهزة </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> أعمالنا </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> من نحن </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> الوظائف </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> مقالاتنا </a>
            </li>
          </ul> <div className='m-5 text-3xl' onClick={handleNav}> <IoCloseOutline />
            </div> 
          </div>):(<div className="mx-auto  px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center gap-9 justify-between">
      <div className="md:flex md:items-center w-[8rem] justify-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <div className='size-12 mb-4'>
          <img src='./logo.png' alt='logo'/>

          </div>
        </a>
      </div>

      <div className="hidden lg:block  w-full">
        <nav aria-label="Global">
          <ul className={`flex ${Ison?"text-black/50":"text-white"}  w-full justify-around xl:px-16 text-sm`}>
            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> خدماتنا </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> تكنولوجيا المعلومات والأجهزة </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> أعمالنا </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> من نحن </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> الوظائف </a>
            </li>

            <li>
              <a className=" transition hover:text-gray-500/75" href="/"> مقالاتنا </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-around  md:w-1/3 gap-4">
        <div className="sm:flex w-full  sm:gap-4 ">
          <div className="hidden sm:flex hover:cursor-pointer flex-row-reverse  justify-around gap-10 items-center">
            <a
              className={`rounded-md md:w-[80px] me-2 lg:w-[120px] text-white flex justify-center items-center h-[45px] ${Ison?"bg-[#003540]":"bg-[#29a2bb]"}  px-5 py-2.5 text-sm font-medium`}
              href="/"
            >
             اتصل بنا           </a> 
          <label class="switch">
  <input onClick={()=>{toggle()}} type="checkbox"/>
  <span class="slider"></span>
      </label>
      <div className={`flex gap-2 ${Ison?"text-black/50":"text-white"} justify-center items-center`}>
        <TbWorld />
        <p>العربية</p>

      </div>
          </div>
        </div>

        <div className="block md:hidden">
          <button  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
            onClick={handleNav}
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>)
}

</header>
    </div>
  )
}

export default Navbar
