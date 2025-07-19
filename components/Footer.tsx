import React from "react";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";


import { Great_Vibes } from "next/font/google";
import { Instagram, Mail } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // Great Vibes only has weight 400
  display: "swap", // Optional: improves loading performance
});

const Footer = () => {
  return (
    <footer className="bg-clay text-charcoal py-12 md:py-16 mt-28">
      <div className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <Link
            href="/"
            className={`font-family-self-modern italic ${greatVibes.className} font-bold text-5xl leading-none text-charcoal`}
          >
            De Core
          </Link>
          <p className="font-sans text-ash text-sm md:text-base leading-tight mt-2 max-w-xs">
            Artistry Handcrafted, Just for You.
          </p>
          <p className="font-sans text-ash text-sm mt-4">
            &copy; {new Date().getFullYear()} De-Core. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4">
          <h3 className="font-sans text-lg font-semibold text-charcoal mb-2">
            Quick Links
          </h3>
          <Link
            href="/"
            className="font-sans text-ash hover:text-peach transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-sans text-ash hover:text-peach transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="font-sans text-ash hover:text-peach transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="font-sans text-ash hover:text-peach transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4">
          <h3 className="font-sans text-lg font-semibold text-charcoal mb-2">
            Connect
          </h3>
          <Link
            href="mailto:info@decore.com"
            className="font-sans text-ash hover:text-peach transition-colors duration-200 flex items-center gap-2"
          >
            <Mail className="h-5 w-5 text-ash" /> info@decore.com
          </Link>
          <div className="flex gap-4 mt-2">
            <Link
              href="https://wa.me/+919953850241"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-ash hover:text-peach transition-colors duration-200 flex items-center gap-2"
            >
              <IoLogoWhatsapp fontSize={24} />{" "}
            </Link>
            <Link
              href="https://www.instagram.com/de_corevas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ash hover:text-peach transition-colors duration-200"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://pinterest.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ash hover:text-peach transition-colors duration-200"
            >
              <FaPinterest className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-ash/30 text-center">
        <p className="font-sans text-ash flex items-center justify-center gap-1">
          Made with ❤️ By{" "}
          <Link
            href="https://twitter.com/Anshdotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ash hover:text-peach transition-colors duration-200 flex items-center gap-1"
          >
            Ansh <FaXTwitter className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
