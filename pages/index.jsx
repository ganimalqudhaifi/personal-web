import Image from "next/image";
import Divider from "../components/Divider";
import { PrimaryLayout } from "../components/layouts";
import { PiCertificate, PiCodeBold } from 'react-icons/pi';
import { SiJest, SiTailwindcss, SiNextdotjs, SiNodedotjs } from 'react-icons/si'
import { BiLinkExternal } from 'react-icons/bi';
import Link from "next/link";

const certificateLists = [
  {
    instance: 'udemy',
    title: 'Testing React with Jest and React Testing Library',
    date: 'Feb 6, 2023',
    href: 'https://www.udemy.com/certificate/UC-4fef95b4-f7d5-4ee7-8180-a3033ab96352/'
  },
  {
    instance: 'dicoding',
    title: 'Belajar Membuat Aplikasi Web Dengan React',
    date: 'Aug 5, 2022',
    href: 'https://www.dicoding.com/certificates/2VX31L68VZYQ'
  },
  {
    instance: 'dicoding',
    title: 'Belajar Membuat Front-End Web Untuk Pemula',
    date: 'Jul 24, 2022',
    href: 'https://www.dicoding.com/certificates/EYX42QO6WZDL'
  },
  {
    instance: 'dicoding',
    title: 'Belajar Dasar Pemrograman Javascript',
    date: 'Jul 16, 2022',
    href: 'https://www.dicoding.com/certificates/L4PQ42W4OXO1'
  },
  {
    instance: 'dicoding',
    title: 'Belajar Dasar Pemrograman Web',
    date: 'Jul 11, 2022',
    href: 'https://www.dicoding.com/certificates/1OP8622NVXQK'
  },
]

export default function Home() {
  return (
    <PrimaryLayout activeIndex={0}>
      <div>
        <h2 className="mb-2 text-3xl font-extrabold">Hi, I&apos;m Alqi <span className="inline-block animate-wiggle">👋</span></h2>
        <ul className="mb-6 text-zinc-400 list-disc list-inside lg:flex lg:space-x-8">
          <li>Front-End Developer</li>
          <li>Based in Depok <span className="text-sm">ID</span></li>
        </ul>
        <p className="text-zinc-300">I have a strong passion for coding, with a keen focus on architectural design, maintainability, and the art of crafting clean code. I am dedicated to developing websites that not only function efficiently but are also designed for ease of comprehension and long-term maintenance.</p>
        <p className="text-zinc-300 mt-4">My primary objective is to engineer elegant solutions that tackle intricate problems, while upholding a superior standard of code quality and readability.</p>
      </div>
      
      <Divider/>

      <div>
        <div className="flex items-center space-x-2 text-zinc-200"><PiCertificate size={24}/><h2 className="text-xl ">Certificates</h2></div>
        <p className="mt-2 mb-4 text-zinc-400">My Course Completion Certificates</p>
        <div className="space-y-4">
          {
            certificateLists.map((certificate, i) => (
              <div key={i} className="group/certificate flex justify-between items-center p-2 bg-zinc-600/5 border border-zinc-800/60 rounded shadow cursor-pointer duration-200 subpixel-antialiased hover:border-zinc-700/50 hover:scale-[1.02]">
                <div className="flex items-center space-x-3">
                  <Image alt={`${certificate.instance} logo`} src={`/logo/${certificate.instance}.png`} width={64} height={64} className="w-16 rounded shadow" priority/>
                  <div className="">
                    <p className="text-indigo-300 text-sm capitalize">{certificate.instance}</p>
                    <p className="mb-0.5 text-zinc-400">{certificate.title}</p>
                    <p className="text-zinc-500 text-sm">{certificate.date}</p>
                  </div>
                </div>
                <Link href={certificate.href} target="_blank"><BiLinkExternal className="hidden w-6 h-6 mr-4 text-zinc-600 duration-300 hover:text-zinc-400 hover:scale-110 group-hover/certificate:block"/></Link>
              </div>
            ))
          }
        </div>
      </div>

      <Divider/>

      <div>
        <div className="flex items-center space-x-2 text-zinc-200"><PiCodeBold size={24}/><h2 className="text-xl ">Skills</h2></div>
        <p className="mt-2 mb-6 text-zinc-400">My Programing Skills</p>
        <div className="flex flex-wrap gap-6">
          <Image src="/svg/reactjs.svg" alt="reactjs icon" width={36} height={36}/>
          <SiNextdotjs size={36}/>
          <SiNodedotjs size={36} className="text-emerald-600"/>
          <Image src="/logo/mongodb.png" alt="firebase icon" width={36} height={36}/>
          <SiTailwindcss size={36} className="text-[#38bdf8]"/>
          <SiJest size={36} className="text-red-600"/>
          <Image src="/svg/firebase.svg" alt="firebase icon" width={36} height={36}/>
          <Image src="/svg/javascript.svg" alt="javascript icon" width={36} height={36}/>
          <Image src="/svg/html5.svg" alt="html5 icon" width={36} height={36}/>
          <Image src="/svg/css3.svg" alt="css3 icon" width={36} height={36}/>
        </div>
      </div>
    </PrimaryLayout>
  );
}
