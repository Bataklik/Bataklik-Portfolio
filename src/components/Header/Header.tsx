import { Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function Header() {
  return (
    <MainBox>
      <Grid container sx={{ paddingTop: "2rem" }}>
        {/* ------------------------------------------------------------ */}
        <Grid item xs={12} />
        {/* ------------------------------------------------------------ */}
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={8}>
          <Title>
            Developer passionate with creating strong user friendly apps
          </Title>
        </Grid>
        <Grid item xs={0} md={2} />
        {/* ------------------------------------------------------------ */}
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={8}>
          <SubTitle>
            I'm a developer, who loves to create react and react-native apps.
          </SubTitle>
        </Grid>
        <Grid item xs={0} md={2} />
      </Grid>
    </MainBox>
  );
}

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "##FFFFFF",
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
  color: "#000",
  fontSize: "16px",
  textAlign: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.8)",
  fontSize: "58px",
  textAlign: "center",
  lineHeight: "1.2",
  margin: "0px 10px",
  marginBottom: "35px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.6)",
  fontWeight: "lighter",
  fontSize: "36px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));
