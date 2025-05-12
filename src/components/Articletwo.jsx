import React from 'react'
import { IoLogoApple } from "react-icons/io5";

function Aritcletwo() {
  return (

    
<article className='mt-7 '>
<div className='text-center pt-5 bg-[#f5f5f7] relative mt-7 '>
  <div className=' absolute top-0 left-1/2 transform -translate-x-1/2'>
 <div className="flex justify-center items-center gap-2">
    
    <h1 className="text-5xl font-bold leading-none p-3 mt-5  flex"><IoLogoApple />WATCH</h1>
</div>

<p className=' sm:flex hidden text-2xl overflow-hidden clip-none sm:clip-bottom-20'>Live healthier. Train better. Stay connected</p>
<p className="md:hidden grid text-2xl overflow-hidden    
bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
Stay connected
  <span className="absolute inset-0 blur-xl opacity-75 "></span>
</p>

<div className='flex items-center justify-center gap-4 p-4'>
<button className='p-3 bg-blue-600 text-white rounded-2xl hover:text-black hidden sm:flex' >  Learn more</button>
<button className='p-3 border hidden sm:flex border-blue-600 rounded-2xl text-black  hover:text-white hover:bg-blue-600'>  Shop iPhone</button>

</div>
</div>

<div className="overflow-hidden w-full   h-[calc(100vh-100px)]
    max-h-[500px] sm:h-[calc(500vh-500px)]
    sm:max-h-[750px]">
   <a href='#'>   <img 
            className='w-full h-full object-cover object-top'
            src='https://www.apple.com/in/watch/home/images/overview/welcome/welcome__n6xy87ib1gyu_large_2x.jpg' 
            alt='Apple Watch' 
          />
</a>
</div>
</div>
</article>



  );
}

export default Aritcletwo;