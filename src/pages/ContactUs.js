import React, {useEffect, useState} from "react";
import { makeStyles, Typography, Collapse, Grid, TextField, Button} from "@material-ui/core";
import { COLORS } from "../styles/color.styles";
import './ContactUs.css';
import universe from "../assets/video/video-1.mp4";


const ContactUs = () => {
  const classes = useStyles();
  const handleInputChange = e=> {
    const {name,value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  },[])

const initialValues = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',

}
const [values,setValues] = useState(initialValues);
  return(
      <div>
        <div className ="hero-container">
        <video src= {universe} autoPlay loop muted></video>
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
<<<<<<< HEAD
        
        <div className="wrapper-column">
          <h1>Ask how we can help you:</h1>
          <p>See our platform in action</p>
        </div>
=======
        <form className={classes.root}>
          <Grid  container justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} sm={6} container  direction="column" justifyContent="flex-start" alignItems="center">
              <h4>Points of Contact:</h4>
              <p className="p-1"> U.S. | John Doe Headquarters</p>
              <p className="p-2">2200 Western Ave, Suite 302, Seattle, WA 98121</p>
              <p className="p-1">Information and Sales</p>
              <p className="p-2">JohnDoe@marketing.com</p>
              <p className="p-1">Support</p>
              <p className="p-2">JohnDoe@Support.com</p>
              <h4>Additional Office Locations</h4>
              <p className="p-1">Germany</p>
              <p className="p-2">Torstr. 231, Vorderhaus, 1. OG, 10115 Berlin</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange = {handleInputChange} 
                  />
                <TextField
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
                  value={values.lastName} 
                  onChange = {handleInputChange}
                  />
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange = {handleInputChange} 
                  />
                <TextField
                  variant="outlined"
                  label="Mobile"
                  name="mobile"
                  value={values.mobile}
                  onChange = {handleInputChange}
                  />
                  <br/>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.btn}
                >
                  Submit
                </Button>
              </Grid>
          </Grid>
          </form>
>>>>>>> 384356a5691e345be8764123a235d5605822a4d6
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
  root: {
    '& .MuiFormControl-root': {
      width: '60%',
      margin: theme.spacing(6),
    }
  },
  btn: {
    marginLeft: 45,
    width: '60%',
    
  }
}));

export default ContactUs;
