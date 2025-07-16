"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

export default function Home() {
  const words = "Artistry Born from Passion.";
  return (
    <div>
      {/* Hero Section */}
      <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-evenly items-center mt-8 md:mt-14 gap-8">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-start space-y-10 w-full md:w-[60%] order-2 md:order-1 items-center md:items-start text-center md:text-left">
          <div className="flex flex-col space-y-3">
            <TextGenerateEffect words={words} duration={0.5} />
            <p className="text-ash w-full md:w-[82%] text-[18px] tracking-wide leading-7">
              Immerse yourself in a world of bespoke handmade art. Explore our
              curated collections of textured canvases, vibrant Lippan designs,
              and customizable trinket trays — crafted with passion, just for
              your home.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center md:justify-start">
            <Link
              href="/products"
              className="bg-peach text-linen px-6 py-3 font-family-self-modern font-semibold tracking-wide rounded-lg transition-colors duration-200 hover:bg-terracotta focus:outline-none focus:ring-2 focus:ring-peach focus:ring-opacity-50 inline-block text-center whitespace-nowrap"
            >
              Explore Our Art
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-peach text-peach px-6 py-3 font-family-self-modern font-semibold tracking-wide rounded-lg transition-colors duration-200 hover:bg-peach hover:text-linen focus:outline-none focus:ring-2 focus:ring-peach focus:ring-opacity-50 inline-block text-center whitespace-nowrap"
            >
              Customize Your Piece
            </Link>
          </div>
        </div>
        {/* Right Column - Image */}
        <div className="w-full md:w-[40%] mt-8 md:mt-0 order-1 md:order-2 flex justify-center items-center">
          <img
            src="./Images/logo.jpeg"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Our Collections Section  */}
      
    </div>
  );
}
