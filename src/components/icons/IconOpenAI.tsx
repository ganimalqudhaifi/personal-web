"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconOpenAI({ size }: IconProps) {
  return (
    <Image src="/svg/openai.svg" alt="openai icon" width={size} height={size} />
  );
}
