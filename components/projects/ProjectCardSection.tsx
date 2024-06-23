import ProjectCard from "@/components/projects/ProjectCard";
import projectList from "@/data/projectList";

export default function ProjectCardSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projectList.map((project, index) => (
        <ProjectCard
          key={index}
          imagePath={project.imagePath}
          title={project.title}
          techStack={project.techStack}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}
