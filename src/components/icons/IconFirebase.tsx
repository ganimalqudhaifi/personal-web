"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconFirebase({ size }: IconProps) {
  return (
    <Image
      src="/svg/firebase.svg"
      alt="firebase icon"
      width={size}
      height={size}
    />
  );
}
