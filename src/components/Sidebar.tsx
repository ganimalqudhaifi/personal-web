"use client";

import CustomImage from "./custom-image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import {
  PiBrowsersLight,
  PiNewspaperClipping,
  PiSelectionBackground,
} from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  {
    text: "Home",
    href: "/",
    Icon: GoHome,
  },
  {
    text: "Projects",
    href: "/projects",
    Icon: PiBrowsersLight,
  },
  {
    text: "About",
    href: "/about",
    Icon: PiNewspaperClipping,
  },
  {
    text: "References",
    href: "/references",
    Icon: PiSelectionBackground,
  },
];

type SidebarProps = {
  handleMenuOpen: () => void;
};

export default function Sidebar({ handleMenuOpen }: SidebarProps) {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  return (
    <div>
      <div className="relative flex w-full items-center justify-between border-b border-zinc-800 bg-zinc-900 p-4 md:p-6 lg:border-0 lg:p-0">
        <div className="flex items-center space-x-3 lg:flex-col lg:space-y-3 lg:space-x-0">
          <CustomImage
            src="/profile-picture.jpg"
            alt="profile picture"
            width={100}
            height={100}
            className="w-10 rounded-full lg:w-28"
          />
          <p className="text-lg font-semibold tracking-wide text-gray-100 lg:text-xl">
            Ganim Alqudhaifi
          </p>
        </div>
        <button
          className="rounded border p-1 text-white lg:hidden"
          onClick={handleMenuOpen}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      <nav className="absolute top-full z-50 h-[calc(100vh-73px)] w-64 -translate-x-full bg-zinc-900/95 p-4 duration-300 group-[.is-open]:block group-[.is-open]:translate-x-0 sm:w-72 md:h-[calc(100vh-89px)] lg:relative lg:block lg:w-full lg:translate-x-0 lg:p-0">
        <div className="flex h-full flex-col justify-between lg:h-0">
          {/* navigation-page */}
          <ul className="space-y-1 lg:order-last">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  <div
                    className={`${activePage === link.href && "bg-zinc-800"} flex items-center space-x-2 rounded p-2 text-gray-300 duration-300 hover:scale-105 hover:bg-zinc-800`}
                  >
                    <link.Icon size={24} />
                    <p>{link.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* divider */}
          <div className="my-5 hidden w-full border-t border-zinc-500 lg:block" />

          {/* social-media */}
          <div className="mt-2 flex justify-evenly space-x-3 text-zinc-400 lg:order-first lg:justify-center">
            <Link
              href="https://www.linkedin.com/in/andi-muhammad-ganim-alqudhaifi"
              target="_blank"
              className="duration-300 hover:text-zinc-300"
            >
              <FaLinkedin size={19} />
            </Link>
            <Link
              href="https://github.com/ganimalqudhaifi"
              target="_blank"
              className="duration-300 hover:text-zinc-300"
            >
              <FaGithub size={19} />
            </Link>
            <Link
              href="https://www.instagram.com/ganimalqudhaifi"
              target="_blank"
              className="duration-300 hover:text-zinc-300"
            >
              <FaInstagram size={19} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
