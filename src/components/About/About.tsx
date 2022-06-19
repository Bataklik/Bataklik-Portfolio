import { Grid, Paper, Typography } from "@mui/material";
import SkillTable from "./SkillTable";

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
      <Grid id="about" container spacing={1}>
        <Grid item xs={0} sm={2} />
        <Grid container item xs={12} sm={8} spacing={2}>
          <Grid item container xs={12} sm={6}>
            <Grid item xs={12}>
              <Typography variant="h4">My Education So Far</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1" lineHeight={2.5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
