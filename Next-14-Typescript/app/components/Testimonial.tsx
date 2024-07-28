// components/Testimonial.tsx
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

// Define the shape of the props
interface TestimonialProps {
  testimonialTitle: string;
  videos: { image: string; alt: string }[];
  quote: string;
  quoteAuthor: string;
  locationTitle: string;
  locationName: string;
  testimonialImage: string;
  testimonialImageAlt: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  testimonialTitle,
  videos,
  quote,
  quoteAuthor,
  locationTitle,
  locationName,
  testimonialImage,
  testimonialImageAlt,
}) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-5 px-2 py-24 mx-auto">
          <h1 className="text-3xl font-extrabold title-font text-gray-900 mb-12 text-center">
            {testimonialTitle}
          </h1>
          <div className="grid lg:grid-cols-2 grid-col-1 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="w-full">
                <Image src={video.image} className="w-full" alt={video.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#2A2266] px-6 py-12">
        <div className="flex lg:flex-row flex-col gap-12">
          <Image src={testimonialImage} alt={testimonialImageAlt} />
          <div className="text-white">
            <h1 className="text-3xl lg:text-start text-center">{quote}</h1>
            <p className="pt-8">- {quoteAuthor}</p>
            <div className="bg-[#FF7051] h-[0.5px] w-full mt-12" />
            <div className="flex flex-row items-center justify-start pt-12">
              <CiLocationOn className="h-[56px] w-[56px] text-[#FF7051]" />
              <div>
                <p className="text-2xl">{locationTitle}</p>
                <p className="text-2xl text-white font-light">{locationName}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
