import React from 'react';

function PicAndInfo({ imageSrc, heading, p1,p2,p3 }) {
  return (
    <div className="lg:flex flex-col md:flex-row p-auto my-10 relative justify-center mx-5 ">
    {/* Left Column (Image) */}
    <div className=" rounded-lg lg:absolute lg:-left-10 lg:top-12 left-2 lg:bg-black justify-center block">
      <img
        src={imageSrc}
        alt="Image"
        className="lg:w-full lg:h-auto w-auto"
      />
    </div>

    {/* Right Column (Text) */}
    <div className="w-full md:w-3/4 flex flex-col justify-center md:ml-4 md:mr-4">
      <h2 className="text-3xl w-full  font-bold mb-4 text-justify">
       {heading}
      </h2>
      <p className="text-lg text-justify">
       {p1}
      </p >
      <p  className="text-lg text-justify">{p2}</p>
      <p  className="text-lg text-justify">{p3}
</p>
    </div>
  </div>
  );
}

export default PicAndInfo;
