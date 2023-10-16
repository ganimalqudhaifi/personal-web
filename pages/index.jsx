import Image from "next/image";
import Divider from "../components/Divider";
import { PrimaryLayout } from "../components/layouts";
import { BiCodeAlt } from 'react-icons/bi';
import { SiJest, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

export default function Home() {
  return (
    <PrimaryLayout activeIndex={0}>
      <div>
        <h2 className="text-4xl font-extrabold mb-2.5">Hi, I&apos;m Alqi <span className="animate-spin">👋</span></h2>
        <p className="tracking-wide text-[#c3bcc3]">I have a strong passion for coding, with a keen attention to architectural design, maintainability, and writing clean code. I believe in crafting websites that not only works efficiently but is also easy to understand and maintain. My goal is to create elegant solutions that solve complex problems while maintaining a high level of code quality and readability.</p>
      </div>
      <Divider/>
      <div>
        <div className="flex items-center space-x-2"><BiCodeAlt size={24}/><h2 className="text-xl tracking-tight">Skills</h2></div>
        <p className="mt-2 mb-6 text-zinc-400">My Conding Skills</p>
        <div className="flex flex-wrap gap-5">
          <Image src="/svg/reactjs.svg" alt="reactjs icon" width={36} height={36}/>
          <SiNextdotjs size={36}/>
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
