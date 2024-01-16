import Link from "next/link";
import Image from "next/image";

import { BiLinkExternal } from 'react-icons/bi';
import { PiCertificate, PiCodeBold } from 'react-icons/pi';
import { SiJest, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiTypescript } from 'react-icons/si'

import Divider from "../components/Divider";
import Layout from "../components/Layout";
import certificateLists from '../data/certificateLists.json';

export default function Home() {
  return (
    <Layout activeIndex={0}>
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
              <div key={i} className="group/certificate relative flex justify-between items-center p-2 bg-zinc-600/5 border border-zinc-800/60 rounded shadow cursor-pointer duration-200 subpixel-antialiased hover:border-zinc-700/50 hover:scale-[1.02] before:content-[''] before:absolute before:right-0 before:inset-y-0 before:w-32 before:hover:bg-gradient-to-r before:from-transparent before:via-zinc-900/80 before:to-zinc-900">
                <div className="flex items-center space-x-3">
                  <Image alt={`${certificate.instance} logo`} src={`/logo/${certificate.instance}.png`} width={64} height={64} className="w-16 rounded shadow" priority/>
                  <div className="">
                    <p className="text-indigo-300 text-sm capitalize">{certificate.instance}</p>
                    <p className="mb-0.5 text-zinc-400">{certificate.title}</p>
                    <p className="text-zinc-500 text-sm">{certificate.date}</p>
                  </div>
                </div>
                <Link href={certificate.href} target="_blank"><BiLinkExternal className="hidden absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 mr-4 text-zinc-600 duration-300 hover:text-zinc-400 hover:scale-110 group-hover/certificate:block"/></Link>
              </div>
            ))
          }
        </div>
      </div>

      <Divider/>

      <div>
        <div className="flex items-center space-x-2 text-zinc-200"><PiCodeBold size={24}/><h2 className="text-xl ">Skills</h2></div>
        <p className="mt-2 mb-6 text-zinc-400">My Programing Skills</p>
        <div className="flex flex-wrap gap-2.5">
          <div className="flex items-center space-x-2 p-2.5 border border-zinc-800 rounded-full shadow">
            <Image src="/svg/reactjs.svg" alt="reactjs icon" width={30} height={30}/>
            <p className="text-sm text-zinc-500">React JS</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 border border-zinc-800 rounded-full shadow">
            <SiNextdotjs size={30}/>
            <p className="text-sm text-zinc-500">Next JS</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 border border-zinc-800 rounded-full shadow">
            <SiNodedotjs size={30} className="text-emerald-600"/>
            <p className="text-sm text-zinc-500">Node JS</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 border border-zinc-800 rounded-full shadow">
            <Image src="/logo/mongodb.png" alt="mongodb icon" width={30} height={30}/>
            <p className="text-sm text-zinc-500">Mongo DB</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 border border-zinc-800 rounded-full shadow">
            <SiTailwindcss size={30} className="text-[#38bdf8]"/>
            <p className="text-sm text-zinc-500">Tailwind CSS</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 border border-zinc-800 rounded-full shadow">
            <SiJest size={30} className="text-red-600"/>
            <p className="text-sm text-zinc-500">Jest</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 border border-zinc-800 rounded-full shadow">
            <Image src="/svg/firebase.svg" alt="firebase icon" width={30} height={30}/>
            <p className="text-sm text-zinc-500">Firebase</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 pl-3.5 border border-zinc-800 rounded-full shadow">
            <Image src="/svg/javascript.svg" alt="javascript icon" width={30} height={30}/>
            <p className="text-sm text-zinc-500">Javascript</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 pl-3.5 border border-zinc-800 rounded-full shadow">
            <Image src="/svg/html5.svg" alt="html5 icon" width={30} height={30}/>
            <p className="text-sm text-zinc-500">HTML5</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 pl-3.5 border border-zinc-800 rounded-full shadow">
            <Image src="/svg/css3.svg" alt="css3 icon" width={30} height={30}/>
            <p className="text-sm text-zinc-500">CSS3</p>
          </div>
          <div className="flex items-center space-x-2 p-2.5 pl-3.5 border border-zinc-800 rounded-full shadow">
            <SiTypescript size={30} className="text-[#2f74c0]"/>
            <p className="text-sm text-zinc-500">Typescript</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
