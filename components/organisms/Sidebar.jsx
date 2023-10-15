import Link from "next/link";
import Divider from "../Divider";
import Image from "next/image";
import { GoHome } from 'react-icons/go'
import { PiSelectionBackground, PiNewspaperClipping, PiBrowsersLight } from 'react-icons/pi'

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

export default function Sidebar() {
  return (
    <div className="sticky flex items-center lg:flex-col">
      <div className="flex w-full items-center space-x-2 lg:flex-col lg:space-y-2">
        {/* will be replaced with images */}
        <Image alt="profile picture" src="/profile-picture.jpg" width={100} height={100} className="w-10 lg:w-28 rounded-full"/>
        <p className="font-medium text-lg lg:text-xl text-gray-100">Ganim Alqudhaifi</p>
      </div>
      <nav className="hidden w-full lg:block">
        <Divider/>
        <ul className="space-y-1">
          {
            navLinks.map((link, i) => (
                <li key={i}>
                <Link href={link.href}>
                  <div className="flex items-center space-x-2 p-2 text-gray-300 rounded hover:bg-zinc-800">
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
