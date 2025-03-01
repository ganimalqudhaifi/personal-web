"use client";

import Image from "next/image";

export type IconProps = {
  size: 25 | 30;
  name: string;
};

const iconMap: Record<string, string> = {
  angular: "/svg/angular.svg",
  aws: "/svg/aws.svg",
  css3: "/svg/css3.svg",
  docker: "/svg/docker.svg",
  express: "/svg/express.png",
  figma: "/svg/figma.svg",
  firebase: "/svg/firebase.svg",
  gcp: "/svg/gcp.svg",
  graphql: "/svg/graphql.svg",
  hasura: "/svg/hasura.svg",
  html5: "/svg/html5.svg",
  javascript: "/svg/javascript.svg",
  jest: "/svg/jest.svg",
  kotlin: "/svg/kotlin.svg",
  langchain: "/svg/langchain.svg",
  laravel: "/svg/laravel.svg",
  mongodb: "/svg/mongodb.svg",
  nextjs: "/svg/nextjs.svg",
  nodejs: "/svg/nodejs.svg",
  notion: "/svg/notion.svg",
  nuxt: "/svg/nuxt.svg",
  openai: "/svg/openai.svg",
  php: "/svg/php.svg",
  pinecone: "/svg/pinecone.svg",
  postgresql: "/svg/postgresql.svg",
  python: "/svg/python.svg",
  reactjs: "/svg/reactjs.svg",
  storybook: "/svg/storybook.svg",
  tailwindcss: "/svg/tailwindcss.svg",
  "testing-library": "/svg/testing-library.svg",
  typescript: "/svg/typescript.svg",
  vuejs: "/svg/vuejs.svg",
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
