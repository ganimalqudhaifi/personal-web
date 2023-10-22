import { PiBookBookmark, PiChalkboard, PiLinkSimple } from "react-icons/pi";
import Divider from "../components/Divider";
import { PrimaryLayout } from "../components/layouts";
import Image from "next/image";
import Link from "next/link";

const courseLists = [
  {
    src: '/logo/zerotomastery.png',
    name: 'Zero to Mastery',
    href: 'https://zerotomastery.io/',
  },
  {
    src: '/logo/dicoding.png',
    name: 'Dicoding',
    href: 'https://www.dicoding.com/'
  },
  {
    src: '/logo/udemy.png',
    name: 'Udemy',
    href: 'https://www.udemy.com/'
  },
  {
    src: '/logo/w3schools.png',
    name: 'W3Schools',
    href: 'https://www.w3schools.com/'
  },
]

const uiLists = [
  {
    name: 'Color Palette - UI Colors',
    href: 'https://uicolors.app/'
  },
  {
    name: 'Color Palette - Color Hunt',
    href: 'https://colorhunt.co/'
  },
  {
    name: 'Icons - Icons8',
    href: 'https://icons8.com//'
  },
  {
    name: 'Images - Unsplash',
    href: 'https://unsplash.com/'
  },
  {
    name: 'Images - Pexels',
    href: 'https://www.pexels.com/'
  },
  {
    name: 'Tailwind Component - Headless UI',
    href: 'https://headlessui.com/'
  },
  {
    name: 'Tailwind Component - Flowbite',
    href: 'https://flowbite.com/'
  },
  {
    name: 'Tailwind Component - Daisy UI',
    href: 'https://daisyui.com/'
  },
  {
    name: 'API - Foursquare',
    href: 'https://location.foursquare.com/'
  },
]

export default function References() {
  return (
    <PrimaryLayout activeIndex={3}>
      <div>
        <h1 className="text-2xl font-bold mb-2">References</h1>
        <p className="text-zinc-400">Recomendation of discovered source that I used</p>
      </div>

      <Divider/>

      <div>
        <div className="flex items-center space-x-2 text-zinc-200"><PiBookBookmark size={24}/><h2 className="text-xl">Course</h2></div>
        <p className="mt-2 mb-4 text-zinc-400">Recomendation Course</p>
        <div className="text-zinc-400 space-y-3">
          {
            courseLists.map((course,i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-zinc-600/5 border border-zinc-800/60 rounded shadow">
                <div className="flex space-x-2 items-center">
                  <Image alt={`${course.name} logo`} src={course.src} width={48} height={48} className="w-12 rounded shadow" priority/>
                  <p>{course.name}</p>
                </div>
                <Link href={course.href} target="_blank" className="flex space-x-2 text-xl duration-300 hover:text-zinc-300">
                  <PiLinkSimple/>
                </Link>
              </div>
            ))
          }
        </div>
      </div>

      <Divider />

      <div>
        <div className="flex items-center space-x-2 text-zinc-200"><PiChalkboard size={24}/><h2 className="text-xl">UI</h2></div>
        <p className="mt-2 mb-4 text-zinc-400">Recomendation UI Resources</p>
        <div className="text-zinc-400 space-y-3">
          {
            uiLists.map((ui, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-zinc-600/5 border border-zinc-800/60 rounded shadow">
                <p className="text-[15px] sm:text-base">{ui.name}</p>
                <Link href={ui.href} target="_blank" className="flex space-x-2 text-xl duration-300 hover:text-zinc-300"><PiLinkSimple/></Link>
              </div>
            ))
          }
        </div>
      </div>
    </PrimaryLayout>
  )
}