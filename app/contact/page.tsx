"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Montserrat } from "next/font/google";
import SplineComponent from "@/components/Spline";
import { PinContainer } from "@/components/ui/3d-pin";
import { Mail, Instagram, Phone } from "lucide-react";


const cardInfo = [
  {
    pinContainerTitle: "Shoot us an email",
    linkHref: "mailto:info@decore.com",
    cardIconName: "Mail",
    iconBgColor: "bg-clay",
    iconTextColor: "text-peach",
    cardTitle: "Email Us",
    cardDescription:
      "For inquiries and collaborations. We typically reply within 24 hours.",
    buttonText: "Send an Email",
  },
  {
    pinContainerTitle: "WhatsApp!!!",
    linkHref: "https://wa.me/+919953850241",
    cardIconName: "Phone",
    iconBgColor: "bg-sage",
    iconTextColor: "text-blue",
    cardTitle: "Chat on WhatsApp",
    cardDescription: "Quick replies for custom orders and urgent questions.",
    buttonText: "Chat Now",
  },
  {
    pinContainerTitle: "Connect on Insta",
    linkHref: "https://www.instagram.com/de_corevas/",
    cardIconName: "Instagram",
    iconBgColor: "bg-dusty-lavender",
    iconTextColor: "text-terracotta",
    cardTitle: "DM on Instagram",
    cardDescription: "Share your inspiration or browse our latest works.",
    buttonText: "Visit Profile",
  },
];

const IconComponentMap = {
  Mail: Mail,
  Phone: Phone,
  Instagram: Instagram,
};

const ContactPage = () => {
  const { ref: connectOnlineRef, inView: connectOnlineInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="min-h-screen bg-linen">
      {/* Hero Section  */}
      <section className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center md:items-start py-12 md:py-20 gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-charcoal font-family-self-modern font-bold text-5xl md:text-6xl leading-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-ash font-sans text-lg leading-relaxed max-w-xl">
            We&apos;d love to hear from you! Whether it&apos;s a custom order, a question
            about our art, or just to say hello, feel free to reach out.
          </p>
        </div>
        <div className="min-w-fit min-h-fit h-[300px] sm:h-[350px] md:h-[400px] lg:h-[430px] relative overflow-hidden order-2 md:order-2 -mt-18">
          <SplineComponent />
        </div>
      </section>

      {/* Connect online section  */}
      <section className="w-10/12 mx-auto py-16 text-center -mt-16">
        <h2
          ref={connectOnlineRef}
          className={`text-charcoal font-family-self-modern font-bold text-4xl md:text-5xl mb-12 relative inline-block group`}
        >
          Connect Online
          <span
            className={`
                            absolute -bottom-1 left-0 h-[5px] bg-peach transition-all duration-700 ease-out 
                            ${connectOnlineInView ? "w-full" : "w-0"} 
                        `}
          ></span>
        </h2>
        <div className="flex w-full flex-col sm:flex-row justify-center gap-8 md:gap-12 mt-8">
          {cardInfo.map((card, index) => {
            const IconToRender =
              IconComponentMap[
                card.cardIconName as keyof typeof IconComponentMap
              ];

            return (
              <PinContainer
                title={card.pinContainerTitle}
                href={card.linkHref}
                key={index}
                containerClassName="w-full sm:w-1/2 lg:w-1/3"
              >
                <div className="w-full min-w-64 max-w-sm mx-auto">
                  <div className="flex flex-col items-center justify-center w-full h-full py-4 space-y-4">
                    <div
                      className={`text-${card.iconTextColor} ${card.iconBgColor} p-2 rounded-full w-16 h-16 flex items-center justify-center`}
                    >
                      {IconToRender && <IconToRender size={30} />}
                    </div>
                    <h1 className="text-white font-bold text-xl">{card.cardTitle}</h1>
                    <p className="text-slate-400">{card.cardDescription}</p>
                    <button className="bg-peach text-linen px-4 py-2 rounded-lg mt-2">
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              </PinContainer>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
