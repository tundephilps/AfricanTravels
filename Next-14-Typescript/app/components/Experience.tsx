// components/Experience.tsx
import Image from "next/image";
import React from "react";

interface City {
  image: string;
  description: string;
  ctaText: string;
}

interface ExperienceProps {
  heading: string;
  cities: City[];
}

const Experience: React.FC<ExperienceProps> = ({ heading, cities }) => {
  return (
    <section className="text-gray-600 body-font bg-[#F4F0FF]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl lg:text-5xl font-extrabold title-font mb-4 text-gray-900">
            {heading}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {cities.map((city, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex flex-col gap-6">
                <Image src={city.image} alt="" className="w-full" />
                <p className="font-extrabold">{city.description}</p>
                <div className="px-7 py-3 w-full bg-[#682ACE] text-xs lg:text-base whitespace-nowrap text-gray-200 text-center rounded-md block sm:w-auto">
                  {city.ctaText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
