import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
import { useRouter } from "next/router";
import projectList from "@/data/projectList";

export default function FinancialRecords() {
  const router = useRouter();
  const id = router.query.id;
  const currentProject = projectList.find((project) => project.id === id);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="flex justify-center lg:pt-10">
        <div className="w-full max-w-4xl text-white p-6 space-y-6">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-zinc-300 hover:gap-2.5 hover:text-zinc-200 duration-300"
          >
            <IoMdArrowRoundBack />
            <span>Back to Projects</span>
          </Link>
          <div>
            <h2 className="text-4xl font-semibold mb-1">
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
              <h2 className="text-3xl text-zinc-300 font-semibold mb-8">
                Introduction
              </h2>
              {currentProject.sections.introduction.map((item, index) => (
                <p key={index} className="text-zinc-400 indent-12">
                  {item}
                </p>
              ))}
            </div>
          )}
          {currentProject.sections.keyFeatures && (
            <div>
              <h2 className="text-3xl text-zinc-300 font-semibold mb-8">
                Key Features
              </h2>
              <ul className="list-disc space-y-3 text-zinc-500 ml-5">
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
