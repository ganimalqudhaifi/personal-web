import Image from "next/image";
import { IconProps } from "../../types";

export default function IconJavascript({size}: IconProps) {
  return <Image src="/svg/javascript.svg" alt="javascript icon" width={size} height={size}/>
}