import React from 'react'

export const Header = () => {
  return (
<header className='mt-5 bg-[#f5f5f7] p-5 '>
    <div className='relative'>
<img  className='h-96 w-full object-cover object-center '
 src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mothersday-header-202504?wid=2880&hei=640&fmt=png-alpha&.v=Q1dxOVUwZU5mMHF6WmVLVzFWRnRTTnd0SW9hNGJHc2tyTC92UTQ1WU1GRng5RUQ4S3YrOGNOK1VzVUFRSkZQNFJycEd6bXQ4WDZ6Rzd5eVloSzN3UjcxRUdYZjQ1SXl2bStHRWlqR3dmU28' alt='header' />

  <div className='absolute text-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-2/3'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold p-3'>
            Mother's Day
          </h1>
          
          <p className='text-lg md:text-xl font-bold'>
            It's not too late to find a gift for mother
          </p>
          
          <button className='mt-3 p-2 md:p-3 text-sm md:text-base bg-blue-600 text-white rounded-xl hover:text-black'>
            Shop Now
          </button>
</div></div>

</header>



  );
}

export default Header;