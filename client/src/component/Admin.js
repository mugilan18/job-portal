import React from 'react'
import { useState } from 'react';
import { Link} from 'react-router-dom';

import {
    Grid,
    makeStyles,
    Button,
    Typography,
    TextField,
    Paper,
  } from "@material-ui/core";
  const useStyles = makeStyles((theme) => ({
    body: {
      padding: "60px 60px",
    },
    inputBox: {
      width: "300px",
    },
    submitButton: {
      width: "300px",
    },
  }));

function Admin() {
    const classes = useStyles();
    const [usern, setUsern] = useState("")
    const [passwrd, setPasswrd] = useState("")
    const [buttond,setButtond]=useState(true)
    const check = (e)=>{
       
          if(usern==="admin"&passwrd==="open"){
            
              console.log("hai admin")
              return  setButtond(false)
             
          }
          else{
              console.log("you are not admin")
          }
      }
    return (
        <div>
     <Paper elevation={3} className={classes.body}>
         {buttond ? 
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Admin Login
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Admin Name"
            className={classes.inputBox}
            value={usern}
            onChange={(e)=>setUsern(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            className={classes.inputBox}
            value={passwrd}
            onChange={(e)=>setPasswrd(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
            onClick={()=>{check()}}
          >
            Login
          </Button>
        </Grid>
      </Grid>
      :
      <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
          <Typography variant="h3" component="h2">
            Welcome
          </Typography>
        </Grid>
        <Link to = "/admin/main"> <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
           
            
          >
            Enter
          </Button></Link>
      </Grid>}
    </Paper>


   
        </div>
    )
}

export default Admin
