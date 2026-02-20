import { Project } from "../types/project";

export const projectList: Project[] = [
  {
    slug: "synth-ai",
    title: "Synth AI",
    githubLink: "https://github.com/ganimalqudhaifi/synth-ai",
    demoLink: "https://synth-ai.ganimalqudhaifi.my.id",
    imagePath: "/project-synth-ai.png",
    description:
      "AI-powered platform that integrates multiple functionalities",
    techStack: ['nextjs', 'langchain', 'mongodb', 'notion'],
  },
  {
    slug: "financial-records",
    title: "Financial Records",
    githubLink: "https://github.com/ganimalqudhaifi/financial-records",
    demoLink: "https://financial-records.ganimalqudhaifi.my.id",
    imagePath: "/project-financial-records.png",
    description:
      "A web application that can track financial transactions in real-time",
    techStack: ['nextjs', 'firebase', 'tailwindcss'],
  },
  {
    slug: "discover-videos",
    title: "Discover Videos",
    githubLink: "https://github.com/ganimalqudhaifi/discover-videos",
    demoLink: "https://discover-videos.ganimalqudhaifi.my.id",
    imagePath: "/project-discover-videos.png",
    description:
      "A web application that integrate with third party API and oAuth login",
    techStack: ['nextjs', 'firebase', 'tailwindcss'],
  },
];
