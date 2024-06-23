import Image from "next/image";

import { IconProps } from "@/types";

export default function IconCSS({ size }: IconProps) {
  return (
    <Image src="/svg/css3.svg" alt="css3 icon" width={size} height={size} />
  );
}
