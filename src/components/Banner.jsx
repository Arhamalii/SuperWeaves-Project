import React from 'react'
import BG1 from "../components/Video/Pearl_Texture_2.mp4"
function Banner() {
  return (
    <div>
      {" "}
      <div className="mainpage">
        <div className="video-docker  fixed left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="absolute min-h-full min-w-full object-cover "
            src={BG1}
            type="video/webm"
            autoPlay
            muted
            loopF
          ></video>
        </div>
        <div className="relative w-full">
          <div className="container">
            <div className="my-36 mb-4 md:mb-28 md:mt-72 text-center md:text-left">
              <h1 className="leading-[3rem] text-[#CCCCCC] text-[30px] xl:text-[80px] md:leading-[6rem]">
                Experience the <br />{" "}
                <span className="animate-text text-[25px] md:text-[80px] bg-gradient-to-r from-[#EF7A76]  to-[#F6D794] bg-clip-text text-transparent">
                  Future of Collecting
                </span>
              </h1>
              <div className="mt-10 flex flex-wrap items-center gap-20">
                <h1 className="mx-auto md:mx-0 outlined-text font-roboto text-4xl !font-black  sm:text-5xl md:text-[8rem]">
                  NFTs 2.0
                </h1>

                <a
                  href="/"
                  className="rounded-full hidden md:block border-2 border-[#cccccc] px-6 py-3 font-roboto text-[#cccccc] duration-500 hover:underline md:px-10 md:py-5 md:text-2xl  "
                >
                  Let's Explore More
                </a>
              </div>
            </div>
            <div>
              {/* <img src={ScrollDownImg} alt="" /> */}

        
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner