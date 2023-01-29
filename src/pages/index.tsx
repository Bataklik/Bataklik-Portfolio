/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { IntroSection } from "../components/core/Intro";
import { AboutSection } from "../components/core/About";
import { SkillSection } from "../components/core/Skills";
import { ProjectsSection } from "../components/core/Projects";
import { index as Layout } from "../components/layout";

export default function Index() {
  return (
    <Layout>
      <IntroSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
    </Layout>
  );
}
