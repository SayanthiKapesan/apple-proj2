
import React, { useState } from 'react';

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const menuSections = [
    {
      title: "Shop and Learn",
      items: [
        "Store", "Mac", "iPad", "iPhone", "Watch", 
        "AirPods", "TV & Home", "AirTag", "Accessories", 
        "Gift Cards", "Apple Wallet"
      ]
    },
    {
      title: "Services",
      items: [
        "Apple Music", "Apple TV+", "Apple Fitness+",
        "Apple News+", "Apple Arcade", "iCloud",
        "Apple One", "Apple Card", "Apple Books"
      ]
    },
    {
      title: "Apple Store",
      items: [
        "Find a Store", "Genius Bar", "Today at Apple",
        "Apple Camp", "Apple Store App", "Refurbished",
        "Financing", "Apple Trade In", "Order Status"
      ]
    },
    {
      title: "For Business",
      items: [
        "Apple and Business", "Shop for Business"
      ]
    },
    {
      title: "For Education",
      items: [
        "Apple and Education", "Shop for K-12",
        "Shop for College"
      ]
    },
    {
      title: "For Health",
      items: [
        "Apple Healthcare", "Mac in Healthcare",
        "Health on Apple Watch"
      ]
    },
    {
      title: "About Apple",
      items: [
        "Newsroom", "Apple Leadership",
        "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"
      ]
    }
  ];

  return (
    <footer className='bg-[#f5f5f7]'>
      {/* Mobile  Menu */}
      <div className="sm:hidden">
        {menuSections.map((section, index) => (
          <div key={index} className="border-b border-gray-300">
            <button 
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleSection(index)}
            >
              <h5 className="text-sm font-semibold text-gray-900">
                {section.title}
              </h5>
              <span className="text-gray-500">
                {openSection === index ? '−' : '+'}
              </span>
            </button>
            {openSection === index && (
              <ul className="px-4 pb-3 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Desktop  Menu */}
      <div className="hidden sm:block max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {menuSections.map((section, index) => (
            <div key={index} className="text-gray-600">
              <h5 className="pb-2 text-sm font-semibold text-gray-900">
                {section.title}
              </h5>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href="#" 
                      className="text-sm hover:text-gray-900 hover:underline transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom  */}
      <div className="pt-6 pb-4 max-w-6xl mx-auto px-6 bg-[#f5f5f7]">
        <p className="text-xs text-gray-500 text-center mb-4">
          More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>

        <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-4">
          <p className="text-xs text-gray-500">
            Copyright © 2023 Apple Inc. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:underline">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:underline">Terms of Use</a>
            <a href="#" className="text-xs text-gray-500 hover:underline">Sales and Refunds</a>
            <a href="#" className="text-xs text-gray-500 hover:underline">Legal</a>
            <a href="#" className="text-xs text-gray-500 hover:underline">Site Map</a>
          </div>

          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            Switzerland
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



























/*
import React from 'react';

function Footer() {
  const menuSections = [
    {
      title: "Shop and Learn",
      items: [
        "Store", "Mac", "iPad", "iPhone", "Watch", 
        "AirPods", "TV & Home", "AirTag", "Accessories", 
        "Gift Cards", "Apple Wallet"
      ]
    },
    {
      title: "Services",
      items: [
        "Apple Music", "Apple TV+", "Apple Fitness+",
        "Apple News+", "Apple Arcade", "iCloud",
        "Apple One", "Apple Card", "Apple Books"
      ]
    },
    {
      title: "Apple Store",
      items: [
        "Find a Store", "Genius Bar", "Today at Apple",
        "Apple Camp", "Apple Store App", "Refurbished",
        "Financing", "Apple Trade In", "Order Status"
      ]
    },
    {
      title: "For Business",
      items: [
        "Apple and Business", "Shop for Business"
      ]
    },
    {
      title: "For Education",
      items: [
        "Apple and Education", "Shop for K-12",
        "Shop for College"
      ]
    },

        {
      title: "For Health",
      items: [
        "Apple Healthcare", "Mac in Healthcare",
        "Health on Apple Watch"
      ]
    },

        {
      title: "About Apple",
      items: [
        "Newsroom", "Apple Leadership",
        "Career Opportunities", "Investors"," Ethics & Compliance", "Events", "Contact Apple"
      ]
    }
  ];

  return (
    <footer className='bg-gray-200'>
      <div className=" w-[900px] px-20 p-3 max-w-6xl mx-auto sm:grid hidden py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {menuSections.map((section, index) => (
          <div key={index} className="text-gray-600">
            <h5 className="pb-2 text-sm font-semibold text-gray-900">
              {section.title}
            </h5>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
             <a 
                    href="#" 
                    className="text-sm hover:text-gray-900 hover:underline transition-colors">
                    {item}
            </a>
     </li>
              ))}
            </ul>
          </div>
        ))}
      </div>




<div className=" pt-6 pb-4 max-w-6xl mx-auto px-20 w-[1000px] p-3 bg-gray-200 text-center mb-5">
<p className="text-xs text-gray-500 hidden sm:flex text-center">
 More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
</p>


<div 
className="mt-4 flex flex-col md:flex-row justify-between   items-start md:items-center border-t border-gray-300">
 <p className="text-xs text-gray-500 mt-5 ">Copyright © 2023 Apple Inc. All rights reserved.
 </p>
    <div className="flex flex-wrap gap-4 mt-4 md:mt-5 hidden sm:flex ">
 <a href="#" className="text-xs text-gray-500 hover:underline">
    <span className='p-1'>|</span>Privacy Policy|</a>
 <a href="#" className="text-xs text-gray-500 hover:underline">
    <span className='p-1'>|</span>Terms of Use</a>
 <a href="#" className="text-xs text-gray-500 hover:underline">
    <span className='p-1'>|</span>Sales and Refunds</a>
 <a href="#" className="text-xs text-gray-500 hover:underline">
    <span className='p-1'>|</span>Legal</a>
 <a href="#" className="text-xs text-gray-500 hover:underline">
    <span className='p-1'>|</span>Site Map</a>
    </div>

          <p className="text-xs text-gray-500 mt-10 md:mt-0 ml-10 hidden sm:block">
            Switzerland
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{/** 

import React from 'react'








function Footer() {

  return (

<footer className='  bg-gray-200 grid  justify-center items-center  '>

<div className="w-[900px] grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 px-20 bg-gray-200 p-3">


 <div className="text-black pl-4">
      {menuSections.map((section, index) => (
        <ul key={index} className={index !== 0 ? "mt-6" : ""}>
          <li>
            <h5 className="pb-3 text-sm font-semibold">{section.title}</h5>
          </li>
          {section.items.map((item, itemIndex) => (
            <li key={itemIndex} className="font-thin text-sm pb-1">
              <a 
                href="#" 
                className="hover:text-green-500 hover:font-bold transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>




  <div className=" text-black pl-4 ">
    <ul>
        <li> <h5 className='pb-3 '>Shop and Learn</h5></li>
<li className='font-thin text-sm pb-1'><a className='hover:text-green-500 hover:font-bold' href='#'> Store</a></li>
<li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> Mac</a></li>
<li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> ipad</a></li>
<li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> iphone</a></li>
<li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> Watch</a></li>
<li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> Airpods</a></li>
<li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> Tv & Home</a></li>
<li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> AirTag</a></li>
 <li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> Accessories</a></li>
 <li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> Gift Cards</a></li>
 <li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'> Apple Wallet</a></li>
 <li className='font-thin pb-1 text-sm'><a className='hover:text-green-500 hover:font-bold' href='#'>Wallet</a></li>      
<br></br>
<li> <h5 className='pb-3 '>Apple Wallet</h5></li>
<li className='font-thin text-sm pb-1'><a className='hover:text-green-500 hover:font-bold' href='#'> Wallet</a></li>
</ul>
</div>



  <div className="bg-red-500 text-white p-4">2</div>
  <div className="bg-green-500 text-white p-4">3</div>
  <div className="bg-purple-500 text-white p-4">4</div>
  <div className="bg-yellow-500 text-black p-4">5</div>
</div>
</footer>

  )
}

export default Footer*/