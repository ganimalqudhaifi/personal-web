"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconVueJS({ size }: IconProps) {
  return (
    <Image src="/svg/vuejs.svg" alt="vuejs icon" width={size} height={size} />
  );
}
