import Link from "next/link";
import Image from "next/image";
import { GoHome } from 'react-icons/go'
import { PiSelectionBackground, PiNewspaperClipping, PiBrowsersLight } from 'react-icons/pi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

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
    text: "Reference",
    href: "/reference",
    Icon: PiSelectionBackground
  },
]

export default function Sidebar({activeIndex}) {
  return (
    <div className="sticky flex items-center lg:flex-col">
      <div className="flex w-full items-center space-x-4 lg:flex-col lg:space-y-3">
        {/* will be replaced with images */}
        <Image alt="profile picture" src="/profile-picture.jpg" width={100} height={100} className="w-10 lg:w-28 rounded-full"/>
        <p className="font-semibold tracking-wide text-lg lg:text-xl text-gray-100">Ganim Alqudhaifi</p>
      </div>
      <div className="hidden lg:flex space-x-3 mt-2 text-zinc-400">
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
      <nav className="hidden w-full lg:block">
        <div className="w-full my-5 border-t border-zinc-500"/>
        <ul className="space-y-1">
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
      </nav>
    </div>
  );
}
