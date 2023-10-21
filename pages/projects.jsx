import { PrimaryLayout } from "../components/layouts";
import Divider from '../components/Divider';
import Image from "next/image";
import Link from "next/link";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";


export default function Projects() {
  return (
    <PrimaryLayout activeIndex={1}>
      <div>
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-400">Where Creativity Meets Code</p>
      </div>

      <Divider />

      <div className="grid md:grid-cols-2">
        <div className="bg-zinc-600/5 w-full rounded-xl overflow-hidden duration-300 hover:scale-[1.02]">
          <Image alt="financial records project" src="/project-financial-records.png" width={400} height={400} className="w-full"/>
          <div className="p-4 border-2 border-t-0 border-zinc-800/50">
            <Link href="financial-records.ganimalqudhaifi.my.id" target="_blank" className="inline-block my-3 text-zinc-300 hover:text-zinc-100 duration-300">Financial Records</Link>
            <p className="text-zinc-400 text-sm">A web application that can track financial transactions in real-time</p>
            <div className="flex space-x-2.5 mt-4 mb-2">
              <SiNextdotjs size={25}/>
              <SiTailwindcss size={25} className="text-[#38bdf8]"/>
              <Image src="/svg/firebase.svg" alt="firebase icon" width={25} height={25}/>
            </div>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  )
}