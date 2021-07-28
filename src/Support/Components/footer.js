import { Container, Divider, Grid, Typography,Paper, Box } from '@material-ui/core'
import React from 'react'
import './Support.css'
import useStyle from './Style.js';
import AppleIcon from '@material-ui/icons/Apple';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import youtubeIcon from './Icons/youtubeIcon.png'
import twitterIcon from './Icons/twitterIcon.png'
export default function Foot(){
    const classes = useStyle()
    return(

        <div className="">
      <div className="footercovers">
         <Container component="main" maxWidth="md" className={classes.contains}>
           
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item>
                    <Typography variant="body2" gutterBottom> Stay Connected with Apple Support</Typography>
                </Grid>
                <Grid item container xs={2}>
                    <Grid item xs container direction="row" spacing={1}>
                        <Grid item xs>
                    <img src={twitterIcon} height="40"></img> </Grid>
                    <Grid item xs>
                    <img src={youtubeIcon} height="40"/></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
         </Container>

         <Container component="main" maxWidth="md" className={classes.down}>
         <Grid container spacing={8} >
                 <Grid item>
                   
                    
                     <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start"><AppleIcon/> <ArrowForwardIosIcon style={{ fontSize: 11}}/> Support</Box>
                  </Typography>
                 </Grid>
             </Grid>
            <Grid container spacing={10}>
                <Grid item>
                  <Typography component="main">
                      <Box display="flex"flexDirection="row"fontWeight="fontWeightBold" fontSize={11} m={0.5} alignItems="flex-start">Product Support</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">iPhone</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Mac</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">iPad</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Watch</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Music</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">TV</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Support Site Map</Box>
                  </Typography>
                   
                </Grid>
                <Grid item>
                <Typography component="main">
                      <Box display="flex"flexDirection="row"fontWeight="fontWeightBold" fontSize={11} m={0.5} alignItems="flex-start">Support and Repair</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">AppleCare Products</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Hardware Warranties</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Software License Agreements</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Complimentary Support</Box>
                  </Typography>
                   
                </Grid>
                <Grid item>
                <Typography component="main">
                      <Box display="flex"flexDirection="row"fontWeight="fontWeightBold" fontSize={11} m={0.5} alignItems="flex-start">Resources</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Downloads</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Manuals</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Tech Specs</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Accessibility</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Education</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Business</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Apple Support Videos</Box>
                  </Typography>
                </Grid>
                <Grid item>
                <Typography component="main">
                      <Box display="flex"flexDirection="row"fontWeight="fontWeightBold" fontSize={11} m={0.5} alignItems="flex-start">Connect</Box>
                  </Typography>
                   
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Contact Us</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Phone Number</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">My Support</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Apple Support App</Box>
                  </Typography>
                  <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Apple Support Communities</Box>
                  </Typography>
                </Grid>
            </Grid>
        <br/>
        <Divider/>
           
         </Container>
      
            <Container component="main" maxWidth="md"className={classes.down} >
            <Grid container container spacing={3}>
            <Grid item>
                <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Copyright © 2021 Apple Inc. All rights reserved.</Box>
                  </Typography>
            </Grid>
            <Grid item>
            <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Privacy Policy</Box>
                  </Typography>
            </Grid>
            <Grid item>
            <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Terms of Use</Box>
                  </Typography>
            </Grid>
            <Grid item>
            <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Sales and Refunds</Box>
                  </Typography>
            </Grid>
            <Grid item>
            <Typography component="main">
                      <Box  display="flex"flexDirection="row"  fontSize={11} m={0.5} alignItems="flex-start">Site Map</Box>
                     
                  </Typography>
                  
            </Grid>
            <Grid item spacing={10}>
            <Typography component="main">
                      <Box  display="flex"flexDirection="row"  justifyContent="flex-end" fontSize={11} m={0.5} alignItems="flex-end">Philippines</Box>
                     
                  </Typography>
                  
            </Grid>
            </Grid>
         </Container>
      </div>
      </div>
    )
}