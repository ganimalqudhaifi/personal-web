import { IconProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  techStack: React.ComponentType<IconProps>[];
  description: string;
  link: string;
}

export default function ProjectCard({
  image,
  title,
  techStack,
  description,
  link,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <div
      className="bg-zinc-600/5 w-full rounded-xl overflow-hidden duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={() => router.push(link)}
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill={true} className="w-full" />
      </div>
      <div className="p-4 border-2 border-t-0 border-zinc-800/50">
        <h2 className="inline-block my-3 text-zinc-300 hover:text-[#29fd53] duration-300">
          {title}
        </h2>
        <p className="text-zinc-400 text-sm">{description}</p>
        <div className="flex space-x-2.5 mt-4 mb-2">
          {techStack.map((TechIcon, index) => (
            <TechIcon key={index} size={25} />
          ))}
        </div>
      </div>
    </div>
  );
}
