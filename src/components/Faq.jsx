import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import fqBG4 from "./backgrounds/ft-bg_1.png";
import fqBG3 from "./backgrounds/ft-bg_2.png";
// import fqBG2 from "./backgrounds/ft-bg_4.png";
import dropDown from "./icons/DropDown.png";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why are there 6 collections ?",
      answer:
        "Keep in mind that all these collection will be available in the same mint (our one and only). Regardless, each collection are entitled to different perks (in the SteakStation , and the DreamWave ), there will also be perks to holding multiple",
    },
    {
      question: "What's the mint price ?",
      answer:
        "Security is paramount at DWØPE. We employ advanced measures for asset and information protection, ensuring your trading, betting, and gaming activities are safe and secure.",
    },
    {
      question: "W E N ?",
      answer:
        "Absolutely. DWØPE supports interoperable wallets, allowing you to connect and manage your assets across different blockchains effortlessly, all within our app.",
    },
    {
      question: "What's this DreamWave game all about ?",
      answer:
        "SuperWeaves offers a dynamic betting landscape with varied pools driven by real-time events in the Web3 space. Bet on outcomes across a range of activities, with the chance to earn substantial rewards.",
    },
    {
      question: "Is there a Whitelist ?",
      answer:
        "DWØPE is committed to fair play and transparency across all aspects of our platform. By leveraging blockchain technology, every bet, trading card game outcome, and transaction is recorded on a decentralized ledger, ensuring immutable proof of all activities. This not only guarantees fairness but also provides our users with complete visibility and trust in the integrity of our betting and gaming environments.",
    },

    //
    // Add more FAQ items as needed
  ];

  return (
    <>
      {/* faq bg left */}
      <div className="absolute w-screen h-[300px] top-[236rem] -z-10 left-[-90px] md:left-[0px] ">
        <img
          className="max-sm:top-[26rem] w-[140px]  max-sm:-z-10"
          src={fqBG3}
          alt=""
        />
      </div>

      <div className="absolute w-screen h-[300px] bottom-[300px] -z-10 left-[-90px] md:left-[0px] ">
        <img
          className="max-sm:top-[26rem] w-[160px]  max-sm:-z-10"
          src={fqBG4}
          alt=""
        />
      </div>
      {/* faq bg right */}
      <div className="faqRBg2">
        {/* <img
          className="w-[120px] absolute left-[89rem] mb-[70rem]"
          src={fqBG1}
          alt=""
        /> */}
      </div>

      <div className="faqRBg1">
        {/* <img
          className="w-[120px] absolute left-[87rem] mt-[40rem]"
          src={fqBG2}
          alt=""
        /> */}
      </div>
      {/*  */}

      <div className="faq-section relative max-w-[1300px] mx-auto px- md:px-12 ">
        {/* <div className="absolute max-sm:hidden  left-[-25rem] opacity-30">
        <img width={200} src={fl1} alt="" />
      </div>
      <div className="absolute max-sm:hidden  right-[-400px] opacity-30 overflow-hidden">
        <img width={150} src={fl2} alt="" />
      </div>
      <div className="absolute max-sm:hidden  left-[-28rem] opacity-30 bottom-[-90px] rotate-12 overflow-hidden">
        <img width={200} src={fl3} alt="" />
      </div>
      <div className="absolute max-sm:hidden  right-[-20rem] opacity-30 bottom-[-150px] rotate-45 overflow-hidden">
        <img width={150} src={fl4} alt="" />
      </div> */}
        <div className="flex flex-col justify-center relative items-center gap-14 ">
          {/* <div className="absolute left-[-600px]">
          <img src={yellowBG} alt="" />
        </div> */}

          <div>
            <h1 className="headingText card-title font-superLagend max-sm:text-2xl text-5xl max-sm:p-2">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex max-sm:flex-col gap-24 max-sm:gap-10 text-[#CCCCCC]">
            <div className="flex flex-col gap-6 faqsBg">
              <div className="mt-10 max-sm:mt-4 w-full flex flex-col gap-10 max-sm:gap-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="flex-col max-sm:p-0 ">
                    <div
                      className={`flex  cursor-pointer items-center justify-between rounded-2xl bg-[#353535] p-6 lg:py-8 lg:px-[2.38rem] backdrop-blur-sm text-[24px]  ${
                        activeIndex === index && "hidden"
                      } `}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className="font-superLagend text-left relative left-0">
                        {faq.question}
                      </h3>
                      <img
                        src={dropDown}
                        className={`transform  opacity-40 text-[#fff8f8] transition-transform duration-300 ${
                          !activeIndex === index ? "rotate-0" : "-rotate-"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      />
                    </div>
                    <Transition
                      show={activeIndex === index}
                      enter="transition duration-100 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      {(ref) => (
                        <div className="faqBg p-10  backdrop-blur-sm font-superLagend rounded-[25px] text-start text-[32px] ">
                          <div className="flex justify-between items-center">
                            <h4
                              className="text-[#FFC700] w-[90%]
"
                            >
                              {faq.question}
                            </h4>

                            <div>
                              <img
                                src={dropDown}
                                alt="dropdown"
                                className="transform  opacity-40 text-[#fff8f8] transition-transform duration-300 -rotate-180"
                                onClick={() => setActiveIndex(null)}
                              />
                            </div>
                          </div>

                          <p
                            ref={ref}
                            className=" text-[12px] md:text-[18px] w-[90%]   mt-4 text-[#FFFFFF] leading-[1.64rem] "
                          >
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </Transition>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
