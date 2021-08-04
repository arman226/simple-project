import { React } from "react";
import { Typography, makeStyles, Card, CardContent, CardMedia, Grid, Container, CardActionArea } from "@material-ui/core";
import './AboutUs.css';
import { COLORS } from "../styles/color.styles";
import tree from "../assets/image/trees1.jpg";
import environment from "../assets/image/clean-environment.jpg";
import community from "../assets/image/community.jpg";

const AboutUs = () => {
const classes = useStyles();
  return (
    <div>
      <div className="cover">
        <div className={classes.root1}>
          <div className="content">
            <Grid 
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            > 
              <Grid item>
                <Container component="main" maxWidth="xl">
                  <Typography className={classes.typo1}>WE LOVE NATURE</Typography>
                </Container>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div className="who">
        <Container className={classes.who} component="main" maxWidth="md" disableGutters>
          <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography className={classes.typo2}>Who We Are</Typography>
            </Grid>
            <Grid item>
              <div className="text">
                <Typography className={classes.typo3} component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie at elementum eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim. 
                  Ultrices vitae auctor eu augue ut lectus arcu bibendum. Quisque id diam vel quam elementum pulvinar etiam. Magna fermentum iaculis eu non diam phasellus vestibulum. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. 
                  Sit amet facilisis magna etiam tempor orci. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Dolor purus non enim praesent elementum facilisis leo. Leo urna molestie 
                  at elementum eu facilisis sed. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mi tempus imperdiet nulla malesuada pellentesque. Eget nunc scelerisque viverra mauris in 
                  aliquam sem fringilla ut. A diam sollicitudin tempor id eu nisl nunc mi. Quam quisque id diam vel quam elementum pulvinar etiam. Amet purus gravida quis blandit turpis. Tincidunt eget nullam non nisi.
                </Typography>
              </div>  
            </Grid>
          </Grid>
        </Container>
      </div>
      
      <div className="what">
        <Container component="main" maxWidth="xl" className={classes.what} disableGutters>
          <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography className={classes.typo5}>What we want</Typography>
            <Container maxWidth="lg">
              <Grid container spacing={10} justifyContent="center" alignItems="center">
                <Grid item>
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
                <Grid item>
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
                <Grid item>
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
          </Grid>
        </Container>
      </div>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({
  typo1: {
    flexGrow: 1,
    fontSize: 100,
    fontWeight: 'bold',
    fontFamily: 'Pathway Gothic One',
    color: COLORS.WHITE,
    paddingRight: '80px'
  },

  typo2: {
    flexGrow: 1,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: COLORS.BLACK,
    marginTop: '20px',
    marginBottom: '20px',
  },

  typo3: {
    flexGrow: 1,
    fontSize: 16,
    fontFamily: 'Cantarell',
  },

  typo4: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },

  typo5: {
    flexGrow: 1,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: '20px',
    marginBottom: '20px',
  },

  card: {
    width: 300,
    maxHeight: 500
  },

  media: {
    height: 200,
  },

  who: {
    width: "auto",
  },

  what: {
    paddingBottom: "60px",
    backgroundColor: COLORS.GREEN3,
  },

  root1: {
    maxWidth: "auto",
    paddingLeft: theme.spacing(8),
  },
}));

export default AboutUs;
