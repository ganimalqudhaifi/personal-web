"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconNotion({ size }: IconProps) {
  return (
    <Image src="/svg/notion.svg" alt="notion icon" width={size} height={size} />
  );
}
