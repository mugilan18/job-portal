import React from 'react'
import Data from "./dummy.json"
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
//import {Typography} from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


var Joblist = Data.jobs
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  
const Adminmain = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ul>{
            Joblist.map((job)=>{
                return(
                        <div> 
                            <SnackbarContent message={"Job Title : "+job.job_title +", Job Type : "+job.job_type+", Experience : "+job.experience+", Skills Required : "+job.skills} /> 
                            
                            
                        </div>
                )
            })
        }
            </ul>
        </div>
    )}




 
export default Adminmain
