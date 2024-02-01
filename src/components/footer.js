// components/Footer.js

import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-slate-100  text-white  mt-10 w-full h-52 flex rounded-t-md border-t-2">
    <div className="w-1/4 h-full bg-red-100 border-l flex flex-col items-center justify-center">
    {/* Logo */}
    <img src={logo.src} alt="Logo" className="w-16 h-16 mb-2" />

    {/* Company Name */}
    <p className="text-slate-400 font-bold text-2xl  tracking-wider">
    Instant <span className="text-orange-500">EduDoc</span>
</p>
</div>

    {/* Rest of the content (75% width) */}
    <div className="w-3/4 h-full bg-red-100 flex justify-center items-center">
    {/* Row One */}
    <div className="flex flex-col mr-16">
        <a href="#" className="mb-2 text-zinc-950">Company</a>
        <a href="#" className="mb-2 text-zinc-950">Product</a>
        <a href="#" className=" text-zinc-950">Legal</a>
    </div>

    {/* Row Two */}
    <div className="flex flex-col mr-16">
        <a href="#" className="mb-2  text-zinc-950">About</a>
        <a href="#" className="mb-2  text-zinc-950">Features</a>
        <a href="#" className=" text-zinc-950">Privacy</a>
    </div>

    {/* Row Three */}
    <div className="flex flex-col">
        <a href="#" className="mb-2 text-zinc-950">Careers</a>
        <a href="#" className="mb-2  text-zinc-950">Pricing</a>
        <a href="#" className=" text-zinc-950">Terms</a>
    </div>
</div>



    </footer>
  );
};

export default Footer;
