import React from "react";

function Container() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px- mt-5">
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-8">
        
        {/* Video Section 01 */}
        <div className="flex-1 min-w-0 bg-black p-4 md:p-8 lg:p-10">
          <div className="relative aspect-video overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source 
                src="https://www.apple.com/105/media/us/ipad-air/2024/df9239d9-b05f-4fc6-9f57-8ce5c168833f/anim/hero/large_2x.webm"
                type="video/webm" 
              />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 lg:p-5 bg-gradient-to-t from-black/70 to-transparent">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-1">
                <a href="#">iPad Air</a>
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                <a href="#">Now supercharged by the M3 chip</a>
              </h2>
            </div>
          </div>
        </div>

        {/* Video Section 02 */}
        <div className="flex-1 min-w-0 bg-black p-4 md:p-8 lg:p-10">
          <div className="relative aspect-video overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source 
                src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/welcome-hero/large.mp4"
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 lg:p-5 bg-gradient-to-t from-black/70 to-transparent">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-1">
                <a href="#">MacBook Pro</a>
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                <a href="#">Apple Intelligence</a>
              </h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Container;