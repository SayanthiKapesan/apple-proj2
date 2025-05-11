import React from 'react'
import { IoLogoApple } from "react-icons/io5";

function Aritcletwo() {
  return (

    
<article className='mt-7 '>
<div className='text-center pt-5 bg-[#f5f5f7] relative mt-7 '>
  <div className=' absolute top-0 left-1/2 transform -translate-x-1/2'>
 <div className="flex justify-center items-center gap-2">
    
    <h1 className="text-5xl font-bold leading-none p-3 mt-6 flex"><IoLogoApple />WATCH</h1>
</div>

<p className=' text-2xl'>Live healthier. Train better. Stay connected</p>
<div className='flex items-center justify-center gap-4 p-4'>
<button className='p-3 bg-blue-600 text-white rounded-2xl hover:text-black'>  Learn more</button>
<button className='p-3 border border-blue-600 rounded-2xl text-black  hover:text-white hover:bg-blue-600'>  Shop iPhone</button>

</div>
</div>

    <div className='overflow-hidden' style={{ height: 'calc(100vh - 100px)', minHeight: '750px' }}>
          <img 
            className='w-full h-full object-cover object-top'
            src='https://www.apple.com/in/watch/home/images/overview/welcome/welcome__n6xy87ib1gyu_large_2x.jpg' 
            alt='Apple Watch' 
          />

</div>
</div>
</article>



  );
}

export default Aritcletwo;