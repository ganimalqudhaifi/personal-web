"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconMongoDB({ size }: IconProps) {
  return (
    <Image
      src="/svg/mongodb.svg"
      alt="mongodb icon"
      width={size}
      height={size}
    />
  );
}
