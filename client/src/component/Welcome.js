import { Grid, Typography } from "@material-ui/core";

import './animation.css'
const Welcome = (props) => {
  return (
 <>
<link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<div id='title'>
  
  <span>
  Welcome to TechnoZest Recruitz
  </span>
</div>

</> 
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
