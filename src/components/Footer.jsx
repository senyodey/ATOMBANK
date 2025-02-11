import React from 'react';
import fbLogo from '../assets/FacebookLogo.png'
import Logo from '../assets/Logo.png'
import instaLogo from '../assets/InstagramLogo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Four Column Section */}
      <div className="container mx-auto py-6 flex flex-wrap justify-center">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
          <div className='flex'>
        <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="LOGO"
              />
              
            </a>
            <span> <span className='font-black'>Atom</span>Bank</span>
        </div>

          </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Lakasi</h3>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Kantak</h3>
          <h5>Costumer Service 0812 - 1234 -5678</h5>
        </div>

        {/* Column 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
        <div className='flex'>
        <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={fbLogo}
                alt="LOGO"
              />
              
            </a>
            <span> &#64; atombank</span>
        </div>
        <div className='flex'>
        <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={instaLogo}
                alt="LOGO"
              />
              
            </a>
            <span> &#64; atombank</span>
        </div>

        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-gray-700 mx-auto w-3/4 my-6" />

      {/* Copyright Text */}
      <div className="text-center pb-4">
        <p>HeyAnarda &#64; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
