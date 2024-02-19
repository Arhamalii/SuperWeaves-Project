import React from "react";
import discord from "../cards/Discord.png";
import twitter from "../cards/Twitter.png";
import youtube from "../cards/Youtube.png";

function Footer() {
  return (
    <div className="footer-section w-[100%]   py-12 md:py-16  ">
      <div className="flex flex-col justify-center items-center">
        <div className="footer flex justify-between items-center leading-loose w-full">
          <div>
            <h1 className="foooter_light cursor-pointer">Terms Of Use </h1>
          </div>
          <h1 className="font-twister text-[60px] headingText leading-[6rem]">
            DWOPE
          </h1>

          <div>
            <h1 className="foooter_light cursor-pointer">Privacy Policy </h1>
          </div>
        </div>

        <div className="headingText headingText flex gap-x-4 pb-4 z-10 cursor-pointer">
          <span className="headingText">
            <img width={50} src={discord} alt="discord" />
          </span>
          <span>
            <img width={50} src={youtube} alt="youtube" />
          </span>
          <a href="https://x.com/dwopes">
            <span>
              <img width={50} src={twitter} alt="twitter" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
