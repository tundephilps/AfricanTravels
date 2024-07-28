// components/Hero.tsx
import React from "react";
import Image from "next/image";
import { Builder } from "@builder.io/react";
import Hero2 from "../assets/Hero.png";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  image,
}) => {
  return (
    <section className="bg-[#F4F0FF]  lg:py-12 py-8 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-black font-bold text-2xl lg:text-6xl lg:text-start text-center">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br
                className={
                  index < title.split("\n").length - 1
                    ? "block"
                    : "hidden lg:block"
                }
              />
            </React.Fragment>
          ))}
        </h1>
        <p className="text-[#1d1d1f] max-w-xl lg:text-[17px] leading-relaxed sm:mx-auto lg:ml-0">
          {description}
        </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          <div className="px-7 py-3 w-full bg-[#FF7051] text-gray-200 text-center rounded-md block sm:w-auto">
            {buttonText}
          </div>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <Image
          src={image}
          className="w-full lg:h-[540px] mx-auto sm:w-10/12 lg:w-full"
          alt="Hero Image"
        />
      </div>
    </section>
  );
};
export default Hero;
