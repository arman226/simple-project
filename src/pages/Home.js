import React from "react";
import './Home.css'
import {makeStyles,Container,Paper, Typography,Button,Grid, Box,Divider,
Card,CardActionArea,CardContent,CardMedia,CardActions} from '@material-ui/core'
import backgrounds from '../assets/eco-friendly.jpg'
import {COLORS} from '../styles/color.styles'
const Home = () => {
  const classes = useStyles()
  return (
    <div className="">
   <div className="homepage-background">
     <div className="design">
    <Container component="main" maxWidth="md" className={classes.paper}>
      
        <Grid   container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item>
             
                <Typography className={classes.head}>
                  Let's Protect our Nature
                </Typography>
        
      </Grid>
      <Grid item>
      <Typography className={classes.headsecond}>Enjoy our nature while protecting it.</Typography>
      <Typography className={classes.headsecond}>
       Mother Earth needs help.</Typography>
      </Grid>
      <div className={classes.backbutton}>
      <Button variant="contained" className={classes.buttons}>GET STARTED</Button>
      </div>
      </Grid>
        
    </Container>
    </div>
  </div>
  <div className="cards">
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Plants"
          height="140"
          image="/assets/Plants.png"
          title="Plants"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Plants
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Plants are really important for the planet and for all living things. Plants help to clean water too.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
   
    

<Divider/>
    <div className="homepage-pics">
  <Container justifyContent="flex-start" maxWidth="xs" className={classes.root}>
    <Paper elevation={0}>
      <h1>REDUCE</h1>
      <h1>REUSE</h1>
      <h1>RECYCLE</h1>
    </Paper>
  </Container>
  
  </div>
  <Container component="main" maxWidth="md">
    <Paper elevation={0}>
      <h1 className={classes.bodyend}>If waste cannot be reduced or reused, then recycling is a great way to turn rubbish into something useful again. Recycling helps to ensure that materials such as paper, card, glass and metal can be turned into new products, reducing the need for virgin materials and preserving the planet's resources.
</h1>
    </Paper>
  </Container>
  <Divider/>
  <footer>
    <h1>Footer?</h1>
  </footer>
  </div>
  );
};

const useStyles = makeStyles((theme) => ({
 paperContainer:{
   backgroundImage: {backgrounds}
 },
 root:{   maxWidth: 345
},
 paper:{
    marginTop: theme.spacing(6),
    padding: theme.spacing(9)
 },
 button:{
   color: COLORS.BROWN
 },
 head:{
  flexGrow: 1,
  fontSize:70,
  fontFamily: "Brush Script MT",
  color: COLORS.YELLOW,
  fontWeight: 'bolder'
 },
 headsecond:{
  flexGrow: 1,
  fontSize:26,
  fontFamily: "Garamond",
  color: COLORS.WHITE,
  fontWeight: 'bolder'
  
 },
 buttons:{
   fontSize:30,
   fontFamily:"Aharoni",
   maxWidth:"md"
 },
 backbutton:{
  marginTop: theme.spacing(4),
 },
 bodyend:{
  fontSize:20,
  fontFamily: "Pathway Gothic One",
  
 }
}));



export default Home;
