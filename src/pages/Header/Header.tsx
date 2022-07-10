import { Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Header() {
  return (
    <MainBox>
      <Grid container>
        {/* ------------------------------------------------------------ */}
        <Grid item xs={4} md={5} />
        <Grid item xs={4} md={2}>
          <BorderBox>
            <BorderTitle>Bataklik Portfolio</BorderTitle>
          </BorderBox>
        </Grid>
        <Grid item xs={4} md={5} />
        {/* ------------------------------------------------------------ */}
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Title>
            A developer who is truly passionate about creating beautiful
            friendly programs.
          </Title>
        </Grid>
        <Grid item xs={1} md={2} />
        {/* ------------------------------------------------------------ */}
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <SubTitle>
            I'm always where the sun don't shine. ~xxxTentacion
          </SubTitle>
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </MainBox>
  );
}

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#101010",
}));

const BorderBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#292929",
  borderRadius: "30px",
  padding: "15px",
  margin: "5px",
  marginBottom: "25px",
}));

const BorderTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "16px",
  textAlign: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "58px",
  textAlign: "center",
  lineHeight: "1.2",
  marginBottom: "35px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.7)",
  fontWeight: "300",
  fontSize: "38px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));
