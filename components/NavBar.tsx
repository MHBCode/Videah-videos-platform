import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io'; 

import Logo from '../utils/tiktik-logo.png';

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
      <div className='w-[120px] md:w-[150]'>
     <Image
     className='cursor-pointer'
     src={Logo}
     alt="Videah"
     layout='responsive'
     /> 
      </div>
      </Link>
    </div>
  )
};

export default NavBar;
