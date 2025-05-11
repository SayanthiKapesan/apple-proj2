import React from 'react';

function Container() {
  return (
    <div >
      <div className='flex flex-col md:flex-row justify-between gap-3 w-full p-10 '>


                {/* video-01 Section */}

        <div className="flex-1 bg-black px-10">
          <div className="relative aspect-video overflow-hidden ">
        
            <video
              className="w-full h-full bg-cover  bg-center"
              autoPlay
              loop
              muted
              playsInline >
              <source 
                src="https://www.apple.com/105/media/us/ipad-air/2024/df9239d9-b05f-4fc6-9f57-8ce5c168833f/anim/hero/large_2x.webm" 
                type="video/webm" 
             />
            Your browser does not support the video tag.
            </video>


 <h1 className=" bottom-5 left-0 right-0 absolute  text-3xl font-bold  m-5 text-white text-center
                 [text-shadow:_0_0_15px_rgb(255_0_0_/_70%),_0_0_25px_rgb(255_255_0_/_50%),_0_0_40px_rgb(128_0_128_/_40%)]">
                    <a href='#'>iPad air</a></h1>
 <h1 className="absolute bottom-0 left-0 right-0 text-xl  text-center
                bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text
                [text-shadow:_0_0_10px_rgb(59_130_246_/_60%),_0_0_18px_rgb(37_99_235_/_50%),_0_0_25px_rgb(29_78_216_/_30%)]">
 <a href='#'>Now supercharged by the M3 chip </a></h1>


        </div>
          </div>    




        {/* video-02 Section */}
   <div className="flex-1 bg-black p-10">
          <div className="relative aspect-video overflow-hidden  ">
        
            <video
              className="w-full h-full bg-cover  bg-center"
              autoPlay
              loop
              muted
              playsInline >
              <source 
                src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/welcome-hero/large.mp4 " 
                type="video/webm" 
             />
            Your browser does not support the video tag.
            </video>


 <h1 className=" bottom-5 left-0 right-0 absolute  text-3xl font-bold  m-5 text-white text-center [text-shadow:_0_0_15px_rgb(255_0_0_/_70%),_0_0_25px_rgb(255_255_0_/_50%),_0_0_40px_rgb(128_0_128_/_40%)]">
 <a href='#'>MacBook Pro</a></h1>
 <h1 className="absolute bottom-0 left-0 right-0 text-xl font-bold text-center
                bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text
                [text-shadow:_0_0_10px_rgb(59_130_246_/_60%),_0_0_18px_rgb(37_99_235_/_50%),_0_0_25px_rgb(29_78_216_/_30%)]">
                 <a href='#'>Apple Intelligence</a>
</h1>

          

</div>
   </div>


















   
      </div>
    </div>
  );
}

export default Container;