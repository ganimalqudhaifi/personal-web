import Layout from "../../components/Layout";
import Divider from "../../components/Divider";
import ProjectCardSection from "@/components/projects/ProjectCardSection";

export default function Projects() {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-400">Where Creativity Meets Code</p>
      </div>

      <Divider />

      <ProjectCardSection />
    </Layout>
  );
}
