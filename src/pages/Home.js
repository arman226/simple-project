import React from "react";
import '../App.css'
import {makeStyles,Container,Paper, Typography} from '@material-ui/core'
import backgrounds from '../assets/eco-friendly.jpg'

const Home = () => {
  const classes = useStyles()
  return (
  <div className="homepage-background">
  <Paper className={classes.paperContainer}> 
      <Typography>HAKDOG</Typography>
    </Paper>
  </div>
  );
};

const useStyles = makeStyles((theme) => ({
 paperContainer:{
   backgroundImage: {backgrounds}
 }
}));

export default Home;
