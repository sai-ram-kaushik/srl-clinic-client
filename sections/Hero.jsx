import React from "react";
import Image from "next/image";
import health from "../public/assets/images/health.png";
import main from "../public/assets/images/main.png";
import { BsSearch } from "react-icons/bs";
import TransitionEffect from "../components/TransitionEffect";
const Hero = () => {
  return (
    <div className="w-full h-[80vh] z-[996]">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full h-full">
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <div className="flex items-center gap-2 border border-secondary rounded-full p-2 shadow-md">
              <p className="text-lg">Health Matters</p>
              <Image src={health} alt="health" />
            </div>

            <h1 className="leading-tight">
              <span>Fostering Health</span> through Gynecological Expertise.
            </h1>

            <div className="flex items-center gap-3  rounded-full p-3 shadow-md">
              <input
                type="search"
                placeholder="Search Doctor"
                className="outline-none bg-primary text-lg"
              />
              <BsSearch size={25} className="cursor-pointer" />
            </div>
          </div>

          <div>
            <Image src={main} priority alt="hero_image" className="w-[1285.36px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
