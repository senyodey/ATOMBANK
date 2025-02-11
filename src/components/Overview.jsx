import React from "react";	


import phoneImage from '../assets/phoneImage.png'
import laptopImage from '../assets/laptopImage.png'
function Overview() {
  return (
    <div className="grid lg:grid-cols-2 grid-rows-1">
      <div className="cols-span-1   rows-span-4 text-center">
        <h1 className="text-6xl ">
          <p className="block"> Easy Way to </p>
          <p className="block">Save your Money </p>
          <p className="block">
            with
            <span className="underline decoration-green-500">
              <span className="font-bold"> Atom</span>Bank
            </span>
          </p>
        </h1>
        <div className="my-10  pl-12 text-justify text-sm">
          <p>
            The best place to transact and save money.We make all payments
            easier{" "}
          </p>
          <p>and simplier. Receive and send payment funds without cash.</p>
        </div>
        <div className="">
          <button className="rounded-[6px] py-1 px-2 m-2 bg-gray-900  text-white">
            Download Now
          </button>
          <a href="#" className="pl-16 underline">
            See How It Works{" "}
          </a>
          &rarr;
        </div>
      </div>
      <div className={`lg:cols-span-1 rows-span-6 relative pl-4 `}>
       
        <div className="lg:absolute lg:pl-36 lg:-top-6 absolute pl-24">
        <img  src={phoneImage} alt ="phoneImage"/>

        </div>
        <img  src={laptopImage} alt ="phoneImage"/>
    </div>
    </div>
  );
}

export default Overview;
