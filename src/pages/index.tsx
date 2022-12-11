import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { Portfolio } from "../components/Portfolio";
import { Educations } from "../components/Educations";
import { Skills } from "../components/Skills";

export default function Index() {
  return (
    <div>
      <Home />
      <Educations />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}
