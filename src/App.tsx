import Layout from "./components/Layout";

import { createTheme, CssBaseline, Grid } from "@mui/material";
//import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import HomeSection from "./sections/Home";
import SkillSection from "./sections/Skills";
import ContactSection from "./sections/Contact";
import { theme } from "./utils/theme";

const themes = createTheme(theme);

function App() {
  const Items = [
    <Grid key={1} sx={{ backgroundColor: "white" }} item xs={12}>
      <HomeSection />
    </Grid>,
    <Grid key={2} item xs={12}>
      <SkillSection />
    </Grid>,
    <Grid key={3} sx={{ backgroundColor: "white" }} item xs={12}>
      <ContactSection />
    </Grid>,
  ];

  return (
    //https://sebastianpetravic.webflow.io/about
    // #f5f5f7
    <ThemeProvider theme={themes}>
      <Layout>
        <CssBaseline />
        <Grid container spacing={7} sx={{ padding: "5px" }}>
          {Items.map(jsx => jsx)}
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
