import { Box, createTheme, CssBaseline, styled } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Intro } from "./components/intro";
import { Navbar } from "./components/nav";
import { Skills } from "./components/skills";
import { theme } from "./utils/theme";

const themes = createTheme(theme);

function App() {
  const name = "Burak Balci";
  const linkedin = "https://www.linkedin.com/in/burak-balci-491289210/";
  const email = "mailto:burak.balci@student.hogent.be";
  const github = "https://github.com/Bataklik";

  return (
    // https://pitch-rebuild.webflow.io/
    <AnimatePresence>
      <ThemeProvider theme={themes}>
        <MainBox>
          <CssBaseline />
          <Navbar />
          <Intro />
          <Skills />
        </MainBox>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#16181D",
  flexGrow: 1,
}));
