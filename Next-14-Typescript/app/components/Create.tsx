// components/Create.tsx
import Image from "next/image";
import React from "react";

interface CreateProps {
  heading: string;
  description: string;
  image: string;
  icon: string;
}

const Create: React.FC<CreateProps> = ({
  heading,
  description,
  image,
  icon,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] bg-[#F4F0FF] mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
            {heading}
          </h1>
          <Image
            src={icon}
            height={400}
            width={400}
            alt=""
            className="absolute z-10 top-[0%] right-[0%]"
          />
          <p className="mt-3 text-lg text-[#1D1D1F] dark:text-neutral-400">
            {description}
          </p>
        </div>

        <div className="mt-10 relative max-w-5xl mx-auto">
          <Image
            src={image}
            className="w-full object-cover h-96 sm:h-[480px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
