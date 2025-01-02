import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { PiCertificate, PiCodeBold } from "react-icons/pi";

import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import IconCSS from "@/components/icons/IconCSS";
import IconFirebase from "@/components/icons/IconFirebase";
import IconHTML from "@/components/icons/IconHTML";
import IconJavascript from "@/components/icons/IconJavascript";
import IconJest from "@/components/icons/IconJest";
import IconMongoDB from "@/components/icons/IconMongoDB";
import IconNextJS from "@/components/icons/IconNextJS";
import IconNodeJS from "@/components/icons/IconNodeJS";
import IconReactJS from "@/components/icons/IconReactJS";
import IconTailwindCSS from "@/components/icons/IconTailwindCSS";
import IconTypescript from "@/components/icons/IconTypeScript";
import IconVueJS from "@/components/icons/IconVueJS";
import certificateLists from "@/data/certificateLists.json";

export default function Home() {
  return (
    <Layout>
      <div>
        <h2 className="mb-2 text-3xl font-extrabold">
          Hi, I&apos;m Alqi{" "}
          <span className="inline-block animate-wiggle">👋</span>
        </h2>
        <ul className="mb-6 list-inside list-disc text-zinc-400 lg:flex lg:space-x-8">
          <li>Front-End Developer</li>
          <li>
            Based in Depok <span className="text-sm">ID</span>
          </li>
        </ul>
        <p className="text-zinc-300">
          I have a strong passion for coding, with a keen focus on architectural
          design, maintainability, and the art of crafting clean code. I am
          dedicated to developing websites that not only function efficiently
          but are also designed for ease of comprehension and long-term
          maintenance.
        </p>
        <p className="mt-4 text-zinc-300">
          My primary objective is to engineer elegant solutions that tackle
          intricate problems, while upholding a superior standard of code
          quality and readability.
        </p>
      </div>

      <Divider />

      <div>
        <div className="flex items-center space-x-2 text-zinc-200">
          <PiCertificate size={24} />
          <h2 className="text-xl">Certificates</h2>
        </div>
        <p className="mt-2 mb-4 text-zinc-400">
          My Course Completion Certificates
        </p>
        <div className="space-y-4">
          {certificateLists.map((certificate, i) => (
            <div
              key={i}
              className="group/certificate relative flex cursor-pointer items-center justify-between rounded border border-zinc-800/60 bg-zinc-600/5 p-2 subpixel-antialiased shadow duration-200 before:absolute before:inset-y-0 before:right-0 before:w-32 before:from-transparent before:via-zinc-900/80 before:to-zinc-900 before:content-[''] hover:scale-[1.02] hover:border-zinc-700/50 before:hover:bg-gradient-to-r"
            >
              <div className="flex items-center space-x-3">
                <Image
                  alt={`${certificate.instance} logo`}
                  src={`/logo/${certificate.instance}.png`}
                  width={64}
                  height={64}
                  className="w-16 rounded shadow"
                  priority
                />
                <div className="">
                  <p className="text-sm capitalize text-indigo-300">
                    {certificate.instance}
                  </p>
                  <p className="mb-0.5 text-zinc-400">{certificate.title}</p>
                  <p className="text-sm text-zinc-500">{certificate.date}</p>
                </div>
              </div>
              <Link href={certificate.href} target="_blank">
                <BiLinkExternal className="absolute right-0 top-1/2 mr-4 hidden h-6 w-6 -translate-y-1/2 text-zinc-600 duration-300 hover:scale-110 hover:text-zinc-400 group-hover/certificate:block" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      <div>
        <div className="flex items-center space-x-2 text-zinc-200">
          <PiCodeBold size={24} />
          <h2 className="text-xl">Skills</h2>
        </div>
        <p className="mt-2 mb-6 text-zinc-400">My Programing Skills</p>
        <div className="flex flex-wrap gap-2.5">
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 shadow">
            <IconReactJS size={30} />
            <p className="text-sm text-zinc-500">React JS</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 shadow">
            <IconNextJS size={30} />
            <p className="text-sm text-zinc-500">Next JS</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 shadow">
            <IconVueJS size={30} />
            <p className="text-sm text-zinc-500">Vue JS</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 shadow">
            <IconNodeJS size={30} />
            <p className="text-sm text-zinc-500">Node JS</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 shadow">
            <IconMongoDB size={30} />
            <p className="text-sm text-zinc-500">Mongo DB</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 shadow">
            <IconTailwindCSS size={30} />
            <p className="text-sm text-zinc-500">Tailwind CSS</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 shadow">
            <IconJest size={30} />
            <p className="text-sm text-zinc-500">Jest</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 shadow">
            <IconFirebase size={30} />
            <p className="text-sm text-zinc-500">Firebase</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 pl-3.5 shadow">
            <IconJavascript size={30} />
            <p className="text-sm text-zinc-500">Javascript</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 pl-3.5 shadow">
            <IconHTML size={30} />
            <p className="text-sm text-zinc-500">HTML5</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 pl-3.5 shadow">
            <IconCSS size={30} />
            <p className="text-sm text-zinc-500">CSS3</p>
          </div>
          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 pl-3.5 shadow">
            <IconTypescript size={30} />
            <p className="text-sm text-zinc-500">Typescript</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
