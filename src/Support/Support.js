import React from 'react'
import './Components/Support.css'
import airpodsIcon from './Components/Icons/airpods.png'
import macIcon from './Components/Icons/mac.png'
import iphoneIcon from './Components/Icons/iphone.png'
import ipadIcon from './Components/Icons/ipad.png'
import watchIcon from './Components/Icons/watch.png'
import musicIcon from './Components/Icons/music.png'
import tvIcon from './Components/Icons/tv.png'


import forogotPass from './Components/Icons/forgotpassword.png'
import findIcon from './Components/Icons/find.png'
import billingIcon from './Components/Icons/billing.png'

import designImage from './Components/Images/designforeveryone.png'
import discoverImage from './Components/Images/discover.png'
import supportImage from './Components/Images/Background.jpg'
import getSupport from './Components/Images/getsupport.jpg'
import useStyle from './Components/Style.js'
import SearchIcon from '@material-ui/icons/Search';
import { Box,TextField,Grid,Divider,Paper, InputAdornment,Card,CardMedia, Container, Typography, CardActionArea} from '@material-ui/core'
import { height } from '@material-ui/system'
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
                    spacing={6}>

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
          spacing={9}>
            <Grid >
                <img src={forogotPass} height="40"/>
                <p>Forgot Apple ID or password</p>
            </Grid>
           
            <Grid  item >
                <img src={billingIcon} height="40"/>
                <p>Billing and subscription</p>
            </Grid>
            <Grid  item >
                <img src={findIcon} height="40"/>
                <p>Find My</p>
            </Grid>
        </Grid>
          </Paper>
      </Container>
        
        <Divider/>
      
               <Container component="main" maxWidth="xl">
                   <Paper className={classes.paper}>
                       <Grid container 
                            justifyContent="center"
                            alignItems="center"
                            spacing={9}>

                                <Grid item >
                                 
                                    <img src={designImage} height="200"/>
                                    <h2>Design for everyone</h2>
                                    
                                </Grid>
                                <Grid item >
                                    <img src={discoverImage} height="200"/>
                                    <h2>Discover helpful features for families and kids</h2>
                                </Grid>
                       </Grid>

                   </Paper>

               </Container>
               <Divider/>

               <div className="cover1">

               </div>
               
       <Divider></Divider>
       <Container>
           <Typography variant="h3" component="h3">
           Warranty and repair
           </Typography>
           <Typography variant="body1" component="h2">
           See if your Apple product is eligible for service and support under our limited warranty. Already have a repair in progress? Let’s check the status.
           </Typography>
       </Container>
        <Divider></Divider>
        
        <Container >
          
                <Typography variant="h5" component="h5">
                    Beware of counterfiet parts
                </Typography>
                <Typography variant="body1" component="h2">
                Some counterfeit and third party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Authorized Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.
            <br/>Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.
                </Typography>
           
        </Container>


        </div>
         
    )
}