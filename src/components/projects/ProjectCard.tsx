"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import path from "path";
import React from "react";

import placeholders from "@/data/placeholders.json";
import { IconProps, Placeholders } from "@/types";

export default function ProjectCard({
  imagePath,
  title,
  techStack,
  description,
  link,
}: {
  imagePath: string;
  title: string;
  techStack: React.ComponentType<IconProps>[];
  description: string;
  link: string;
}) {
  const router = useRouter();
  const fileName = path.basename(imagePath);
  const placeholder = placeholders as Placeholders;

  return (
    <div
      className="w-full cursor-pointer overflow-hidden rounded-xl bg-zinc-600/5 duration-300 hover:scale-[1.02]"
      onClick={() => router.push(link)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imagePath}
          alt={title}
          fill={true}
          className="w-full"
          placeholder="blur"
          blurDataURL={placeholder[fileName]?.blurDataURL}
        />
      </div>
      <div className="border-2 border-t-0 border-zinc-800/50 p-4">
        <h2 className="my-3 inline-block text-zinc-300 duration-300 hover:text-[#29fd53]">
          {title}
        </h2>
        <p className="text-sm text-zinc-400">{description}</p>
        <div className="mt-4 mb-2 flex space-x-2.5">
          {techStack.map((TechIcon, index) => (
            <TechIcon key={index} size={25} />
          ))}
        </div>
      </div>
    </div>
  );
}
