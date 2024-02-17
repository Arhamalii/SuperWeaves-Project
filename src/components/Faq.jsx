import { Transition } from "@headlessui/react";
import React, { useState } from "react";

function Faq() {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const [isCollapsed5, setIsCollapsed5] = useState(true);
  const [isCollapsed6, setIsCollapsed6] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleToggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };
  const handleToggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };
  const handleToggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };
  const handleToggleCollapse4 = () => {
    setIsCollapsed4(!isCollapsed4);
  };
  const handleToggleCollapse5 = () => {
    setIsCollapsed5(!isCollapsed5);
  };
  const handleToggleCollapse6 = () => {
    setIsCollapsed6(!isCollapsed6);
  };

  const faqs = [
    {
      question:
        "What makes SuperWeaves different from other Metaverse platforms?",
      answer:
        "SuperWeaves is a comprehensive Web3 ecosystem that integrates trading, betting, and social gaming. Our cross-chain functionality and community-centric approach provide a unique, all-in-one experience.",
    },
    {
      question:
        "How does DWØPE ensure the security of transactions within SuperWeaves?",
      answer:
        "Security is paramount at DWØPE. We employ advanced measures for asset and information protection, ensuring your trading, betting, and gaming activities are safe and secure.",
    },
    {
      question: "Can I manage multiple blockchain wallets with SuperWeaves?",
      answer:
        "Absolutely. DWØPE supports interoperable wallets, allowing you to connect and manage your assets across different blockchains effortlessly, all within our app.",
    },
    {
      question: "What betting opportunities does SuperWeaves offer?",
      answer:
        "SuperWeaves offers a dynamic betting landscape with varied pools driven by real-time events in the Web3 space. Bet on outcomes across a range of activities, with the chance to earn substantial rewards.",
    },
    {
      question:
        "How does DWØPE ensure fair play and transparency in betting and gaming?",
      answer:
        "DWØPE is committed to fair play and transparency across all aspects of our platform. By leveraging blockchain technology, every bet, trading card game outcome, and transaction is recorded on a decentralized ledger, ensuring immutable proof of all activities. This not only guarantees fairness but also provides our users with complete visibility and trust in the integrity of our betting and gaming environments.",
    },
    {
      question:
        "What makes DWØPE's DWOOBz NFT collection unique in the digital marketplace?",
      answer:
        "DWØPE's NFTs stand out in the digital marketplace for their intrinsic utility and integration within our ecosystem. From granting access to exclusive content and areas within the metaverse to offering enhancements in our gaming and betting modules, our NFTs are designed to enrich the user experience, making them a valuable asset for both collectors and active platform participants. ",
    },
    //
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-section relative max-w-[1200px] mx-auto">
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
      <div className="flex flex-col justify-center relative items-center gap-14">
        {/* <div className="absolute left-[-600px]">
          <img src={yellowBG} alt="" />
        </div> */}

        <div>
          <h1 className="headingText card-title font-superLagend max-sm:text-2xl text-5xl max-sm:p-2">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex max-sm:flex max-sm:flex-col gap-24 max-sm:gap-10 text-[#e0dede]">
          <div className="flex flex-col gap-6">
            <div className="mt-20 max-sm:mt-4 w-full grid grid-cols-2 max-sm:flex max-sm:flex-col gap-10 max-sm:gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="flex-col max-sm:p-0">
                  <div
                    className="flex w-full cursor-pointer items-center justify-between rounded-2xl bg-black/25 p-4 backdrop-blur-sm"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="font-superLagend text-left relative left-0">
                      {faq.question}
                    </h3>
                    <svg
                      className={`h-5 w-5 transform  opacity-40 text-[#fff8f8] transition-transform duration-300 ${
                        activeIndex === index ? "rotate-0" : "-rotate-180"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
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
                      <p
                        ref={ref}
                        className="font-superLagend text-sm mt-2  rounded-2xl  p-3  text-[#ecebeb] backdrop-blur-sm faqBg"
                      >
                        {faq.answer}
                      </p>
                    )}
                  </Transition>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
