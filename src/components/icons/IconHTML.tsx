"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconHTML({ size }: IconProps) {
  return (
    <Image src="/svg/html5.svg" alt="html5 icon" width={size} height={size} />
  );
}
