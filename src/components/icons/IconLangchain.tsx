"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconLangchain({ size }: IconProps) {
  return (
    <Image
      src="/svg/langchain.svg"
      alt="langchain icon"
      width={size}
      height={size}
    />
  );
}
