import { Grid, Paper, Typography } from "@mui/material";
import SkillTable from "../../components/SkillTable";

export default function AboutSection() {
  return (
    <Paper
      elevation={5}
      sx={{
        backgroundColor: "#F5F5F7",
        borderRadius: "5px",
        paddingY: "10px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={0} sm={2} />
        <Grid container item xs={12} sm={8} spacing={2}>
          <Grid item container xs={12} sm={6}>
            <Grid item xs={12}>
              <Typography id="about" variant="h4">
                My Education So Far
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1" lineHeight={2}>
                A motivated and excited programmer. I am currently a student at
                the HoGent. I developed an app for Eniris, from then on I love
                to make apps with React-Native.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={6}>
            <SkillTable />
          </Grid>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Paper>
  );
}
