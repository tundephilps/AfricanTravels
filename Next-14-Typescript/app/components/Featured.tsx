// components/Featured.tsx
"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Define types for product and tab data
interface Product {
  title: string;
  description: string;
  note: string;
  image: string | StaticImageData; // Allow string for dynamic image paths
  price: string;
  reviews: number;
  stars: number;
  verified: boolean;
}

interface TabData {
  label: string;
  products: Product[];
}

interface FeaturedProps {
  tabs: TabData[];
  title: string;
}

const Featured: React.FC<FeaturedProps> = ({ tabs, title }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl lg:text-[56px] font-extrabold title-font text-[#1D1D1F]">
            {title}
          </h1>
        </div>
        <div className="mx-auto flex lg:flex-row flex-wrap gap-3 justify-between lg:w-[70%] cursor-pointer">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`mr-4 px-4 py-2 cursor-pointer rounded ${
                activeTab === index ? "bg-[#FF7051]" : "bg-[#F4F0FF]"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <p
                className={`lg:text-base text-xs ${
                  activeTab === index ? "text-white" : "text-black"
                }`}
              >
                {tab.label}
              </p>
            </div>
          ))}
        </div>

        <div className="py-3 grid lg:grid-cols-3 grid-cols-1">
          {tabs[activeTab].products.map((product, index) => (
            <div className="" key={index}>
              <div className="lg:p-4 p-0 w-full">
                <div className="flex rounded-lg h-full items-center p-8 flex-col gap-3">
                  <p className="lg:text-[24px] font-bold">{product.title}</p>
                  <p className="lg:text-[15px] font-bold">
                    {product.description}
                  </p>
                  <p className="text-[#682ACE]">{product.note}</p>
                  <Image
                    src={product.image} // Image URL as string
                    className="p-4"
                    alt={product.title}
                    width={400} // Specify width and height to prevent layout shift
                    height={300}
                  />
                  <h1>{product.price}</h1>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-yellow-500 flex flex-row">
                      {[...Array(product.stars)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-[#211952]">{product.reviews} Reviews</p>
                    {product.verified && (
                      <MdVerified className="text-green-700" />
                    )}
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="px-7 py-3 w-full bg-[#682ACE] text-xs lg:text-base whitespace-nowrap text-gray-200 text-center rounded-md block sm:w-auto">
                      BOOK NOW
                    </div>
                    <div className="px-7 py-3 w-full bg-white text-[#682ACE] text-xs lg:text-base whitespace-nowrap border border-[#682ACE] text-center rounded-md block sm:w-auto">
                      LEARN MORE
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs">
                      Starting at $66/mo or 0% APR with Affirm.
                    </p>
                    <p className="text-[#682ACE]">Prequalify Now</p>
                  </div>
                </div>
              </div>
              {/* Add more product cards as needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
