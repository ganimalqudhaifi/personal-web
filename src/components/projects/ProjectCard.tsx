"use client";

import CustomImage from "../custom-image";
import Icon from "../icon";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProjectCard({
  imagePath,
  title,
  techStack,
  description,
  link,
}: {
  imagePath: string;
  title: string;
  techStack: string[];
  description: string;
  link: string;
}) {
  const router = useRouter();

  return (
    <div
      className="w-full cursor-pointer overflow-hidden rounded-xl bg-zinc-600/5 duration-300 hover:scale-[1.02]"
      onClick={() => router.push(link)}
    >
      <div className="relative h-48 w-full">
        <CustomImage
          src={imagePath}
          alt={title}
          fill={true}
          className="w-full"
        />
      </div>
      <div className="border-2 border-t-0 border-zinc-800/50 p-4">
        <h2 className="my-3 inline-block text-zinc-300 duration-300 hover:text-[#29fd53]">
          {title}
        </h2>
        <p className="text-sm text-zinc-400">{description}</p>
        <div className="mt-4 mb-2 flex space-x-2.5">
          {techStack.map((iconName, index) => (
            <Icon key={index} size={25} name={iconName} />
          ))}
        </div>
      </div>
    </div>
  );
}
