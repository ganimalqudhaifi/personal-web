import React from "react";

import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import CertificatesSection from "@/features/home/components/CertificatesSection";
import HeroSection from "@/features/home/components/HeroSection";
import SkillsSection from "@/features/home/components/SkillsSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Divider />
      <CertificatesSection />
      <Divider />
      <SkillsSection />
    </Layout>
  );
}
