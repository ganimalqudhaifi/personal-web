import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { PiCertificate, PiCodeBold } from "react-icons/pi";

import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import CustomImage from "@/components/custom-image";
import Icon from "@/components/icon";
import certificateLists from "@/data/certificateLists.json";

type Certificate = {
  instance: string;
  title: string;
  date: string;
  href: string;
};

const skills = [
  // Core Frontend Frameworks & Libraries
  { icon: "reactjs", name: "React JS" },
  { icon: "nextjs", name: "Next.js" },
  { icon: "vuejs", name: "Vue.js" },
  { icon: "nuxt", name: "Nuxt" },
  { icon: "angular", name: "Angular" },

  // Core Backend Technologies
  { icon: "nodejs", name: "Node.js" },
  { icon: "express", name: "Express.js" },
  { icon: "php", name: "PHP" },
  { icon: "laravel", name: "Laravel" },
  { icon: "python", name: "Python", isHidden: true },

  // Databases & Query Languages
  { icon: "mongodb", name: "MongoDB" },
  { icon: "postgresql", name: "PostgreSQL" },
  { icon: "graphql", name: "GraphQL" },
  { icon: "hasura", name: "Hasura" },

  // Cloud & DevOps
  { icon: "aws", name: "AWS", isHidden: true },
  { icon: "gcp", name: "Google Cloud" },
  { icon: "firebase", name: "Firebase" },
  { icon: "pinecone", name: "Pinecone", isHidden: true },
  { icon: "docker", name: "Docker", isHidden: true },

  // Styling & UI
  { icon: "tailwindcss", name: "Tailwind CSS" },
  { icon: "css3", name: "CSS3" },
  { icon: "html5", name: "HTML5" },
  { icon: "figma", name: "Figma" },

  // Programming Languages & Tooling
  { icon: "javascript", name: "JavaScript" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "kotlin", name: "Kotlin", isHidden: true },

  // AI & Automation
  { icon: "openai", name: "OpenAI" },
  { icon: "langchain", name: "Langchain" },

  // Testing
  { icon: "jest", name: "Jest" },
  { icon: "testing-library", name: "Testing Library" },
  { icon: "storybook", name: "Storybook", isHidden: true },

  // Productivity & Misc
  { icon: "notion", name: "Notion" },
];

const CertificateCard = ({ certificate }: { certificate: Certificate }) => (
  <div className="group/certificate relative flex cursor-pointer items-center justify-between rounded border border-zinc-800/60 bg-zinc-600/5 p-2 subpixel-antialiased shadow duration-200 before:absolute before:inset-y-0 before:right-0 before:w-32 before:from-transparent before:via-zinc-900/80 before:to-zinc-900 before:content-[''] hover:scale-[1.02] hover:border-zinc-700/50 before:hover:bg-gradient-to-r">
    <div className="flex items-center space-x-3">
      <CustomImage
        src={`/logo/${certificate.instance}.png`}
        alt={`${certificate.instance} logo`}
        width={64}
        height={64}
        className="w-16 rounded shadow"
      />
      <div>
        <p className="text-sm text-indigo-300 capitalize">
          {certificate.instance}
        </p>
        <p className="mb-0.5 text-zinc-400">{certificate.title}</p>
        <p className="text-sm text-zinc-500">{certificate.date}</p>
      </div>
    </div>
    <Link href={certificate.href} target="_blank">
      <BiLinkExternal className="absolute right-0 hidden w-6 h-6 mr-4 duration-300 -translate-y-1/2 top-1/2 text-zinc-600 hover:scale-110 hover:text-zinc-400 group-hover/certificate:block" />
    </Link>
  </div>
);

const SkillCard = ({
  iconName,
  skillName,
  isHidden = false,
}: {
  iconName: string;
  skillName: string;
  isHidden?: boolean;
}) => (
  <div
    className={`${isHidden && "hidden"} flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 pl-3.5 shadow`}
  >
    <Icon size={30} name={iconName} />
    <p className="text-sm text-zinc-500">{skillName}</p>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <div>
        <h2 className="mb-2 text-3xl font-extrabold">
          Hi, I&apos;m Alqi{" "}
          <span className="inline-block animate-wiggle">👋</span>
        </h2>
        <ul className="mb-6 list-disc list-inside text-zinc-400 lg:flex lg:space-x-8">
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
            <CertificateCard certificate={certificate} key={i} />
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
          {skills.map((skill, i) => (
            <SkillCard
              key={i}
              iconName={skill.icon}
              skillName={skill.name}
              isHidden={skill.isHidden}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
