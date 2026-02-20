import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ProjectCardSection from "@/features/projects/components/ProjectCardSection";

export default function Page() {
  return (
    <Layout>
      <PageHeader title="Projects" description="Where Creativity Meets Code" />
      <Divider />
      <ProjectCardSection />
    </Layout>
  );
}
