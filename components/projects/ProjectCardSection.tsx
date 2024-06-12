import ProjectCard from "@/components/projects/ProjectCard";
import IconNextJS from "@/components/icons/IconNextJS";
import IconFirebase from "@/components/icons/IconFirebase";
import IconTailwindCSS from "@/components/icons/IconTailwindCSS";

export default function ProjectCardSection() {
  const projects = [
    {
      image: "/project-financial-records.png",
      link: "/projects/financial-records",
      title: "Financial Records",
      description:
        "A web application that can track financial transactions in real-time",
      techStack: [IconNextJS, IconFirebase, IconTailwindCSS],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          techStack={project.techStack}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}
