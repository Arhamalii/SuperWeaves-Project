import React from "react";
import logo from "../components/Video/9f4e2d1fc36835123a4b3e8cc10017bc.gif";
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
        <div className="logo z-[10] perfectWidth">
          <div className="absolute flex justify-between items-center NavperfectWidth mx-auto mt-4 sm:px-12 lg:px-0">
            <div className="relative flex items-center justify-center font-twist text-5xl tracking-tighter">
              <div>
                <p className="linear-wipe font-twister max-sm:text-4xl max-sm:text-center text-5xl text-transparent  md:text-5xl">
                  DWOPE
                </p>
              </div>
              <div className="absolute bottom-1 left-1 max-sm:left-1 max-sm:text-4xl md:text-5xl">
                <h1 className="font-twister headingText">DWOPE</h1>
              </div>
            </div>
            <a href="https://dwope.works/DWOOBz" rel="noreferrer">
              <img
                className="h-20  max-sm:max-h-14 relative "
                src={logo}
                alt="logo"
              />
            </a>
          </div>
          <div className="flex flex-col  gap-4 items-center max-sm:ml-0 max-sm:w-full max-sm:items-center justify-center h-[100vh]">
            <div>
              <img src={hero_logo} alt="logo" />
            </div>
            <h1 className="font-superLagend text-[3.2rem] max-sm:text-3xl max-sm:text-center text tracking-[0.1em]">
              Trade, Bet & Game
            </h1>
            <h1 className="font-twister text-[3.2rem] max-sm:text-[1.2rem] linear-sub text-transparent  headingText">
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
