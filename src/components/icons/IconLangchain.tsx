"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconLangchain({ size }: IconProps) {
  return (
    <div className="bg-[#1C3C3C] rounded-full text-white p-1 flex items-center justify-center">
      <Image
        src="/svg/langchain.svg"
        alt="langchain icon"
        width={size}
        height={size}
      />
    </div>
  );
}
