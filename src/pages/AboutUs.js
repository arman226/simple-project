import { Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { COLORS } from "../styles/color.styles";
import plant from "../assets/image/plant.jpg";

const AboutUs = () => {
const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper1}>
        <Typography className={classes.typo1}>About us</Typography>
      </Paper>
      <Paper className={classes.paper2}>
        <Typography className={classes.typo2}>Who We Are</Typography>
      </Paper>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({
  paper1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '500px',
    marginRight: '500px',
    marginBottom: '30px',
    padding: '10px 20px',
    background: COLORS.GREEN1
  },

  paper2:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
    marginRight: '50px',
    background: COLORS.BLUE2,
  },
  
  typo1: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Pathway Gothic One',
    color: COLORS.BLACK,
  },

  typo2: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: COLORS.BLACK,
  },
}));

export default AboutUs;
