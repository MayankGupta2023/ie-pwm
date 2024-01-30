// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Footer Navigation */}
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#email" className="hover:underline">
                Email
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright Notice */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
