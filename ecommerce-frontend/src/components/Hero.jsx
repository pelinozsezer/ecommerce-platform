import React from "react";
import technologyImg from "../assets/technology.png";

export default function Hero() {
  return (
    <div
      className="relative flex flex-col h-[902px] bg-hero-gradient rounded-[20px] overflow-hidden md:hidden mx-[3.14%]
    md:flex-row"
    >
      {/* Text Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-[394px] h-[374px] gap-[32.78px] text-center pt-[60px] mx-auto z-10">
        <div className="w-[122px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#2A7CC7]">
          SUMMER 2020
        </div>

        <div className="font-montserrat font-bold text-[40px] leading-[50px] text-[#252B42]">
          NEW <br /> COLLECTION
        </div>

        <p className="max-w-[294px] font-montserrat font-medium text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </p>

        <button className="bg-[#2A7CC7] hover:bg-[#1f5fa2] text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] rounded-[5px] px-[30px] py-[12px]">
          SHOP NOW
        </button>
      </div>

      {/* Visual Content */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[328px] h-[346px]">
        <div className="absolute top-[20px] left-[15px] w-[60px] h-[60px] bg-white rounded-full opacity-90 z-0" />
        <div className="absolute top-[80px] left-[30px] w-[260px] h-[260px] bg-white rounded-full opacity-90 z-0" />
        <img
          src={technologyImg}
          alt="Technology"
          className="absolute bottom-0 w-[2000px] h-auto object-contain scale-[1.35]"
        />
      </div>
    </div>
  );
}
