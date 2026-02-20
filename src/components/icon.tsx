"use client";

import Image from "next/image";

import { iconMap } from "@/data/icons";
import { IconName } from "@/types/icon";

export type IconProps = {
  size: 25 | 30;
  name: IconName;
};

export default function Icon({ size, name }: IconProps) {
  const src = iconMap[name] || "/svg/default.svg";
  const isPng = src.endsWith(".png");
  const adjustedSize = isPng ? 256 : size;

  return (
    <Image
      src={src}
      alt={`${name} icon`}
      width={adjustedSize}
      height={adjustedSize}
      style={{ width: size, height: size }}
    />
  );
}
