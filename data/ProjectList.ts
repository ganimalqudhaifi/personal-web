import IconNextJS from "@/components/icons/IconNextJS";
import IconFirebase from "@/components/icons/IconFirebase";
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
    sections: {
      introduction: [
        "Designed and developed using Next.js, the project prioritized web performance to ensure fast loading times and optimal user experience. The goal of this project was to design and develop a comprehensive financial records web application tailored for budgeting purposes. Leveraging modern technologies and best practices, the application aimed to provide users with a seamless and intuitive experience for managing their financial data effectively.",
      ],
      keyFeatures: [
        "Authentication",
        "Real-time Database",
        "CRUD Operations",
        "Data Visualization",
      ],
    },
  },
];

export default projectList;
