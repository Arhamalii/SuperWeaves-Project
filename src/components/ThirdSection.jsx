import React from "react";
import banner from "../components/Video/Pearl_Texture_2.mp4";
import bg_2 from "../components/backgrounds/bg_2.png";
import bg_5 from "../components/backgrounds/bg_5.png";
import bg_shadow from "../components/bg/Ellipse 30.png";
import luksoPng from "../components/images/lukso_png.png";
import unrealPng from "../components/images/unreal_png.png";
import "../index.css";
import Faq from "./Faq";
import { Cards } from "./data/Cards";
import { cardData } from "./data/Models";
import Footer from "./global/Footer";
function ThirdSection() {
  return (
    <>
      {/* left backgrounds */}
      <div className="absolute w-screen h-[300px] top-[156rem] -z-10 left-[-90px] md:left-[-40px] xxl:top-[180rem] xxl:left-[10px] hidden lg:block ">
        <img
          className="max-sm:top-[26rem] w-[200px]  max-sm:-z-10"
          src={bg_2}
          alt=""
        />
      </div>

      <div className="absolute w-screen h-[300px] top-[278rem] -z-10 left-[-90px] md:left-[-20px] xxl:top-[299rem] xxl:left-[20px]  hidden lg:block">
        <img
          className="max-sm:top-[26rem] w-[260px] max-sm:-z-10"
          src={bg_5}
          alt=""
        />
      </div>

      <div className="absolute w-screen h-[300px] top-[270rem] -z-20 left-[-90px] md:left-[0px] opacity-50 ">
        <img
          className="max-sm:top-[26rem] w-[600px]  max-sm:-z-10"
          src={bg_shadow}
          alt=""
        />
      </div>
      {/* right backgrounds */}
      <div className="bgShadownConq hidden lg:block"></div>

      <div className="bgShadow2 hidden lg:block"></div>
      <div className="bgShadow3 hidden lg:block"></div>

      <div className="StatrBg hidden lg:block">
        {/* <img
          className="w-[190px] absolute left-[83rem] top-[140rem]"
          src={bg_3}
          alt=""
        /> */}
      </div>

      {/* <img
          className="w-[220px] absolute left-[83rem] top-[288rem]"
          src={bg_6}
          alt=""
        /> */}
      <div id="dwopRbg hidden lg:block"></div>

      {/*  */}
      <div className="max-w-[1200px]  mx-auto ">
        <div className="p-12 max-sm:p-8 max-sm:pt-0 mt-[10rem] max-sm:mt-0 relative ">
          <h1 className="font-superLagend videoText z-10 text-2xl xsm:text-[25px] sm:text-3xl md:text-5xl  text-center headingText">
            Play, Connect, Conquer
          </h1>

          <p className="text-[#333333] max-sm:w-full lg:text-justify  mt-8 max-sm:mt-8 font-superLagend max-sm:leading-relaxed leading-loose para_styling w-[97%] mx-auto">
            The gaming experience in SuperWeaves is a place where players can
            trade, sell, or purchase <span className="green_gradient">NFT</span>{" "}
            assets directly without intermediaries. Customize your decks with a
            mix of RNG and strategy, and enjoy a fun Multiplayer Trading Card
            Game experience, a first of its kind.
          </p>
        </div>
      </div>

      <div className="trade-sec relative">
        <div className="-z-[100] left-0 top-[7rem] h-[400px] w-full overflow-hidden">
          <video
            className=" min-h-full min-w-full object-cover"
            src={banner}
            type="video/webm"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="absolute tarnsform_center top-[10.6rem] sm:top-[11.6rem] md:top-[9.6rem] text-center flex flex-col ">
          <h1 className=" relative top-24 transform center headingText max-sm:py-4 max-sm:min-w-[250px] md:min-w-[405px] font-superLagend text-4xl md:text-5xl max-md:top-[4.4rem] max-sm:top-[5.2rem] max-sm:text-2xl tracking-wide max-w-[1000px] md:leading-[1.4]">
            Powered By
          </h1>
          <img
            src={luksoPng}
            alt="lukso"
            className="mt-10 h-auto max-w-full lg:max-w-[574px] lg:h-[168px]"
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <p className="font-superLagend lg:relative lg:mt-28 max-sm:mt-[2rem] max-sm:text-center  max-sm:p-4 max-w-[1050px] max-sm:z-30 max-sm:w-full max-sm:font-normal max-sm:leading-relaxed leading-loose para_styling text-left max-md:p-5">
            Harness the power of the <span className="pink_colour">LUKSO</span>{" "}
            blockchain's groundbreaking LSPs to engage in secure, and truly
            decentralized transactions that affirm your true ownership of
            digital assets.
          </p>
        </div>

        {/* <div className="absolute max-sm:z-[-1] right-10 max-sm:right-30 max-sm:top-60">
          <img className="" width={900} src={pinkBG} alt="" /> 
        </div>  */}
        <div className="relative w-[100%] top-[108px] max-sm:top-[40px] text-center">
          <span className="text-2xl xsm:text-[25px] sm:text-3xl md:text-5xl max-sm:p-4 font-superLagend headingText">
            Strategize, Trade, Thrive
          </span>

          <div className="mt-8">
            <div className="text-area pt-6  text-[#333333] p-16 max-sm:p-4  max-w-[1200px] mx-auto ">
              <p className="font-superLagend leading-loose max-sm:leading-relaxed text-start para_styling">
                Connect wallets from any network and manage your digital assets
                with the unified precision that only our platform can provide.
                Your assets are guarded, your identity is secure, and your
                transactions are encrypted. Whether you're within{" "}
                <span className="pink_colour">SuperWeaves</span>, Telegram,
                Discord, or beyond, our bot ensures your trading is as seamless
                as it is successful.
              </p>
              {/* Connect Wallets para*/}
              {/* <br />
              <br />

              <p className="font-superLagend text-[#333333] text-lg max-sm:text-xl max-sm:leading-relaxed leading-loose">
              
              </p> */}
            </div>
            <div className="card-line flex items-center justify-center w-full max-w-[1880px] mx-auto">
              <div>
                <div className="polygon absolute right-96">
                  {/* <img className="mr-60" src={pinkBlue} alt="" /> */}
                </div>
                <div className="cards relative flex max-sm:bottom-[200px] max-sm:top-[2.4rem] px-12">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6  gap-y-[3rem] md:gap-y-[6rem] max-xsm:gap-x-[3rem] max-sm:gap-x-[1rem] gap-x-[4rem] place-items-center">
                    {cardData.map((id, index) => (
                      <div className="card max-sm:w-[200px] max-sm:px-8">
                        <img
                          // // className={
                          // //   index === 0 || 5 ? `w-[320px] h-[300px]` : ""
                          // // }
                          src={id.image}
                          alt=""
                        />
                      </div>
                      // <Canvas
                      //   style={{ height: "320px", width: "200px" }}
                      //   camera={{
                      //     fov: 64,
                      //     getViewBounds: 50,
                      //     position: [-2, 2, 0],
                      //   }}
                      // >
                      //   <ambientLight intensity={5} />
                      //   <OrbitControls enableZoom={true} />
                      //   <Model path={id.path} />
                      // </Canvas>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-[7rem] md:mt-[8rem] ">
              <h1 className=" text-2xl xsm:text-[25px] sm:text-3xl md:text-5xl font-superLagend  z-10 text-center headingText mb-[1rem] md:mb-[3rem]">
                Bet, Win, Celebrate
              </h1>

              <p className="max-md:p-4 text-[#333333]  z-10 font-semibold max-sm:font-normal font-superLagend max-sm:text-left leading-loose max-sm:leading-relaxed max-w-[1050px] para_styling mx-auto">
                At <span className="violet_gradient">DWØPE,</span> we elevate
                betting to an art form with our diverse range of prediction
                pools. From the movements in the financial markets to the
                outcomes of world events, your bets are placed on the future as
                it unfolds. Place a bet today and experience the magic of{" "}
                <span className="violet_gradient">DWØPE,</span> all without ever
                needing to leave{" "}
                <span className="pink_colour">SuperWeaves.</span>
              </p>
            </div>

            {/*  */}
            <div className="relative ">
              <div className="-z-10 left-0 top-[7rem] h-[400px] w-full overflow-hidden  mt-[2.4rem] mb-20 md:my-20 ">
                <video
                  className=" min-h-full min-w-full object-cover"
                  src={banner}
                  type="video/webm"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
              <div className="absolute tarnsform_center top-[12rem] text-center grid place-items-center">
                <h1 className=" relative top-10 transform center headingText max-sm:p-3 max-sm:pl-[1.5rem] font-superLagend text-[28px] sm:text-[40px] md:text-[50px] lg:text-[64px]   tracking-wide max-w-[1000px]">
                  Running On
                </h1>
                <img
                  src={unrealPng}
                  alt="lukso"
                  className="mt-10 h-[100px] max-w-[420px] lg:h-[130px]"
                />
              </div>
            </div>
            {/*===========  */}
            <div className="max-w-[1200px] mx-auto -mt-[2rem] md:mt-[4rem] ">
              <div className="grid place-items-center md:mt-10">
                <div>
                  {/* <img
                      width={800}
                      className="absolute left-[-200px] bottom-[-200px]"
                      src={yellowBG}
                      alt=""
                    /> */}
                </div>

                <p className="max-md:p-8 max-sm:p-4 z-10 max-sm:-z-[10] relative font-superLagend max-sm:leading-relaxed leading-loose para_styling_center max-w-[1000px] md:leading-[43.68px]">
                  With seamless integration across devices and platforms,{" "}
                  <span className="violet_gradient">DWØPE </span>
                  ensures that your betting experience is fluid, intuitive, and
                  always a tap away. Whether you're analyzing trends or placing
                  bets, our interface is crafted for clarity, speed, and ease of
                  use. Our platform transforms betting into a cerebral sport,
                  combining the excitement of risk with the satisfaction of
                  well-played foresight.
                </p>
              </div>
              <div className="text-area mt-[3rem] md:mt-[8rem]">
                <h1 className="text-2xl xsm:text-[25px] sm:text-3xl md:text-5xl font-superLagend  z-10 text-center headingText">
                  The DWØPE NFT Experience
                </h1>
                <p className="p-16 text-[#333333] max-sm:px-4 max-sm:py-9 font-superLagend max-sm:leading-relaxed leading-loose para_styling">
                  Embrace the diversity of{" "}
                  <span className="violet_gradient"> DWØPE's </span>{" "}
                  <span className="green_gradient">NFT </span>
                  collection, from the whimsical charm of WEEPLE characters to
                  the majestic might of DWAGONs. Each NFT serves as your digital
                  alter ego, an avatar that not only represents you but also
                  empowers you with special abilities.
                </p>
              </div>

              <div className="avatar-box flex flex-wrap justify-center max-sm:justify-center sm:gap-y-6 md:gap-10 lg:gap-16 p-4 lg:p-8 xl:p-0">
                <div class="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3">
                  {Cards.map((item, index) => (
                    <div class="overflow-hidden rounded-2xl bg-[#dadada]">
                      <div class="aspect-w-1 aspect-h-1">
                        <div class="overflow-hidden rounded-xl">
                          <img
                            src={item.image}
                            alt=""
                            class="rounded-2xl object-cover"
                          />
                        </div>
                      </div>
                      {/* <div class="flex flex-col md:flex-row justify-between px-3 pt-3">
                        <h1 class="text-xl md:text-2xl text-[#cccccc]">
                          {item.title}
                        </h1>
                        <h1 class="text-sm md:text-2xl text-[#cccccc]">
                          {item.id}
                        </h1>
                      </div>
                      <h1 class="p-3 text-[16px] md:text-[20px] font-[350] font-[Roc-Grotesk-light] text-[#cccccc] leading-[150%]">
                        {item.about}
                      </h1> */}

                      <div className="data-sec text-[#e0dede] p-3 md:py-5">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <span className="font-superLagend headingText text-[30px] max-sm:text-[18px] max-sm:text-start">
                            {item.title}
                          </span>
                          <span className="font-superLagend headingText text-[30px] max-sm:text-[16px] max-sm:text-start">
                            {item.id}
                          </span>
                        </div>
                        <div className="flex justify-start mt-2">
                          <span className="new-rocker-regular text-[20px] max-sm:text-[10px] text-[#232323] customTextAlignStart ">
                            {item.about}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-[2rem] mb-[1rem] md:mb-[3rem] md:mt-[3rem] md:my-[4.2rem] ">
                  <p className="max-md:p-4  text-left font-superLagend max-sm:leading-relaxed leading-loose  para_styling ">
                    <span>
                      {/* <img
                        width={800}
                        className="absolute z-[-10] bottom-10 right-[-50px] overflow-hidden"
                        src={pinkBlue}
                        alt=""
                      /> */}
                    </span>
                    Trade, auction, and leverage your
                    <span className="green_gradient">NFTs</span> in a
                    player-driven market that values rarity, utility, and the
                    story behind each piece. Beyond their visual appeal, these
                    digital assets unlock special features, grant access to
                    exclusive content, and enhance your experience across our
                    platform. From in-game advantages to VIP event access, your
                    <span className="green_gradient"> NFTs </span> serve as the
                    gateway to having the
                    <span className="violet_gradient"> DWØPE</span>st experience
                    in SuperWeaves.
                  </p>
                </div>
              </div>
              <Faq />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
