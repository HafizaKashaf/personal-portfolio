import React from 'react'
import Link from 'next/link'
import { ImCross } from 'react-icons/im';

interface Props{
    showNav:boolean;
    closeNav:()=> void;
}

const MobileNav = ({closeNav,showNav}:Props) => {

    const navOpenStyle =showNav ? "translate-x-0":"translate-x-[-100%]";
  return (
  <div>
    {/* OverLay */}
  <div className={`fixed ${navOpenStyle} top-0 transform-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}></div>
   <ul className={`text-white fixed ${navOpenStyle} flex top-0 items-center justify-center flex-col h-[100vh] transform transition-all duration-300 delay-300 w-[80%] sm:w[60%] bg-blue-500 space-y-10 z-[10006]`}>
   <li className='navlink'>
                <Link href="/">Home</Link>
            </li>
            <li className='navlink'>
                <Link href="/about">About</Link>
            </li>

            <li className='navlink'>
                <Link href="/services">Services</Link>
            </li>

            <li className='navlink'>
                <Link href="/portfolio">Portfolio</Link>
            </li>

          
            <li className='navlink'>
                <Link href="contact">Contact</Link>
            </li>
     {/* Cross Icon For Close The Navbar */}
   <ImCross onClick={closeNav} className='absolute top-[-1.4rem] right-[1.4rem] h-[1.4rem] w-[1.4rem] text-white' />
   </ul>
   
   
  </div>
  )
}

export default MobileNav
