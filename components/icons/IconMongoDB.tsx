import Image from "next/image";
import { IconProps } from "../../types";

export default function IconMongoDB({size}: IconProps) {
  return <Image src="/logo/mongodb.png" alt="mongodb icon" width={size} height={size}/>
}