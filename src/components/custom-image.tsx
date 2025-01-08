import Image from "next/image";
import path from "path";

import placeholders from "@/data/placeholders.json";
import { Placeholders } from "@/types";

const placeholder = placeholders as Placeholders;

type CustomImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
};

export default function CustomImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
}: CustomImageProps) {
  const fileName = path.basename(src);
  const blurDataURL = placeholder[fileName]?.blurDataURL;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      placeholder="blur"
      blurDataURL={blurDataURL}
      priority={priority}
    />
  );
}
