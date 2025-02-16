"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconHasura({ size }: IconProps) {
  return (
    <Image
      src="/logo/hasura.png"
      alt="hasura icon"
      width={size}
      height={size}
    />
  );
}
