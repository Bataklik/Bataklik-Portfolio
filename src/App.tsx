import Layout from "./components/Layout";

import { CssBaseline, Grid } from "@mui/material";
import theme from "./theme";
import { ThemeProvider } from "@mui/styles";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
function App() {
  const Items = [
    <Grid sx={{ backgroundColor: "white" }} item xs={12}>
      <HomeSection />
    </Grid>,
    <Grid item xs={12}>
      <AboutSection />
    </Grid>,
    <Grid sx={{ backgroundColor: "white" }} item xs={12}>
      <ContactSection />
    </Grid>,
  ];

  return (
    //https://sebastianpetravic.webflow.io/about
    // #f5f5f7
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Grid container spacing={5} sx={{ padding: "5px" }}>
          {Items.map(jsx => jsx)}
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
