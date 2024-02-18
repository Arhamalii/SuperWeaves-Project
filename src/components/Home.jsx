import { useEffect, useState } from "react";
import Hero from "./Hero";
import Meta from "./Meta";
import ThirdSection from "./ThirdSection";
import logo from "./Video/9f4e2d1fc36835123a4b3e8cc10017bc.gif";

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
        className={`w-[100vw] h-[7rem] fixed  flex justify-center items-center  z-[100] ${
          scrolled && "backdrop-blur-xl"
        }`}
      >
        <div className="fixed -top-[0.01rem] flex justify-between items-center NavperfectWidth mx-auto mt-4 sm:px-12 lg:px-0 z-[100]">
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
