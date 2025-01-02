"use client";

import Image from "next/image";

import { IconProps } from "@/types";

export default function IconGraphQL({ size }: IconProps) {
  return (
    <Image
      src="/svg/graphql.svg"
      alt="hasura icon"
      width={size}
      height={size}
    />
  );
}
