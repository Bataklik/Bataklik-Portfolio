import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";

export default function Index() {
  return (
    <div>
      <Home />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
