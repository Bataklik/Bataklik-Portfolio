import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { Layout } from "./components/Layout";
import { Header } from "./pages/Header";
import { Skills } from "./pages/Skills";
import img from "./assets/images/Person/buraq.jpeg";
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
    <ThemeProvider theme={themes}>
      <Layout person={person}>
        <CssBaseline />
        <Header />
        <Skills />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
