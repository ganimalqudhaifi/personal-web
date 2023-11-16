import Link from "next/link";
import Image from "next/image";
import { GoHome } from 'react-icons/go'
import { PiSelectionBackground, PiNewspaperClipping, PiBrowsersLight } from 'react-icons/pi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  {
    text: "Home",
    href: "/",
    Icon: GoHome
  },
  {
    text: "Projects",
    href: "/projects",
    Icon: PiBrowsersLight
  },
  {
    text: "About",
    href: "/about",
    Icon: PiNewspaperClipping
  },
  {
    text: "References",
    href: "/references",
    Icon: PiSelectionBackground
  },
]

interface SidebarProps {
  activeIndex: number,
  handleMenuOpen: any
}

export default function Sidebar({activeIndex, handleMenuOpen}: SidebarProps) {
  return (
    <div>
      <div className="p-4 relative flex justify-between items-center w-full bg-zinc-900 border-b border-zinc-800 md:p-6 lg:p-0 lg:border-0">
        <div className="flex items-center space-x-3 lg:flex-col lg:space-y-3 lg:space-x-0">
          <Image alt="profile picture" src="/profile-picture.jpg" width={100} height={100} className="w-10 lg:w-28 rounded-full" priority/>
          <p className="font-semibold tracking-wide text-lg lg:text-xl text-gray-100">Ganim Alqudhaifi</p>
        </div>
        <button className="p-1 text-white border rounded lg:hidden" onClick={handleMenuOpen}><RxHamburgerMenu/></button>
      </div>

      <nav className="absolute top-full -translate-x-full w-64 h-[calc(100vh-73px)] md:h-[calc(100vh-89px)] p-4 bg-zinc-900/95 duration-300 sm:w-72 lg:relative lg:translate-x-0 lg:w-full  lg:p-0 lg:block group-[.is-open]:block group-[.is-open]:translate-x-0 z-50">
        <div className="flex flex-col justify-between h-full lg:h-0">
          {/* pages-router */}
          <ul className="space-y-1 lg:order-last">
            {
              navLinks.map((link, i) => (
                  <li key={i}>
                  <Link href={link.href}>
                    <div className={`${activeIndex === i && 'bg-zinc-800'} flex items-center space-x-2 p-2 text-gray-300 rounded duration-300 hover:bg-zinc-800 hover:scale-105`}>
                      <link.Icon size={24}/>
                      <p>{link.text}</p>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>

          {/* divider */}
          <div className="hidden w-full my-5 border-t border-zinc-500 lg:block"/>

          {/* social-media */}
          <div className="flex justify-evenly space-x-3 mt-2 text-zinc-400 lg:order-first lg:justify-center">
            <Link href="https://www.linkedin.com/in/andi-muhammad-ganim-alqudhaifi" target="_blank" className="duration-300 hover:text-zinc-300">
              <FaLinkedin size={19} />
            </Link>
            <Link href="https://github.com/ganimalqudhaifi" target="_blank" className="duration-300 hover:text-zinc-300">
              <FaGithub size={19} />
            </Link>
            <Link href="https://www.instagram.com/ganimalqudhaifi" target="_blank" className="duration-300 hover:text-zinc-300">
              <FaInstagram size={19} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
