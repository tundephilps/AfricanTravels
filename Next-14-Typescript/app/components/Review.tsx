// components/Review.tsx
import React from "react";
import { CiLocationOn } from "react-icons/ci";

interface ReviewProps {
  quote: string;
  author: string;
  locationTitle: string;
  locationName: string;
}

const Review: React.FC<ReviewProps> = ({
  quote,
  author,
  locationTitle,
  locationName,
}) => {
  return (
    <div className="text-center w-[70%] mx-auto py-12 text-3xl font-extrabold bg-white">
      <h1>{`“${quote}”`}</h1>
      <p className="text-sm pt-8">{author}</p>
      <div className="h-[0.5px] w-full bg-[#FF7051] mt-16" />
      <div className="flex flex-row gap-4 items-center justify-center pt-12">
        <CiLocationOn className="h-[56px] w-[56px] text-[#FF7051]" />
        <div className="text-start">
          <p className="lg:text-2xl text-base">{locationTitle}</p>
          <p className="lg:text-2xl text-base text-[#FF7051] font-light">
            {locationName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
