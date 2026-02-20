import { projectList } from "../data/ProjectList";
import ProjectCard from "./ProjectCard";

export default function ProjectCardSection() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projectList.map((project) => (
        <ProjectCard {...project} key={project.slug} />
      ))}
    </div>
  );
}
