import { Box, createTheme, CssBaseline, styled } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Education } from "./components/education";
import { Footer } from "./components/footer";
import { Banner } from "./components/banner";
import { Navbar } from "./components/nav";
import { Skills } from "./components/skills";
import { theme } from "./utils/theme";

const themes = createTheme(theme);

function App() {
  return (
    <AnimatePresence>
      <ThemeProvider theme={themes}>
        <MainBox>
          <CssBaseline />
          <Navbar />
          <Banner />
          <Skills />
          <Education />
          <Footer />
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
