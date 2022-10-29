import { getProviders, signIn} from "next-auth/react";
import React from 'react'
import Header from '../../components/Header';

//Browser
function Signin({providers}) {
  return (
    <>
    

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-39 px-14 text-center">
      <img  
      className="w-80"
      src="/images/logo.svg" alt=""/>
      <p className="font-xs italic">Welcome to Disney-ali please signin </p>
        <div className="mt-40">
        {Object.values(providers).map((provider) => (
            <div key={provider.id}>
              <button className='uppercase border px-4 py-1.5 rounded font-normal tracking-wide hover:bg-white hover:text-black transition duration-200' onClick={() => signIn(provider.id, {callbackUrl:"/"})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>      
    </div>
   
    </>
  )
}


export default Signin;
//sever
export async function getServerSideProps(){
  const providers = await getProviders();
  return {
      props:{
          providers
      }
  }
}