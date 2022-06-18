import { Grid, Paper, Typography } from "@mui/material";

export default function AboutSection() {
  const skills = [
    "C-sharp",
    "JavaScript",
    "React",
    "React-Native",
    "Node.js",
    "TypeScript",
    "SQL",
    "HTML",
    "CSS",
  ];
  return (
    <Grid
      id="about"
      container
      justifyContent={"flex-end"}
      spacing={2}
      sx={{ paddingBottom: "20px", marginY: "20px" }}
    >
      <Grid item container spacing={10}>
        <Grid item xs={2} />
        <Grid item container xs={5}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              My Education So Far
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" lineHeight={1.7}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={3} spacing={5}>
          {skills.map(skill => {
            return (
              <Grid key={skill} item xs={6} sm={4} md={4}>
                <Paper
                  elevation={2}
                  sx={{
                    display: "flex",
                    opacity: 0.8,
                    borderTopRightRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    alignItems: "center",
                    height: 50,
                    width: 100,
                    paddingX: "10%",
                  }}
                >
                  <Typography variant="body1">{skill}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}
