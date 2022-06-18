import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid id="home" container spacing={2}>
      <Grid xs={12} item container spacing={5}>
        <Grid item xs={12} />
        <Grid item xs={12} />
      </Grid>
      <Grid xs={12} item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography variant="h2">
            A developer who is truly passionate about creating beautiful
            friendly programs.
          </Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}
