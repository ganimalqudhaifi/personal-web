import Link from "next/link";
import Divider from "../Divider";
import Image from "next/image";

const navLinks = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Projects",
    href: "/projects"
  },
  {
    text: "About",
    href: "/about"
  },
  {
    text: "Reference",
    href: "/reference"
  },
]

export default function Sidebar() {
  return (
    <div className="sticky flex items-center lg:flex-col">
      <div className="flex lg:flex-col lg:items-center lg:space-y-2">
        {/* will be replaced with images */}
        <Image alt="profile picture" src="/profile-picture.jpeg" width={100} height={100} className="w-24 rounded-full"/>
        <p className="font-medium text-xl text-gray-100">Ganim Alqudhaifi</p>
      </div>
      <Divider/>
      <nav className="hidden w-full lg:block">
        <ul className="space-y-1">
          {
            navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  <div className="p-2 text-gray-300 rounded hover:bg-zinc-700">
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
