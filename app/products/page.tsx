"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { lippanData } from "@/data/productsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const CARD_HEIGHT_MOBILE = 400; // px, mobile card height
const CARD_HEIGHT_DESKTOP = 500; // px, desktop card height
const IMG_HEIGHT_MOBILE = 160; // px, image on mobile
const IMG_HEIGHT_DESKTOP = 220; // px, image on desktop

const Page = () => {
  const { ref: lippanRef, inView: lippanInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen bg-linen w-full px-2 md:px-6 flex flex-col items-center">
      {/* Heading Section */}
      <section className="w-full max-w-screen-lg py-10 flex flex-col items-center">
        <h1 className="text-charcoal font-family-self-modern font-bold text-3xl md:text-5xl mb-6 md:mb-8 text-center">
          Discover Our Artistry
        </h1>
        <p className="text-ash font-sans text-base md:text-lg max-w-4xl mx-auto mt-4 md:mt-6 mb-8 md:mb-12 leading-relaxed text-center">
          Every piece in our collection is a testament to the art of making by
          hand. Explore our world of textures, colors, and unique forms,
          each curated to bring a touch of handcrafted beauty to your space.
        </p>
      </section>

      {/* Lippan Art Section */}
      <section className="w-full max-w-screen-xl flex flex-col items-center">
        <h2
          ref={lippanRef}
          className={`text-charcoal ${montserrat.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 md:mb-8 font-bold relative`}
        >
          <span className="relative inline-block pb-2">
            Lippan Art
            <span
              className={`
                absolute -bottom-1 left-0 h-[3px] bg-peach rounded transition-all duration-700 ease-out
                ${lippanInView ? "w-full" : "w-0"}
              `}
            />
          </span>
        </h2>
        <p className="text-ash font-sans text-base md:text-lg max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed text-center">
          Lippan art, a traditional craft from the Kutch region of India, is a
          unique blend of clay and mirror work. Each piece is handcrafted with
          intricate designs, reflecting the rich cultural heritage and artistry
          of the artisans.
        </p>

        {/* Carousel */}
        <div className="w-full">
          <Carousel
            className="w-full p-4"
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,   // <-- key: allow resume
                stopOnMouseEnter: true, // <-- key: pause on hover

              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {lippanData.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="
                    px-3 
                    w-full sm:w-1/2 md:w-1/3 
                    flex-shrink-0 
                    sm:basis-1/2 md:basis-1/3
                    cursor-pointer
                  "
                  style={{ maxWidth: 360 }}
                >
                  <div className="p-1 h-full">
                    <div
                      className={`
                        bg-parchment border border-clay rounded-lg shadow-md hover:shadow-lg 
                        transition-shadow duration-200 overflow-hidden flex flex-col
                        h-[${CARD_HEIGHT_MOBILE}px] md:h-[${CARD_HEIGHT_DESKTOP}px]
                      `}
                      style={{
                        height: `clamp(${CARD_HEIGHT_MOBILE}px, 40vw, ${CARD_HEIGHT_DESKTOP}px)`,
                      }}
                    >
                      {/* Product Image */}
                      <div
                        className={`relative w-full overflow-hidden`}
                        style={{
                          height: `clamp(${IMG_HEIGHT_MOBILE}px, 20vw, ${IMG_HEIGHT_DESKTOP}px)`,
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      {/* Card Body */}
                      <div className="p-4 md:p-5 flex flex-col flex-1">
                        <h3 className="font-sans text-base md:text-lg font-semibold text-charcoal mb-1">
                          {product.title}
                        </h3>
                        <p className="font-sans text-xs md:text-sm text-ash mb-2">
                          Size: {product.size}
                        </p>
                        <p className="font-sans text-xs md:text-sm text-ash leading-relaxed line-clamp-3 mb-2 flex-1">
                          {product.description}
                        </p>
                        {/* Space for CTA if needed */}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

    </div>
  );
};

export default Page;
