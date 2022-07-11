import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { Layout } from "./components/Layout";
import { Header } from "./pages/Header";
import { Skills } from "./pages/Skills";

const themes = createTheme(theme);

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Layout>
        <CssBaseline />
        <Header />
        <Skills />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
