import React from "react";
import BG1 from "../components/Video/Pearl_Texture_2.mp4";
import hero_logo from "../components/images/hero_logo.png";

function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto flex w-full h-[100vh] overflow-hidden justify-center">
      <div className="h-screen">
        <div className="banner-section">
          <div className="-z-10 absolute left-0 top-0 h-full w-full overflow-hidden">
            <video
              className="absolute min-h-full min-w-full object-cover"
              src={BG1}
              type="video/webm"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        {/*  */}
        <div className=" perfectWidth ">
          <div className="flex flex-col gap-8 items-center max-sm:ml-0 max-sm:w-full max-sm:items-center justify-center h-[100vh]">
            <div className="px-4 md:px-0">
              <img src={hero_logo} alt="logo" />
            </div>
            <h1 className="font-superLagend text-[1.675rem] sm:text-3xl text-center lg:text-[3.2rem] tradeBetGameText tracking-[0.1em] pt-0 lg:pt-1 ">
              Trade, Bet & Game
            </h1>
            <h1 className="font-twister  text-[1.2rem] sm:text-[2rem] lg:text-[3.2rem] linear-sub text-transparent  headingText  pt-0 lg:pt-1">
              In One Web3 MMO Super APP
            </h1>
          </div>

          <div className="text_box w-[100%] bg-red-300 middle-text flex flex-col items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
