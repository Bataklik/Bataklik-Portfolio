import { Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Header() {
  return (
    <MainBox>
      <Grid container>
        {/* ------------------------------------------------------------ */}
        <Grid item xs={2} md={5} />
        <Grid item xs={8} md={2}>
          <BorderBox>
            <BorderTitle>Bataklik Portfolio</BorderTitle>
          </BorderBox>
        </Grid>
        <Grid item xs={2} md={5} />
        {/* ------------------------------------------------------------ */}
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Title>
            Developer passionate with creating strong user friendly programs
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
  paddingTop: "20px",
  paddingBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "15px",
    paddingBottom: "15px",
  },
}));

const BorderBox = styled(Box)(({ theme }) => ({
  borderRadius: "30px",
  padding: "15px",
  margin: "5px",
  marginBottom: "25px",

  background: "rgba( 41, 41, 41, 0.2 )",

  border: "1px solid rgba( 255, 255, 255, 0.1 )",

  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    padding: "10px",
  },
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
