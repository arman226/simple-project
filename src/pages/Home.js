import React from "react";
import './Home.css'
import '../App.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {makeStyles,Container,Paper, Typography,Button,Grid,Divider,
Card,CardContent,CardMedia} from '@material-ui/core'
import backgrounds from '../assets/image/eco-friendly.jpg'
import plants from '../assets/image/plant.jpg'
import mountains from '../assets/image/mountains.jpg'
import ocean from '../assets/image/ocean.jpg'
import {COLORS} from '../styles/color.styles'

const Home = () => {
  const classes = useStyles()
  return (
    <div className="App">
  
   <div className="homepage-background">
     <div className="design1">
    <Container component="main" maxWidth="lg" className={classes.paper}>
      
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
      <Typography className={classes.headsecond}>Enjoy our nature while protecting it. <br/>Mother Earth needs help.</Typography>
     
      </Grid>
      <div className={classes.backbutton}>
      <Button variant="contained" className={classes.buttons}>GET STARTED <ArrowForwardIcon/></Button>
      </div>
      </Grid>
        
    </Container>
    </div>
  </div>
  
 
  <div className="cards">
  <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
  
>
  <Grid item>
  <Card className={classes.root}>
      
        <CardMedia
          component="img"
          alt="Plants"
          height="200"
          image={plants}  
          title="Plants"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Plants
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Plants are really important for the planet and for all living things.
           Plants absorb carbon dioxide and release oxygen from their leaves, which humans and other animals need to breathe.
          Living things need plants to live - they eat them and live in them.
          Plants help to clean water too.
         
          </Typography>
        </CardContent>
    
      
    </Card>
    </Grid>
    <Grid item >
    <Card className={classes.root}>
     
        <CardMedia
          component="img"
          alt="Mountains"
          height="200"
          width="10"
          image={mountains}  
          title="Mountains"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mountains
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Mountains cover 22 percent of the planet's land surface and provide habitat for plants, animals and human 
          The vital landforms also supply critical resources such as fresh water, food and even renewable energy.
          It helps in prevent with speed of wind.
          </Typography>
        </CardContent>
     
    </Card>
    </Grid>
    <Grid item >
    <Card className={classes.root}>
     
        <CardMedia
          component="img"
          alt="Ocean"
          height="200"
          width="10"
          image={ocean}  
          title="Ocean"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ocean
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The ocean produces over half of the world's oxygen and absorbs 50 times more carbon dioxide than our atmosphere. 
         Covering 70 percent of the Earth's surface, the ocean transports heat from the equator to the poles, regulating our climate and weather patterns.

          </Typography>
        </CardContent>
      
      
    </Card>
    </Grid>
    </Grid>
  
    </div>
    
    

<Divider/>
    <div className="homepage-pics">
 <div className={classes.roots}>
<div className="design1">
    <Container maxWidth="md" >
      
     <Typography className={classes.r3}>REDUCE</Typography>
     <Typography className={classes.r3}>REUSE</Typography>
     <Typography className={classes.r3}>RECYCLE</Typography>
     
    </Container>
    </div>
  </div>
  </div>
  <Container component="main" maxWidth="md">
    <Paper elevation={0}>
      <Typography component="h1" className={classes.bodyend}>If waste cannot be reduced or reused, then recycling is a great way to turn rubbish into something useful again. Recycling helps to ensure that materials such as paper, card, glass and metal can be turned into new products, reducing the need for virgin materials and preserving the planet's resources.
</Typography>
    </Paper>
  </Container>
  <Divider/>
    
  </div>
  );
};

const useStyles = makeStyles((theme) => ({
 paperContainer:{
   backgroundImage: {backgrounds}
 },
 root:{   maxWidth: 345
},
roots:{
  maxWidth: 700,
  marginTop: theme.spacing(6),
  padding: theme.spacing(5),
  marginBottom:theme.spacing(9),

},

 paper:{
    marginTop: theme.spacing(6),
    padding: theme.spacing(9)
 },
 
 head:{
  flexGrow: 1,
  fontSize:66,
  fontFamily: "Elephant",
  color: COLORS.YELLOW,
  fontWeight: 'bolder'
 },
 headsecond:{
  flexGrow: 1,
  fontSize:26,
  fontFamily: "Garamond",
  color: COLORS.WHITE,
  fontWeight: 'bolder',
  marginTop: theme.spacing(5)
  
 },
 buttons:{
   fontSize:30,
   fontFamily:"Aharoni",
   maxWidth:"md",
   backgroundColor: COLORS.GREEN8,
   color: COLORS.WHITE
 },
 r3:{
  fontSize:50,
   fontFamily:"Times New Roman",
   fontWeight:"bolder",
   color: COLORS.YELLOW1
 },
 backbutton:{
  marginTop: theme.spacing(4),
 },
 bodyend:{
  fontSize:20,
  fontFamily: "Pathway Gothic One",
  marginBottom:theme.spacing(9)
 }
}));



export default Home;
