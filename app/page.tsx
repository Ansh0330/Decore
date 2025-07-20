"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import {
  Paintbrush,
  Sparkles,
  Gem,
  HeartHandshake,
  Home as HomeIcon,
  ScrollText,
  ArrowRight,
} from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Montserrat supports multiple weights
  display: "swap", // Optional: improves loading performance
});



const productCollections = [
  {
    title: "Canvas Textures",
    description:
      "Explore unique tactile dimensions and subtle artistry on our handcrafted canvases, perfect for modern and minimalist spaces. Each piece invites touch and contemplation.",
    imageUrl: "/Images/texturedCanvas.png", // Placeholder for Canvas
    link: "/products",
    buttonText: "Explore Canvas",
  },
  {
    title: "Lippan Art",
    description:
      "Discover the vibrant heritage of Kutch with our intricate Lippan artworks. Adorned with delicate mirrors and traditional mud relief, these pieces tell stories of culture and craftsmanship.",
    imageUrl: "/Images/lippanArt.jpg", // Placeholder for Lippan
    link: "/products",
    buttonText: "Explore Lippan",
  },
  {
    title: "Trinket Trays",
    description:
      "Organize your treasures with our elegant, handcrafted trinket trays. Blending functionality with aesthetic charm, they're perfect for jewelry, keys, or decorative accents.",
    imageUrl: "/Images/tray.png", // Placeholder for Trinket Tray
    link: "/products",
    buttonText: "Explore Trays",
  },
];

const bentoGridItems = [
  {
    title: "Artisanal Craftsmanship",
    description:
      "Each piece is lovingly handcrafted, bringing unique character and soul into your home.",
    tag: { text: "Handmade", bg: "bg-rose", textColor: "text-charcoal" }, // Text charcoal for better contrast on rose
    icon: <Paintbrush />,
    linkText: "Our Process",
    linkHref: "#",
  },
  {
    title: "Your Custom Vision",
    description:
      "From color palettes to intricate details, personalize your art to perfectly match your space.",
    tag: { text: "Personalized", bg: "bg-blue", textColor: "text-charcoal" }, // Text charcoal for better contrast on blue
    icon: <Sparkles />,
    linkText: "Start Customizing",
    linkHref: "/contact",
  },
  {
    title: "Premium Materials",
    description:
      "We source high-quality canvases, natural pigments, and durable resins for lasting beauty.",
    tag: { text: "Quality", bg: "bg-sage", textColor: "text-charcoal" }, // Text charcoal for better contrast on sage
    icon: <Gem />,
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Meet the Creator",
    description:
      "Discover the passion, inspiration, and story behind every unique artwork by our founder.",
    tag: { text: "Our Story", bg: "bg-clay", textColor: "text-charcoal" }, // Text charcoal for better contrast on clay
    icon: <HeartHandshake />,
    linkText: "Read Bio",
    linkHref: "/about",
  },
  {
    title: "Transform Your Space",
    description:
      "Our art pieces are designed to elevate interiors, adding warmth, texture, and a focal point.",
    tag: { text: "Decor", bg: "bg-peach", textColor: "text-linen" }, // Peach is darker, so linen text
    icon: <HomeIcon />,
    linkText: "See in Homes",
    linkHref: "/products",
  },
  {
    title: "Lippan's Rich Heritage",
    description:
      "Immerse yourself in the traditional mud-mirror art, crafted with intricate patterns and vibrant mirrors.",
    tag: {
      text: "Heritage Art",
      bg: "bg-dusty-lavender",
      textColor: "text-charcoal",
    }, // Dusty lavender is light, so charcoal text
    icon: <ScrollText />,
    linkText: "Explore Lippan",
    linkHref: "/products",
  },
];

export default function LandingPage() {
  const words = "Artistry Born from Passion.";
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: collectionsRef, inView: collectionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="min-h-screen bg-linen">
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
            src="./Images/image.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Our Collections Section  */}
      <div className="w-10/12 mx-auto mt-16 text-center">
        <h1
          ref={collectionsRef}
          className=" mx-auto text-charcoal font-family-self-modern font-bold text-4xl md:text-6xl mb-12 relative inline-block group"
        >
          Our Collections
          <span
            className={`
                            absolute -bottom-1 left-0 h-[5px] bg-peach transition-all duration-700 ease-out 
                            ${collectionsInView ? "w-full" : "w-0"} 
                        `}
          ></span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-4">
          {productCollections.map((product) => (
            <div
              key={product.title}
              className="card bg-parchment rounded-lg shadow-sm overflow-hidden"
            >
              <figure className="h-75">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-6 flex flex-col">
                <h2
                  className={`card-title text-charcoal text-xl font-semibold ${montserrat.className} mb-2`}
                >
                  {product.title}
                </h2>
                <p
                  className={`text-ash font-sans text-base leading-relaxed mb-4 text-justify`}
                >
                  {product.description}
                </p>
                <div className="card-actions justify-end mt-auto">
                  <Link
                    href={product.link}
                    className="bg-peach -mt-2 text-linen px-4 py-2 rounded-md font-sans font-semibold transition-colors duration-200 hover:bg-terracotta focus:outline-none focus:ring-2 focus:ring-peach focus:ring-opacity-50"
                  >
                    {product.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid  */}
      <div className="w-10/12 mx-auto mt-14 text-center">
        <h1
          ref={ref}
          className=" mx-auto text-charcoal font-family-self-modern font-bold text-4xl md:text-6xl mb-12 relative inline-block group"
        >
          Why De-Core?
          <span
            className={`
                            absolute -bottom-4 left-0 h-[5px] bg-peach transition-all duration-700 ease-out 
                            ${inView ? "w-full" : "w-0"} 
                        `}
          ></span>
        </h1>
        <p className="text-ash  mx-auto w-full md:w-3/4 text-center">
          Everything you need to experience the art of handmade, personalized
          creations.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoGridItems.map((item, index) => (
            <div
              key={index}
              className={`
                                flex flex-col py-8 px-6 gap-4
                                bg-parchment rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300
                            `}
              style={{ minHeight: "200px" }} // Consistent min-height for all, adjust as needed
            >
              <p
                className={`${item.tag.bg} ${item.tag.textColor} w-fit ${montserrat.className} text-sm px-3 py-1 rounded-md flex items-center gap-2`}
              >
                {item.icon &&
                  React.cloneElement(item.icon, { className: "h-3 w-3" })}
                <span>{item.tag.text}</span>
              </p>
              <h3 className="text-charcoal font-family-self-modern font-bold text-xl leading-tight">
                {item.title}
              </h3>
              <p className="text-ash font-sans text-base leading-relaxed">
                {item.description}
              </p>
              <Link
                href={item.linkHref}
                className="text-sm text-ash font-sans leading-relaxed transition-all duration-200 hover:text-peach cursor-pointer flex items-center gap-1 mt-auto"
              >
                {item.linkText} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
