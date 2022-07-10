import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { Layout } from "./components/Layout";
import { Header } from "./pages/Header";

const themes = createTheme(theme);

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Layout>
        <CssBaseline />
        <Header />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
