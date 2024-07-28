import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../assets/Logo2.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-bold text-gray-900">FIND US ON</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex flex-row items-center gap-2">
                <div className="rounded-full p-2 bg-[#6132C6] text-white">
                  <FaFacebookF />
                </div>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Facebook
                </a>
              </li>

              <li className="flex flex-row items-center gap-2">
                <div className="rounded-full p-2 bg-[#6132C6] text-white">
                  <RiInstagramFill />
                </div>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Instagram
                </a>
              </li>
              <li className="flex flex-row items-center gap-2">
                <div className="rounded-full p-2 bg-[#6132C6] text-white">
                  <FaYoutube />
                </div>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Youtube
                </a>
              </li>

              <li className="flex flex-row items-center gap-2">
                <div className="rounded-full p-2 bg-[#6132C6] text-white">
                  <FaXTwitter />
                </div>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-900">OUR COMPANY</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-900">SHOP TESTS</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  MatriClan Test Kit
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  PatriClan Test Kit
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Family Celebration Bundle
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-900">LEARN</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Book a Speaker
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  African Ancestry TV
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Downloads
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Partnerships
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Press Release
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4 items-center justify-between">
          <Image src={Logo} alt="" />
          <p className="text-xs text-gray-500">
            &copy; 2024 African Ancestry, Inc. All rights reserved.
          </p>
          <div className="flex flex-row gap-2 text-xs text-gray-500">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
