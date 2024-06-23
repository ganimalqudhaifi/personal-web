import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";

import Divider from "@/components/Divider";
import projectList from "@/data/ProjectList";

export default function FinancialRecords() {
  const router = useRouter();
  const id = router.query.id;
  const currentProject = projectList.find((project) => project.id === id);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <div className="flex justify-center lg:pt-10">
        <div className="w-full max-w-4xl space-y-6 p-6 text-white">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-zinc-300 duration-300 hover:gap-2.5 hover:text-zinc-200"
          >
            <IoMdArrowRoundBack />
            <span>Back to Projects</span>
          </Link>
          <div>
            <h2 className="mb-1 text-4xl font-semibold">
              {currentProject.title}
            </h2>
            <p className="text-zinc-400">{currentProject.description}</p>
          </div>
          <Divider />
          <div className="flex justify-between text-zinc-500">
            <div className="flex space-x-3">
              {currentProject.techStack.map((TechIcon, index) => (
                <TechIcon key={index} size={25} />
              ))}
            </div>
            <div className="flex justify-end gap-3">
              <Link
                href={currentProject.githubLink}
                target="_blank"
                className="flex items-center gap-1 duration-300 hover:text-zinc-300"
              >
                <FaGithub />
                <span>Github</span>
              </Link>
              <Link
                href={currentProject.demoLink}
                target="_blank"
                className="flex items-center gap-1 duration-300 hover:text-zinc-300"
              >
                <HiExternalLink />
                <span>View Demo</span>
              </Link>
            </div>
          </div>
          <Image
            alt="financial records project"
            src={currentProject.imagePath}
            width={1000}
            height={1000}
            className="w-full rounded"
          />
          {currentProject.sections.introduction && (
            <div className="py-8">
              <h2 className="mb-8 text-3xl font-semibold text-zinc-300">
                Introduction
              </h2>
              {currentProject.sections.introduction.map((item, index) => (
                <p key={index} className="indent-12 text-zinc-400">
                  {item}
                </p>
              ))}
            </div>
          )}
          {currentProject.sections.keyFeatures && (
            <div>
              <h2 className="mb-8 text-3xl font-semibold text-zinc-300">
                Key Features
              </h2>
              <ul className="ml-5 list-disc space-y-3 text-zinc-500">
                {currentProject.sections.keyFeatures.map((item, index) => (
                  <li key={index}>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
