import React from 'react';
import ObjectiveImage3 from '../assets/About3.png'

function ObjectivesThree() {
  return (
    <div className="flex flex-col md:flex-row p-auto my-10">
      {/* Left Column (Image) */}
      <div className="w-full md:w-1/4">
        <img
          src={ObjectiveImage3}
          alt="Image"
          className="w-full h-auto md:w-auto"
        />
      </div>

      {/* Right Column (Text) */}
      <div className="w-full md:w-3/4 flex flex-col justify-center">
        <h2 className="text-3xl w-full md:w-3/4 font-bold mb-4 text-justify">
          Costumable Debit Card
        </h2>
        <p className="text-lg text-justify">
          Choose a debit card design that suits you. Practically withdraw cash and
        </p>
          <p  className="text-lg text-justify">

          transact worldwide.
          </p>
        <span className="text-green-300">
          <a href="#" className="pl-16 underline">
            Learn More
          </a>
          &rarr;
        </span>
      </div>
    </div>
  );
}

export default ObjectivesThree;
