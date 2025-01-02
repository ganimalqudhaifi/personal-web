import IconFirebase from "@/components/icons/IconFirebase";
import IconLangchain from "@/components/icons/IconLangchain";
import IconMongoDB from "@/components/icons/IconMongoDB";
import IconNextJS from "@/components/icons/IconNextJS";
import IconNotion from "@/components/icons/IconNotion";
import IconTailwindCSS from "@/components/icons/IconTailwindCSS";

const projectList = [
  {
    id: "synth-ai",
    title: "Synth AI",
    link: "/projects/synth-ai",
    githubLink: "https://github.com/ganimalqudhaifi/synth-ai",
    demoLink: "https://synth-ai.ganimalqudhaifi.my.id",
    imagePath: "/project-synth-ai.png",
    description:
      "AI-powered platform that integrates multiple functionalities",
    techStack: [IconNextJS, IconLangchain, IconMongoDB, IconNotion],
  },
  {
    id: "financial-records",
    title: "Financial Records",
    link: "/projects/financial-records",
    githubLink: "https://github.com/ganimalqudhaifi/financial-records",
    demoLink: "https://financial-records.ganimalqudhaifi.my.id",
    imagePath: "/project-financial-records.png",
    description:
      "A web application that can track financial transactions in real-time",
    techStack: [IconNextJS, IconFirebase, IconTailwindCSS],
  },
  {
    id: "discover-videos",
    title: "Discover Videos",
    link: "/projects/discover-videos",
    githubLink: "https://github.com/ganimalqudhaifi/discover-videos",
    demoLink: "https://discover-videos.ganimalqudhaifi.my.id",
    imagePath: "/project-discover-videos.png",
    description:
      "A web application that integrate with third party API and oAuth login",
    techStack: [IconNextJS, IconFirebase, IconTailwindCSS],
  },
];

export default projectList;
