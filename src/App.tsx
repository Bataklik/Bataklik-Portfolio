import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { Layout } from "./components/Layout";

import img from "./assets/images/Person/buraq.jpeg";
import { Header } from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { Skill } from "./components/Skill";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
const themes = createTheme(theme);

function App() {
  const name = "Burak Balci";
  const linkedin = "https://www.linkedin.com/in/burak-balci-491289210/";
  const email = "mailto:burak.balci@student.hogent.be";
  const github = "https://github.com/Bataklik";
  const person = {
    name,
    email,
    linkedin,
    github,
    img,
  };
  return (
    // https://pitch-rebuild.webflow.io/
    <AnimatePresence>
      <ThemeProvider theme={themes}>
        <Layout person={person}>
          <CssBaseline />
          <Header />
          <Skill />
          <About />
          <Contact />
        </Layout>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;
