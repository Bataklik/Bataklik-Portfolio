import Layout from "./components/Layout";

import { CssBaseline, Grid } from "@mui/material";
import theme from "./theme";
import { ThemeProvider } from "@mui/styles";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
function App() {
  return (
    //https://sebastianpetravic.webflow.io/about
    // #f5f5f7
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid sx={{ backgroundColor: "white" }} item xs={12} paddingY={10}>
            <HomeSection />
          </Grid>
          <Grid sx={{ backgroundColor: "#f5f5f7" }} item xs={12} paddingY={10}>
            <AboutSection />
          </Grid>
          <Grid sx={{ backgroundColor: "white" }} item xs={12} paddingY={10}>
            <ContactSection />
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
