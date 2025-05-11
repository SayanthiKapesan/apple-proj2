import React from 'react'

const Article = () => {
  return (


<article className='mt-7  '>


<div className='text-center pt-5 bg-[#f5f5f7] relative mt-4 '>
  <div className=' absolute top-0 left-1/2 transform -translate-x-1/2'>
<h1 className='text-5xl font-bold p-1 mt-6 ' >iPhone</h1>
<p className=' text-2xl'>Meet the iphone 16 family</p>
<div className='flex items-center justify-center gap-4 p-4'>
<button className='p-3 bg-blue-600 text-white rounded-2xl hover:text-black'>  Learn more</button>
<button className='p-3 border border-blue-600 rounded-2xl text-black  hover:text-white hover:bg-blue-600'>  Shop iPhone</button>
</div>
<p className=' text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 text-transparent bg-clip-text pb-9'>Built for Apple Intelligence</p>
</div>

 <div>
<img  className='h-[95vh] w-full object-cover '
 src='https://www.apple.com/in/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_large_2x.jpg ' alt='header' />
</div>
</div>
</article>







);
}

export default Article;