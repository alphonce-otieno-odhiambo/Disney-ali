
import React, { useState } from 'react'
import Header from '../../components/Header';
import { useAuth } from "../../contextApi/userAuth";
import { useRouter } from 'next/router';
import { userAgent } from 'next/server';


//Browser
function Signin() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router  =  useRouter()

  const { createUser } = useAuth()
  const createCredentials = async(e) => {
    e.preventDefault();
    setError('');
    try {
      
        await createUser(email, password);
        
      if(user.exists()){
        router.push('/')
      }
     
      
    } catch (e) {
      setError(e.message);
      console.log(email.message)
      
    }
    setEmail('');
    setPassword('');

  }

  return (
    <>
    

    <div className="flex flex-col items-center justify-center mt-10">
      <img  
      className="w-80"
      src="/images/logo.svg" alt=""/>
      <p className="font-xs italic">Welcome to Disney-ali please signin </p>
        <div className="bg-white/10 w-[400px] h-[400px] items-center my-4 rounded-lg space-y-8">
          <div className="mt-8">
            <h4 className="text-2xl text-white font-bold ml-10 p-4">Sign Up</h4>
            <form action="" 
            className="flex flex-col justify-evenly space-y-8 w-full p-2 mt-2"
            onSubmit={createCredentials}>
              <input className="inp" type="email" placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              />
              <input className="inp" type="password" placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)} />
              <button className="w-full bg-blue-900/20 my-8 pb-2 hover:bg-blue-900/40 text-semibold text-lg p-4 items-center">Sign Up</button>
            </form>
          </div>
        </div>
    </div>
   
    </>
  )
}


export default Signin;
//sever
// export async function getServerSideProps(){
//   const providers = await getProviders();
//   return {
//       props:{
//           providers
//       }
//   }
// }