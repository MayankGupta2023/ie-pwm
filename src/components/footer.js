// components/Footer.js

import React from 'react';
import logo from '../assets/logo.png'


const Footer = () => {
  return (

   
    <footer className="bg-slate-100  text-white  mt-10 w-full h-60 flex rounded-t-md border-t-2">
       <div className="w-1/4 h-full bg-red-100 border-l flex flex-col items-center justify-center">
       {/* Logo */}
       <img src={logo.src} alt="Logo" className="w-16 h-16 mb-2" />
   
       {/* Company Name */}
       <p className="text-slate-400 font-bold text-2xl  tracking-wider">
       Instant <span className="text-orange-500">EduDoc</span>
   </p>
   </div>
   
       {/* Rest of the content (75% width) */}
     <div className="w-3/4 h-full bg-red-100 flex justify-center gap-8 flex-col" >


   <div className='flex justify-around items-center'>
  
   <div className="flex flex-col mr-16" >
           <a href="#" className="mb-2 text-zinc-950 text-lg"></a>
           <a href="#" className="mb-2 text-zinc-950 text-lg"></a>
           <a href="#" className=" text-zinc-950 text-lg"></a>
       </div>

       <div className="flex flex-col mr-16" >
           <a href="#" className="mb-2 text-zinc-950 text-lg"></a>
           <a href="#" className="mb-2 text-zinc-950 text-lg"></a>
           <a href="#" className=" text-zinc-950 text-lg"></a>
       </div>

       {/* Row One */}
       <div className="flex flex-col mr-16" >
           <a href="#" className="mb-2 text-zinc-950 text-lg">Company</a>
           <a href="#" className="mb-2 text-zinc-950 text-lg">Product</a>
           <a href="#" className=" text-zinc-950 text-lg">Legal</a>
       </div>
   
       {/* Row Two */}
       <div className="flex flex-col mr-16">
           <a href="#" className="mb-2  text-zinc-950 text-lg">About</a>
           <a href="#" className="mb-2  text-zinc-950 text-lg">Features</a>
           <a href="#" className=" text-zinc-950 text-lg">Privacy</a>
       </div>
   
       {/* Row Three */}
       <div className="flex flex-col">
           <a href="#" className="mb-2 text-zinc-950 text-lg">Careers</a>
           <a href="#" className="mb-2  text-zinc-950 text-lg">Pricing</a>
           <a href="#" className=" text-zinc-950 text-lg">Terms</a>
       </div>
   </div>

   <div className=' h-12 w-full flex justify-around'>
   <p className='text-red-100 text-lg ' > © PWM Group 2023</p>
    <p className='text-red-100 text-lg ' > © PWM Group 2023</p>
    <p className=' text-zinc-950 text-lg ' > © PWM Group 2023</p>
    <p className='text-red-100 text-lg ' > © PWM Group 2023</p>

   </div>

       
   </div>
   
   
   
       </footer>

  );
};

export default Footer;
