"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconReactJS({ size }: IconProps) {
  return (
    <Image
      src="/svg/reactjs.svg"
      alt="reactjs icon"
      width={size}
      height={size}
    />
  );
}
