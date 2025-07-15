"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { useState } from "react";

function Nav() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full mt-4">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="text-charcoal font-medium" />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              className="flex items-center justify-center gap-2 bg-peach text-white"
              href="https://wa.me/+919953850241"
            >
              {" "}
              WhatsApp <IoLogoWhatsapp fontSize={20} />{" "}
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="flex items-center justify-center gap-2"
              href="https://www.instagram.com/de_corevas/"
            >
              Instagram <FaSquareInstagram fontSize={20} />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-charcoal hover:text-ash"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                href="https://wa.me/+919953850241"
                className="w-full flex items-center justify-center gap-2 bg-peach text-white"
              >
                WhatsApp <IoLogoWhatsapp fontSize={20} />
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full flex items-center justify-center gap-2"
                href="https://www.instagram.com/de_corevas/"
              >
                Instagram <FaSquareInstagram fontSize={20} />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default Nav;
