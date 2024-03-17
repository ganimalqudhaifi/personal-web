import Image from "next/image";
import Link from "next/link";

import Layout from "../../components/Layout";
import Divider from '../../components/Divider';
import IconNextJS from "../../components/icons/IconNextJS";
import IconFirebase from "../../components/icons/IconFirebase";
import IconTailwindCSS from "../../components/icons/IconTailwindCSS";

export default function Projects() {
  return (
    <Layout activeIndex={1}>
      <div>
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-400">Where Creativity Meets Code</p>
      </div>

      <Divider />

      <div className="grid md:grid-cols-2">
        <Link href="/projects/financial-records" className="bg-zinc-600/5 w-full rounded-xl overflow-hidden duration-300 hover:scale-[1.02]">
          <Image alt="financial records project" src="/project-financial-records.png" width={352} height={193} className="w-full"/>
          <div className="p-4 border-2 border-t-0 border-zinc-800/50">
            <Link onClick={(e) => e.stopPropagation()} href="https://financial-records.ganimalqudhaifi.my.id" target="_blank" className="inline-block my-3 text-zinc-300 hover:text-[#29fd53] duration-300">Financial Records</Link>
            <p className="text-zinc-400 text-sm">A web application that can track financial transactions in real-time</p>
            <div className="flex space-x-2.5 mt-4 mb-2">
              <IconNextJS size={25}/>
              <IconTailwindCSS size={25}/>
              <IconFirebase size={25}/>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}