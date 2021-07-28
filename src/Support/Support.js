import React from 'react'
import './Components/Support.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../App.css'
import Footer from './Components/footer'
import airpodsIcon from './Components/Icons/airpods.png'
import macIcon from './Components/Icons/mac.png'
import iphoneIcon from './Components/Icons/iphone.png'
import ipadIcon from './Components/Icons/ipad.png'
import watchIcon from './Components/Icons/watch.png'
import musicIcon from './Components/Icons/music.png'
import tvIcon from './Components/Icons/tv.png'
import settingsIcon from './Components/Icons/settings.png'

import forogotPass from './Components/Icons/forgotpassword.png'
import findIcon from './Components/Icons/find.png'
import billingIcon from './Components/Icons/billing.png'
import appleCareIcon from './Components/Images/appleCare.png'

import designImage from './Components/Images/designforeveryone.png'
import discoverImage from './Components/Images/discover.png'
import supportImage from './Components/Images/Background.jpg'
import getSupport from './Components/Images/getsupport.jpg'
import useStyle from './Components/Style.js'
import SearchIcon from '@material-ui/icons/Search';
import { Box,TextField,Grid,Divider,Paper, InputAdornment,Card,CardMedia, Container, Typography, CardActionArea} from '@material-ui/core'
import { height } from '@material-ui/system'
import { COMMENT_KEYS } from '@babel/types'
export default function Support(){
    const classes = useStyle()
    return(
        
      <div className="">
        <div className="cover">
        <div className="title">
               <h1 className="title-heading">Welcome to Apple Support</h1> 
               <TextField className={classes.margin}
               variant="outlined"             
               InputProps={{
                   startAdornment:(
                       <InputAdornment position="start">
                            <SearchIcon/>
                            <p className="searchTitle">Search Support </p>
                       </InputAdornment>
                   )
               }}
               ></TextField>
            </div>
        </div>
        
        <Container component="root" maxWidth="lg" className="contains">
        <Paper className={classes.paper} elevation={0}>
        <Grid   container
                direction="row"
                justifyContent="center"
                    alignItems="center"
                    spacing={9}>

            <Grid item>
                <img src={iphoneIcon } height="80"></img>
                <p>iPhone</p>
            </Grid>
            <Grid item>
                <img src={macIcon} height="80"></img>
                <p>Mac</p>
            </Grid>
            <Grid item>
                <img src={ipadIcon} height="80" ></img>
                <p>iPad</p>
            </Grid>
            <Grid item >
                <img src={watchIcon}  height="80"></img>
                <p>Watch</p>
            </Grid>
            <Grid item>
                <img src={airpodsIcon}height="70"></img>
                <p>AirPods</p>
            </Grid>
            <Grid item >
                <img src={musicIcon}height="70"></img>
                <p>Music</p>
            </Grid>
            <Grid item >
                <img src={tvIcon}height="70"></img>
                <p>TV</p>
            </Grid>
            
        </Grid>
        </Paper>
        </Container>
      <Divider/>
      <Container component="main" maxWidth="lg">
          <Paper className={classes.paper} elevation={0}>
          <Grid container 
          className={classes.roots}
          justifyContent="center"
          alignItems="center"
          spacing={10}>
            <Grid item>
                <Container component="main" maxWidth="xs">
                <img src={forogotPass} height="40"/>
                <Typography variant="subtitle1">Forgot Apple ID or password <ArrowForwardIosIcon style={{ fontSize: 10}}/></Typography>
               
                </Container>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid  item >
            <Container component="main" maxWidth="xs">
                <img src={billingIcon} height="40"/>
                <Typography variant="subtitle1"gutterBottom>Billing and subscription <ArrowForwardIosIcon style={{ fontSize: 10}}/></Typography>
                </Container>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid  item>
            <Container component="main" maxWidth="xs">
                <img src={findIcon} height="40"/>
                <Typography variant="subtitle1">Find My  <ArrowForwardIosIcon style={{ fontSize: 10}}/> </Typography>
                </Container>
            </Grid>
        </Grid>
          </Paper>
      </Container>
        
        <Divider/>
      
               <Container component="main" maxWidth="lg">
                   <Paper className={classes.paper} elevation={0} >
                       <Grid container 
                       direction="row"
                        justifyContent="center"
                            alignItems="center"
                            spacing={9}>
                             
                             
                                   <Grid item >
                                    <Container maxWidth="xs" >
                                    <Paper elevation={0}>
                                    <img src={designImage} height="200"/>
                                   
                                  
                                        
                                       <h2>Design for everyone</h2>
                                        <Typography variant="subtitle1" gutterBottom>Powerful assistive features are built into every Apple device to help you browse, work, play, and more.</Typography>
                                        <Typography variant="subtitle1" gutterBottom >Explore accessibility features <ArrowForwardIosIcon style={{ fontSize: 10}}/></Typography>
                                       </Paper>
                                        </Container>
                                       
                                </Grid>
                                <Grid item >
                                <Container maxWidth="xs">
                                    <Paper elevation={0}>
                                    <img src={discoverImage} height="200"/>
                                    <h2>Discover helpful features for families and kids</h2>
                                   
                                        <Typography variant="subtitle1" gutterBottom>Learn how to manage an Apple device for your child, set up Family Sharing and Screen Time limits, and more.</Typography>
                                        <Typography variant="subtitle1" gutterBottom><Typography variant="subtitle1" gutterBottom>Explore accessibility features<ArrowForwardIosIcon style={{ fontSize: 10}}/></Typography></Typography>
                                   </Paper>
                                   </Container>
                                </Grid>
                       </Grid>

                   </Paper>

               </Container>
               <Divider/>

             

               <div className="cover1">
                  
                   <Container maxWidth="lg" 
                   className={classes.paper}>
                        <div className="contains1">
                  <Grid  container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start">
                        <Grid item>
               <Typography variant="h4" component="h2" gutterBottom>
                   Get Support <br/>
               </Typography>
               </Grid>
               <Grid item>
               <Typography variant="body1" component="h2" gutterBottom>
               Choose a product and we’ll find you the best solution.</Typography></Grid>
               <Grid item>
               <Typography variant="subtitle1" gutterBottom>Start now <ArrowForwardIosIcon style={{ fontSize: 10}}/></Typography> </Grid>
               <Grid item> 
               <Typography variant="subtitle1" gutterBottom>Download the Apple Support app <ArrowForwardIosIcon style={{ fontSize: 10}}/>
               </Typography>
               </Grid>
               </Grid>
               </div>
              </Container>
            
               </div>
               
      
               <Container component="main" maxWidth="md">
                   <Paper className={classes.paper} elevation={0}>
                       <Grid container  direction="row" justifyContent="flex-start"
                            alignItems="flex-start"  >
                                <Grid item xs={12} md={5}>
                       <img src={appleCareIcon} height="200"/></Grid>
                       <Grid item xs={12} md={5}>
                       
                       <Typography variant="h5" gutterBottom >Service and support from Apple experts</Typography>
                       <Typography variant="subtitle1" gutterBottom>AppleCare products provide additional hardware service options and expert technical support from Apple.</Typography>
                       <Typography variant="subtitle1" gutterBottom>Learn about AppleCare plans <ArrowForwardIosIcon style={{ fontSize: 10}}/></Typography>
                       </Grid>
                       
                       </Grid>
                   </Paper>
               </Container>
               <Divider/>
               <div>
       <Container component="main" maxWidth="md">
           <Paper className={classes.paper} elevation={0}>
            <img src={settingsIcon} height="150"/>
           <Typography variant="h3" component="h3" gutterBottom>
           Warranty and repair
           </Typography>
           <Typography variant="body1" component="h2" gutterBottom >
           See if your Apple product is eligible for service and support under our limited warranty. Already have a repair in progress? Let’s check the status.
           </Typography>
           </Paper>
           <Divider/>
       </Container>
       </div>
     
        
        <Container component="main" maxWidth="md" className={classes.paper}>
          <div className="covs">
          <Grid container
           justifyContent="center"
           alignItems="center">
               <Grid item>
                <Typography variant="h5" component="h5" gutterBottom>
                    Beware of counterfiet parts
                </Typography>
                <Typography variant="subtitle1" gutterBottom> Some counterfeit and third party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Authorized Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.</Typography>
                <Typography variant="subtitle1" gutterBottom>Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</Typography>
                </Grid>
                </Grid>
                </div>
        </Container>
               <Divider/>

               <Container component="main" maxWidth="md" className={classes.paper}>
                <div className="covs">
                       <Grid container direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start">
                           <Grid item>
                              <Typography variant="h5" gutterBottom>Apple Service Program</Typography>
                           </Grid>
                           <Grid item>
                              <Typography variant="subtitle1" gutterBottom>iPhone 11 Display Module Replacement Program for Touch Issues</Typography>
                           </Grid>
                           <Grid item>
                              <Typography variant="subtitle1" gutterBottom>AirPods Pro Service Program for Sound Issues</Typography>
                           </Grid>
                           <Grid item>
                              <Typography variant="subtitle1" gutterBottom>iPad Air (3rd generation) Service Program for Blank Screen Issue</Typography>
                           </Grid>
                           <Grid item>
                              <Typography variant="subtitle1" gutterBottom>iPad Air (3rd generation) Service Program for Blank Screen Issue</Typography>
                           </Grid>
                           <Grid item>
                              <Typography variant="subtitle1" gutterBottom>See all programs <ArrowForwardIosIcon style={{ fontSize: 10}}/></Typography>
                           </Grid>
                       </Grid>
                       </div>
               </Container>
               <Footer/>
        </div>
         
    )
}