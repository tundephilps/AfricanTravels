// components/Discover.tsx
import Image from "next/image";
import React from "react";

interface DiscoverProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const Discover: React.FC<DiscoverProps> = ({
  title,
  description,
  buttonText,
  image,
}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="lg:px-16 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font text-4xl lg:text-6xl mb-4 font-extrabold text-gray-900 leading-12">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="px-7 py-3 w-full bg-[#682ACE] text-xs lg:text-base whitespace-nowrap text-gray-200 text-center rounded-md block sm:w-auto">
            {buttonText}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
