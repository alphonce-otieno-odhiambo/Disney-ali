import Image from 'next/image'
import React from 'react'
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from "next/router";

function Header() {
  const {data: session} = useSession();
  
  // console.log(session)
  const router  =  useRouter()
  
  return (
    
    <div className='sticky bg-[#040714] top-0 z-[1000] flex 
    items-center px-10 h-[72px] md:px-12'>
        <Image
        onClick={() => router.push('/')}
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        />
        {session ? (
          <>
            <div className='hidden ml-10 md:flex items-center space-x-6'>
        <a className="header-link group">
            <HomeIcon className="h-4"  onClick={() => router.push('/')}/>
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="images/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="images/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
        <img
        onClick={signOut}
        src={session.user.image} alt=''
        layout='fill'
        objectFit='cover'
        height={40}
        width={40}
        className="rounded-full  border-r-slate-100 ml-auto boder-r-4 hover:cursor-pointer"
        />
          </>
        ) : (
          <button onClick={signIn} className='ml-auto uppercase border px-4 py-1.5 rounded font-normal tracking-wide hover:bg-white hover:text-black transition duration-200'>Login</button>
        )}
        
        
    </div>
  )
}

export default Header