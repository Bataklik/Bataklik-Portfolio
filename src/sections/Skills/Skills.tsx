import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  CsharpSvg,
  CssSvg,
  Gitsvg,
  HtmlSvg,
  JavaScriptSvg,
  ReactSvg,
  TypescriptSvg,
} from "../../components/SkillsSection/Svgs";

const useStyles = makeStyles(theme => ({
  svg: {
    "&:hover": {
      position: "absolute",
      transform: "scale(1.2)",
      transition: "transform 0.7s ease-in-out",
    },
  },
  title: {
    color: "#3F3F3F",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

function Skills() {
  const classes = useStyles();
  const skills = [
    <Grid key={1} item xs={0} sm={3} />,
    <Grid key={2} item xs={4} sm={2}>
      <Paper
        sx={{ backgroundColor: "#F5F5F7" }}
        className={classes.svg}
        elevation={0}
      >
        <ReactSvg />
        <Typography>ReactJS</Typography>
      </Paper>
    </Grid>,
    <Grid key={3} item xs={4} sm={2}>
      <Paper
        sx={{ backgroundColor: "#F5F5F7" }}
        className={classes.svg}
        elevation={0}
      >
        <ReactSvg />
        <Typography>React-Native</Typography>
      </Paper>
    </Grid>,
    <Grid key={4} item xs={4} sm={2}>
      <Paper
        sx={{ backgroundColor: "#F5F5F7" }}
        className={classes.svg}
        elevation={0}
      >
        <JavaScriptSvg />
        <Typography>JavaScript</Typography>
      </Paper>
    </Grid>,
    <Grid key={5} item xs={0} sm={3} />,
    <Grid key={6} item xs={0} sm={3} />,

    <Grid key={7} item xs={4} sm={2}>
      <Paper
        sx={{ backgroundColor: "#F5F5F7" }}
        className={classes.svg}
        elevation={0}
      >
        <CsharpSvg />
        <Typography>C-Sharp</Typography>
      </Paper>
    </Grid>,
    <Grid key={8} item xs={4} sm={2}>
      <Paper
        sx={{ backgroundColor: "#F5F5F7" }}
        className={classes.svg}
        elevation={0}
      >
        <HtmlSvg />
        <Typography>HTML</Typography>
      </Paper>
    </Grid>,
    <Grid key={9} item xs={4} sm={2}>
      <Paper
        sx={{ backgroundColor: "#F5F5F7" }}
        className={classes.svg}
        elevation={0}
      >
        <CssSvg />
        <Typography>CSS</Typography>
      </Paper>
    </Grid>,
    <Grid key={10} item xs={0} sm={3} />,
    <Grid key={11} item xs={3} sm={3} />,

    <Grid key={12} item xs={3} sm={2}>
      <Paper
        sx={{ backgroundColor: "#F5F5F7" }}
        className={classes.svg}
        elevation={0}
      >
        <TypescriptSvg />
        <Typography variant="inherit">TypeScript</Typography>
      </Paper>
    </Grid>,
    <Grid key={13} item xs={3} sm={2}>
      <Paper
        sx={{ backgroundColor: "#F5F5F7" }}
        className={classes.svg}
        elevation={0}
      >
        <Gitsvg />
        <Typography variant="inherit">Git</Typography>
      </Paper>
    </Grid>,
    <Grid key={14} item xs={3} sm={3} />,
  ];
  return (
    <Grid
      sx={{ backgroundColor: "#F5F5F7", paddingBottom: "10px" }}
      container
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h4">
          My Skills
        </Typography>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        {skills.map(skill => skill)}
      </Grid>
    </Grid>
  );
}

export default Skills;
