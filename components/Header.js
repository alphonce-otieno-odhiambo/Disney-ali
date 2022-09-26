import Image from 'next/image'
import React from 'react'
import {
    HomeIcon,
    UserIcon,
    MenuIcon,
    BriefcaseIcon,
    AnnotationIcon
} from '@heroicons/react/solid'
function Header() {
  return (
    <div className='sticky bg-[#040714] top-0 z-[1000] flex 
    items-center px-10 h-[72px] md:px-12'>
        <Image
        src="/images/images/logo.svg"
        width={80}
        height={80}
        />
        <div>
            <a className='header-link group'>
                <HomeIcon className="h-6"/>
                <span className='span'>Home</span>
            </a>
        </div>
        
    </div>
  )
}

export default Header