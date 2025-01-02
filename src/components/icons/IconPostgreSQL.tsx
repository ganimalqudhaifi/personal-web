"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconPostgreSQL({ size }: IconProps) {
  return (
    <Image
      src="/svg/postgresql.svg"
      alt="postgresql icon"
      width={size}
      height={size}
    />
  );
}
