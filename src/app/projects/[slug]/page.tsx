import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";

import Divider from "@/components/Divider";
import Icon from "@/components/Icon";
import MdxLayout from "@/components/mdx-layout";
import { projectList } from "@/features/projects/data/ProjectList";

export function generateStaticParams() {
  return projectList.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectList.find((project) => project.slug === slug);

  if (!project) redirect("/projects");

  const { default: Content } = await import(
    `@/features/projects/markdown/${slug}.mdx`
  );

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
            <h2 className="mb-1 text-4xl font-semibold">{project.title}</h2>
            <p className="text-zinc-400">{project.description}</p>
          </div>
          <Divider />
          <div className="flex justify-between text-zinc-500">
            <div className="flex space-x-3">
              {project.techStack.map((iconName) => (
                <Icon key={iconName} size={25} name={iconName} />
              ))}
            </div>
            <div className="flex justify-end gap-3">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-1 duration-300 hover:text-zinc-300"
              >
                <FaGithub />
                <span>Github</span>
              </Link>
              <Link
                href={project.demoLink}
                target="_blank"
                className="flex items-center gap-1 duration-300 hover:text-zinc-300"
              >
                <HiExternalLink />
                <span>View Demo</span>
              </Link>
            </div>
          </div>
          <Image
            alt={project.title}
            src={project.imagePath}
            width={1000}
            height={1000}
            className="w-full rounded"
          />
          <MdxLayout>
            <Content />
          </MdxLayout>
        </div>
      </div>
    </div>
  );
}
