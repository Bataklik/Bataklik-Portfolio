import { AboutSection } from "../components/core/about";
import { ContactSection } from "../components/core/contact";
import { IntroSection } from "../components/core/intro";
import { ProjectsSection } from "../components/core/project";
import { SkillSection } from "../components/core/skill";
import { Layout } from "../components/layout";

export default function Index() {
  return (
    <Layout>
      <IntroSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
