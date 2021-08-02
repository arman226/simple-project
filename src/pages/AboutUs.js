import { React } from "react";
import { Paper, Typography, makeStyles, Card, CardContent, CardMedia, Grid, Container } from "@material-ui/core";
import './AboutUs.css';
import { COLORS } from "../styles/color.styles";
import plant from "../assets/image/plant.jpg";
import tree from "../assets/image/trees1.jpg";

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
      <Paper className={classes.paper3} elevation={5}>
        <Typography className={classes.typo5}>What we want</Typography>
        <Container maxWidth="lg">
          <Grid Container spacing={10} justifyContent='center'>
            <Grid item xs={2.1}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography className={classes.typo4}>A Healthy Planet</Typography>
                 <CardMedia
                    className={classes.media}
                    component="img"
                    alt="Plants"
                    image={tree}
                    title="Tree"
                  />  
                </CardContent>
              </Card>
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
    paddingLeft: 200,
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
  },

  typo3: {
    fontSize: 16,
    fontFamily: 'Cantarell',
  },

  typo4: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  typo5: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginLeft: '30px'
  },

  card: {
    maxWidth: 375,
    marginLeft: '50px',
  },

  card1: {
    maxWidth: 375,
    marginTop: '10px',
    marginLeft: '100px',
  },
}));

export default AboutUs;
