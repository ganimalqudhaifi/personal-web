import { IconName } from "@/types/icon";

export type Project = {
  slug: string;
  title: string;
  githubLink: string;
  demoLink: string;
  imagePath: string;
  description: string;
  techStack: IconName[];
}