import Image from 'next/image'
import React from 'react'
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
// import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from "next/router";
import { useAuth } from '../contextApi/userAuth'

function Header() {
  // const {data: session} = useSession();
  const { logout } = useAuth();
  const { user } = useAuth();
  // console.log(session)
  const router  =  useRouter()
  const hundleLogout = () => {
    
    if(!user){
      router.push('auth/signin')

    }else{
      return logout()
    }
  }
  
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
        {user ? (
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
        <button onClick={hundleLogout} className='ml-auto uppercase border px-4 py-1.5 rounded font-normal tracking-wide hover:bg-white hover:text-black transition duration-200'>Logout</button>
          </>
        ) : (
          <button onClick={() => router.push('/signin')} className='ml-auto uppercase border px-4 py-1.5 rounded font-normal tracking-wide hover:bg-white hover:text-black transition duration-200'>Login</button>
        )}
        
        
    </div>
  )
}

export default Header