import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import ProjectCardSection from "@/components/projects/ProjectCardSection";

export default function Projects() {
  return (
    <Layout>
      <div>
        <h1 className="mb-2 text-2xl font-bold">Projects</h1>
        <p className="text-zinc-400">Where Creativity Meets Code</p>
      </div>

      <Divider />

      <ProjectCardSection />
    </Layout>
  );
}
