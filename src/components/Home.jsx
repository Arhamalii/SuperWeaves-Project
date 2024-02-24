import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import besumz from "../components/icons/besumz3.png";
import lukso from "../components/icons/luksoo3.png";
import twitter from "../components/icons/twitter4.png";
import Hero from "./Hero";
import Meta from "./Meta";
import ThirdSection from "./ThirdSection";
import logo from "./Video/public (1).gif";

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const hanldeScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", hanldeScroll);
    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-[100vw] h-[58px] md:h-[100px]  fixed  flex justify-center items-center z-[100] ${
          scrolled && "backdrop-blur-xl"
        } `}
      >
        <div className="fixed -top-[.36rem] flex justify-between items-center NavperfectWidth mx-auto mt-4 px-6 sm:px-12 lg:px-0 z-[100]">
          <div className="relative flex items-center justify-center font-twist text-5xl tracking-tighter">
            <div>
              <p className="font-twister text-4xl sm:text-5xl max-sm:text-center md:text-6xl text-transparent headingText">
                DWOPE
              </p>
            </div>
            <div className="absolute bottom-1 left-1 max-sm:left-1 text-4xl  sm:text-5xl  md:text-6xl">
              <h1 className="font-twister text-[#E4E4E4]">DWOPE</h1>
            </div>
          </div>

          {/* <div className="flex-row items-center justify-end  gap-5  text-white  lg:w-2/6 ">
            <div className="flex flex-row">
              <a
                href="https://twitter.com/DWOPEs"
                rel="noreferrer"
                target="_blank"
                class="cursor-pointer rounded-full border-2 border-[#232323] px-4 py-1 text-xl duration-200 hover:scale-110"
              >
                <img src={twitter} alt="" class="h-6 w-6 object-contain" />
              </a>

              <a
                href="https://wallet.universalprofile.cloud/0xaDD8E3947A934467afd9A6588e2c19ac89c1e15a"
                rel="noreferrer"
                target="_blank"
                class="cursor-pointer rounded-full border-2 border-[#232323] px-4 py-1 text-xl duration-200 hover:scale-110"
              >
                <img src={lukso} alt="" class="h-6 w-6 object-contain" />
              </a>

              <a
                href="https://universal.page/collections/0x7c6118ba719a62d40ce6c9580f96306a558cda6f"
                rel="noreferrer"
                target="_blank"
                class="cursor-pointer rounded-full border-2 border-[#232323] px-4 py-1 text-xl duration-200 hover:scale-110"
              >
                <img src={besumz} alt="" class="h-6 w-6 object-contain" />
              </a>

              <a href="https://dwope.works/DWOOBz" rel="noreferrer">
                <img
                  className="h-20 p-2 max-sm:max-h-14 relative "
                  src={logo}
                  alt="logo"
                />
              </a>
            </div>
            <div className="md:hidden">
              {!active ? (
                <IoMenu
                  className="text-4xl  text-[#232323]"
                  onClick={() => setActive(!active)}
                />
              ) : (
                <IoClose
                  className="text-4xl  text-[#232323]"
                  onClick={() => setActive(!active)}
                />
              )}
            </div>
          </div> */}

          <div className="flex flex-row items-center justify-end  gap-5  text-white  lg:w-2/6">
            <a
              href="https://twitter.com/DWOPEs"
              rel="noreferrer"
              target="_blank"
              class="cursor-pointer rounded-full border-2 border-[#232323] px-4 py-1 text-xl duration-200 hover:scale-110 hidden md:flex "
            >
              <img src={twitter} alt="" class="h-6 w-6 object-contain" />
            </a>

            <a
              href="https://wallet.universalprofile.cloud/0xaDD8E3947A934467afd9A6588e2c19ac89c1e15a"
              rel="noreferrer"
              target="_blank"
              class="cursor-pointer rounded-full border-2 border-[#232323] px-4 py-1 text-xl duration-200 hover:scale-110 hidden md:flex"
            >
              <img src={lukso} alt="" class="h-6 w-6 object-contain" />
            </a>

            <a
              href="https://universal.page/collections/0x7c6118ba719a62d40ce6c9580f96306a558cda6f"
              rel="noreferrer"
              target="_blank"
              class="cursor-pointer rounded-full border-2 border-[#232323] px-4 py-1 text-xl duration-200 hover:scale-110 hidden md:flex"
            >
              <img src={besumz} alt="" class="h-6 w-6 object-contain" />
            </a>

            <a
              href="https://dwope.works/DWOOBz"
              rel="noreferrer"
              className="hidden md:flex"
            >
              <img
                className="h-20 p-2 max-sm:max-h-14 relative "
                src={logo}
                alt="logo"
              />
            </a>

            <div className="md:hidden">
              {!active ? (
                <IoMenu
                  className="text-4xl  text-[#232323]"
                  onClick={() => setActive(!active)}
                />
              ) : (
                <IoClose
                  className="text-4xl  text-[#232323]"
                  onClick={() => setActive(!active)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        class={`fixed flex left-0 z-[1000] h-max py-5 w-[100%] text-black backdrop-blur-lg duration-500 ease-in md:hidden ${
          active ? "top-14" : "-top-40"
        }`}
      >
        <div className="flex  justify-between px- 4 sm:justify-around sm:px-0  w-screen ">
          <div class="mx-4 flex flex-row items-center justify-center  gap-5 text-white">
            <a
              href="https://twitter.com/DWOOBZ"
              rel="noreferrer"
              target="_blank"
              class="cursor-pointer  rounded-full border-2 border-[#232323]  px-4 py-1 text-xl duration-200 hover:scale-110"
            >
              <img src={twitter} alt="" class="h-6 w-6 object-contain" />
            </a>
            <a
              href="https://universalprofile.cloud/0xA3e04De5432BdDE16663daBcc4074A7d450Bd940"
              rel="noreferrer"
              target="_blank"
              class="cursor-pointer  rounded-full border-2 border-[#232323]  px-4 py-1 text-xl duration-200 hover:scale-110"
            >
              <img src={lukso} alt="" class="h-6 w-6 object-contain" />
            </a>
            <a
              href="https://universalpage.dev/drops"
              rel="noreferrer"
              target="_blank"
              class="cursor-pointer  rounded-full border-2 border-[#232323]  px-4 py-1 text-xl duration-200 hover:scale-110"
            >
              <img src={besumz} alt="" class="h-6 w-6 object-contain" />
            </a>
          </div>
          <div class="mx-4 my-4" />
          <img src={logo} alt="" class="h-18 w-20" />
        </div>
      </div>

      {/* <div className="max-w-[1200px] mx-auto "> */}
      <Hero />
      <Meta />
      {/* </div> */}
      <ThirdSection />
    </>
  );
}

export default Home;
