"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const founders = [
  {
    id: 1,
    name: "Vanshika",
    designation: "Chief Artisan & Creative Lead",
    description:
      "Vanshika is the creative soul behind Decore, bringing the brand’s vision to life with her exceptional artistry and dedication. From designing intricate lip and art elements to crafting every piece with a personal touch, she’s the heart of Decore’s aesthetic. Her eye for detail, steady hands, and passion for visual expression shine through in every product we create.",
    image: "/Images/aboutPage/Vanshika.png",
  },
  {
    id: 2,
    name: "Sia",
    designation: "Operations Support Coordinator",
    description:
      "Sia is an important part of the Decore team, always showing up with support, positivity, and belief in our vision. While she isn’t directly involved in the creative or technical side, her presence and encouragement constantly uplift the team. Her energy and trust keep us grounded and motivated throughout our journey.",
    image: "/Images/aboutPage/Sia.png",
  },
  {
    id: 3,
    name: "Agrima",
    designation: "Head of Operations & Brand Development",
    description:
      "Agrima is the strategic mind behind Decore, making sure everything runs smoothly behind the scenes. She oversees the website operations, carefully curates the pricing of each product and prototype, and ensures that everything aligns with the brand’s value and vision. Her sharp sense of aesthetics and smart planning make her an essential part of the design process, always offering creative input and practical solutions.",
    image: "/Images/aboutPage/Agrima.png",
  },
];
const storyPoints = [
  {
    id: 1,
    title: "The Seed of Inspiration",
    description:
      "De Core began with a deep appreciation for the beauty of handmade crafts and a desire to bring authentic artistry into modern living spaces. It was born from a passion for textures, colors, and the stories they tell.",
    image: "/Images/aboutPage/inspiration.jpg",
  },
  {
    id: 2,
    title: "Mastering the Craft",
    description:
      "Our journey led us to explore various traditional techniques, from the intricate mud-mirror work of Lippan to the tactile depth of textured canvases. Each craft was mastered with dedication and respect for its heritage.",
    image: "/Images/aboutPage/crafting.jpg",
  },
  {
    id: 3,
    title: "Beyond Art: Functional Elegance",
    description:
      "We expanded our vision beyond wall art to include functional pieces like custom trinket trays, believing that everyday objects can also be works of art, blending utility with aesthetic charm.",
    image: "/Images/aboutPage/elegance.webp",
  },
  {
    id: 4,
    title: "A Commitment to You",
    description:
      "At the heart of De Core is our commitment to personalization. We empower you to co-create, ensuring each piece is not just beautiful, but a true reflection of your style and personality.",
    image: "/Images/aboutPage/personalisation.jpg",
  },
];

const AboutPage = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen bg-linen w-11/12 sm:w-10/12 mx-auto px-4 sm:px-6">
      {/* Our Story Section */}
      <section className="w-full mt-8">
        <div className="text-center">
          <h1 className="text-charcoal font-family-self-modern font-bold tracking-wide text-4xl sm:text-5xl md:text-6xl mb-4">
            Our Story
          </h1>
          <p className="text-ash font-sans text-base sm:text-lg max-w-4xl mx-auto mb-12 leading-relaxed">
            De Core is a celebration of artistry and individuality, bringing
            handcrafted beauty into your home.
            <br /> Discover the journey that shaped our passion.
          </p>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <TracingBeam className="px-2 hidden sm:block sm:px-6">
            <div className="mx-auto py-10">
              {storyPoints.map((point, index) => (
                <div
                  key={point.id}
                  className={`mb-20 flex flex-col ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  } md:items-start items-center gap-8 text-center md:text-left`}
                >
                  {point.image && (
                    <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg border border-clay">
                      <Image
                        src={point.image}
                        alt={point.title}
                        width={1200}
                        height={800}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                  )}
                  <div className="w-full md:w-1/2 flex flex-col space-y-6">
                    <h3
                      className={`text-charcoal ${montserrat.className} text-2xl sm:text-3xl font-bold`}
                    >
                      {point.title}
                    </h3>
                    <p className="text-ash font-sans text-sm sm:text-base leading-relaxed text-justify">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 text-center">
        <h1
          ref={headingRef}
          className="text-charcoal font-family-self-modern font-bold text-4xl sm:text-5xl md:text-6xl mb-12 relative inline-block"
        >
          Meet Our Founders
          <span
            className={`
              absolute -bottom-1 left-0 h-[5px] bg-peach transition-all duration-700 ease-out
              ${headingInView ? "w-full" : "w-0"}
            `}
          ></span>
        </h1>
        <p className="text-ash font-sans text-base sm:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Get to know the passionate individuals whose dedication and vision
          bring the world of De Core to life.
        </p>

        <div className="flex flex-wrap justify-center mb-10">
          <AnimatedTooltip items={founders} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-4">
          <div className="mx-auto py-10 sm:py-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`mb-20 last:mb-0 group flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10`}
              >
                <div className="w-full sm:w-96 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#d6bfaf]/30 bg-gradient-to-br from-[#f5eee7] to-[#ead3c2] p-1.5 transition-transform duration-500 group-hover:scale-105">
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={1200}
                        height={800}
                        className="object-fill w-full h-64 sm:h-80 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#3a3a3a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="flex-1 space-y-6 text-center lg:text-left max-w-2xl px-4">
                  <div className="space-y-3">
                    <h3
                      className={`text-[#3a3a3a] ${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-bold`}
                    >
                      {founder.name}
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#d68c68] via-[#b5654b] to-transparent opacity-30 rounded-full"></div>
                    <p className="text-[#7a7a7a] font-sans text-base sm:text-lg leading-relaxed text-justify lg:text-left pl-4 relative">
                      <span className="absolute -left-2 -top-2 text-4xl text-[#d68c68]/20 font-serif">
                        &quot;
                      </span>
                      {founder.description}
                      <span className="absolute -bottom-4 right-0 text-4xl text-[#d68c68]/20 font-serif">
                        &quot;
                      </span>
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f5eee7] to-[#ead3c2] border border-[#d6bfaf]/40">
                      <div className="w-2 h-2 rounded-full bg-[#d68c68] animate-pulse"></div>
                      <span className="text-[#3a3a3a] text-sm font-medium">
                        Founder & Visionary
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Line */}
      <section className="py-12 md:py-16 text-center">
        <p className="text-charcoal font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Thank you for getting to know us. We can&apos;t wait to create
          something beautiful with you.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
