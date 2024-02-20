import { useEffect, useState } from "react";
import besumz from "../components/icons/besumz3.png";
import lukso from "../components/icons/luksoo3.png";
import twitter from "../components/icons/twitter4.png";
import Hero from "./Hero";
import Meta from "./Meta";
import ThirdSection from "./ThirdSection";
import logo from "./Video/public (1).gif";

function Home() {
  const [scrolled, setScrolled] = useState(false);

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
        className={`w-[100vw] h-[100px] fixed  flex justify-center items-center  z-[100] ${
          scrolled && "backdrop-blur-xl"
        } `}
      >
        <div className="fixed -top-[.36rem] flex justify-between items-center NavperfectWidth mx-auto mt-4 sm:px-12 lg:px-0 z-[100]">
          <div className="relative flex items-center justify-center font-twist text-5xl tracking-tighter">
            <div>
              <p className="font-twister text-5xl max-sm:text-center md:text-6xl text-transparent headingText">
                DWOPE
              </p>
            </div>
            <div className="absolute bottom-1 left-1 max-sm:left-1 text-5xl md:text-6xl">
              <h1 className="font-twister text-[#E4E4E4]">DWOPE</h1>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end  gap-5  text-white  lg:w-2/6">
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
