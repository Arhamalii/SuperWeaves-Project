import React from "react";
import besumz from "../icons/besumz3.png";
import lukso from "../icons/luksoo3.png";
import twitter from "../icons/twitter4.png";
function Footer() {
  return (
    <div className="footer-section w-[100%]   py-12 md:py-16  ">
      <div className="flex flex-col justify-center items-center">
        <div className="footer flex justify-between items-center leading-loose w-full px-6">
          <div>
            <h1 className="foooter_light cursor-pointer">
              <a href="https://dwope.works/terms" target="_blank">
                Terms Of Use
              </a>
            </h1>
          </div>
          <h1 className="font-twister text-[36px] md:text-[60px]  headingText leading-[6rem]">
            DWOPE
          </h1>

          <div>
            <h1 className="foooter_light cursor-pointer">
              <a href="https://dwope.works/privacy" target="_blank">
                Privacy Policy
              </a>
            </h1>
          </div>
        </div>

        <div className="headingText headingText flex gap-x-4 pb-4 z-10 cursor-pointer mtOnCustom ">
          {/* <span className="headingText">
            <img width={50} src={discord} alt="discord" />
          </span>
          <span>
            <img width={50} src={youtube} alt="youtube" />
          </span>
          <a href="https://x.com/dwopes">
            <span>
              <img width={50} src={twitter} alt="twitter" />
            </span> */}
          <a
            href="https://twitter.com/DWOPEs"
            rel="noreferrer"
            target="_blank"
            class="cursor-pointer rounded-full border-2 border-[#232323] md:py-1 px-4 py-2  duration-200 hover:scale-110"
          >
            <img
              src={twitter}
              alt=""
              class="w-4 md:h-6 md:w-6 object-contain "
            />
          </a>

          <a
            href="https://wallet.universalprofile.cloud/0xaDD8E3947A934467afd9A6588e2c19ac89c1e15a"
            rel="noreferrer"
            target="_blank"
            class="cursor-pointer rounded-full border-2 border-[#232323] px-4 md:py-1 py-2 text-xl duration-200 hover:scale-110"
          >
            <img src={lukso} alt="" class="w-4 md:h-6 md:w-6 object-contain" />
          </a>

          <a
            href="https://universal.page/collections/0x7c6118ba719a62d40ce6c9580f96306a558cda6f"
            rel="noreferrer"
            target="_blank"
            class="cursor-pointer rounded-full border-2 border-[#232323] px-4 md:py-1 py-2 text-xl duration-200 hover:scale-110"
          >
            <img src={besumz} alt="" class="w-4 md:h-6 md:w-6 object-contain" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
