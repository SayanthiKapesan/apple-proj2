import React from 'react';

function Containertwo() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px- mt-5 mb-5">
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-8">   
        {/* Video 01 Section */}
        <div className="flex-1 min-w-0 bg-black p-4 md:p-10">
          <div className="relative aspect-video overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source 
                src="https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large_2x.mp4"
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>

            <h1 className="bottom-5 left-0 right-0 absolute text-2xl md:text-3xl font-bold m-2 md:m-5 text-white text-center 
              [text-shadow:_0_0_15px_rgb(255_0_0_/_70%),_0_0_25px_rgb(255_255_0_/_50%),_0_0_40px_rgb(128_0_128_/_40%)]">
              <a href='#'>Apple Watch</a>
            </h1>
            <h1 className="absolute bottom-0 left-0 right-0 text-base md:text-xl text-center
              bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text
              [text-shadow:_0_0_10px_rgb(59_130_246_/_60%),_0_0_18px_rgb(37_99_235_/_50%),_0_0_25px_rgb(29_78_216_/_30%)]">
              <a href='#'>Now supercharged by the M3 chip</a>
            </h1>
          </div>
        </div>    

        {/* Video 02 Section */}
        <div className="flex-1 min-w-0 bg-black p-4 md:p-10"> {/* Added min-w-0 */}
          <div className="relative aspect-video overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source 
                src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/large_2x.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>

            <h1 className="bottom-5 left-0 right-0 absolute text-2xl md:text-3xl font-bold m-2 md:m-5 text-white text-center 
              [text-shadow:_0_0_15px_rgb(255_0_0_/_70%),_0_0_25px_rgb(255_255_0_/_50%),_0_0_40px_rgb(128_0_128_/_40%)]">
              <a href='#'>Get to know iPhone.</a>
            </h1>
            <h1 className="absolute bottom-0 left-0 right-0 text-base md:text-xl font-bold text-center
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

export default Containertwo;