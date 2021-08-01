import React, {useEffect, useState} from "react";
import { makeStyles, Typography, Collapse } from "@material-ui/core";
import { COLORS } from "../styles/color.styles";
import './ContactUs.css';

const ContactUs = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  },[])
  return(
      <div>
        <div className ="hero-container">
        <video src='/video/video-1.mp4' autoPlay loop muted></video>
        <Collapse 
          in ={checked}
          {... (checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
        <Typography className={classes.title}> CONTACT US </Typography>
        </Collapse>
        </div>

        <div className="wrapper">
          <h1 className="typography-title">Let's Start a Conversation</h1>
        </div>
        
        <div className="wrapper-column">
          <h1>Ask how we can help you:</h1>
          <p>See our platform in action</p>
        </div>
      </div>
  ) 
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 150,
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: 75,
    color: COLORS.WHITE,
    fontFamily: "Pathway Gothic One",
  },
}));

export default ContactUs;
