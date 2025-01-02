import IconFirebase from "@/components/icons/IconFirebase";
import IconNextJS from "@/components/icons/IconNextJS";
import IconTailwindCSS from "@/components/icons/IconTailwindCSS";

const projectList = [
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
