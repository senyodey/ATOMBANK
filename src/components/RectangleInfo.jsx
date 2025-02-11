
import React from 'react';
import PicAndInfo from './PicAndInfo';
import AccBoxImage from '../assets/account_box.png'
import SecurityImage from '../assets/security.png'

function RectangleInfo() {
  return (
    
     <div className="lg:container lg:mx-auto pt-48 lg:my-20 ">
     <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-center md:space-x-3 bg-gray-900  rounded-lg text-white"  >
     <PicAndInfo
            imageSrc={SecurityImage}
            heading="Fast and secure cashless payments"
            p1="Pay with AtomBank app, online, and"
            p2=" in stores, and get added speed "
            p3="and security"

          />
    
      <PicAndInfo
            imageSrc={AccBoxImage}
            heading="Control over your account"
            p1="Your bank account lets you easily lock your"
            p2="card in the app and later reorder it with a"
            p3=" tap of a button."
          />
     </div>
   </div>
  );
}

export default RectangleInfo;
