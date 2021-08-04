import { React } from "react";
import { Paper, Typography, makeStyles, Card, CardContent, CardMedia, Grid, Container, CardActionArea } from "@material-ui/core";
import './AboutUs.css';
import { COLORS } from "../styles/color.styles";
import plant from "../assets/image/plant.jpg";
import tree from "../assets/image/trees1.jpg";
import environment from "../assets/image/clean-environment.jpg";
import community from "../assets/image/community.jpg";

const AboutUs = () => {
const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper1} elevation={0}>
        <Typography className={classes.typo1}>WE LOVE NATURE</Typography>
      </Paper>
      <Paper className={classes.paper2} elevation={5}>
        <Typography className={classes.typo2}>Who We Are</Typography>
        <Typography className={classes.typo3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie at elementum eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Quisque id diam vel quam elementum pulvinar etiam. Magna fermentum iaculis eu non diam phasellus vestibulum. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sit amet facilisis magna etiam tempor orci. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Dolor purus non enim praesent elementum facilisis leo. Leo urna molestie at elementum eu facilisis sed. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mi tempus imperdiet nulla malesuada pellentesque. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. A diam sollicitudin tempor id eu nisl nunc mi. Quam quisque id diam vel quam elementum pulvinar etiam. Amet purus gravida quis blandit turpis. Tincidunt eget nullam non nisi.</Typography>
      </Paper>
      <Paper className={classes.paper3} elevation={0}>
        <Typography className={classes.typo5}>What we want</Typography>
        <Container maxWidth="lg">
          <Grid container spacing={10} justifyContent='center'>
            <Grid item xs={2.1}>
              <CardActionArea>
                <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography className={classes.typo4}>A Healthy Planet</Typography>
                 <CardMedia
                    className={classes.media}
                    component="img"
                    alt="Planet"
                    image={tree}
                    title="Healthy Planet"
                  />  
                </CardContent>
              </Card>
              </CardActionArea>
            </Grid>
            <Grid item xs={2.1}>
              <CardActionArea>
                <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography className={classes.typo4}>A Clean Environment</Typography>
                 <CardMedia
                    className={classes.media}
                    component="img"
                    alt="Environment"
                    image={environment}
                    title="Clean Environment"
                  />  
                </CardContent>
              </Card>
              </CardActionArea>
            </Grid>
            <Grid item xs={2.1}>
              <CardActionArea>
                <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography className={classes.typo4}>A Safe Community</Typography>
                 <CardMedia
                    className={classes.media}
                    component="img"
                    alt="Community"
                    image={community}
                    title="Safe Community"
                  />  
                </CardContent>
              </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({
  paper1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '30px',
    padding: theme.spacing(30),
    paddingRight: 300,
    paddingLeft: 235,
    backgroundImage: `url(${plant})`, 
  },

  paper2: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
    marginRight: '50px',
  },

  paper3: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    padding: 'auto auto',
    paddingBottom: '20px',
    background: COLORS.GREEN3
  },
  
  typo1: {
    fontSize: 100,
    fontWeight: 'bold',
    fontFamily: 'Pathway Gothic One',
    color: COLORS.WHITE,
    opacity: 0.99,
    borderBlock: 'solid'
  },

  typo2: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: COLORS.BLACK,
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '530px'
  },

  typo3: {
    fontSize: 16,
    fontFamily: 'Cantarell',
    marginBottom: '20px',
  },

  typo4: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  typo5: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '560px'
  },

  card: {
    maxWidth: 375,
  },

  media: {
    height: 200,
  },
}));

export default AboutUs;
