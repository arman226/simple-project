import React from "react"; 
import { Container, Grid, Typography, makeStyles, Card, CardContent, CardMedia } from "@material-ui/core";
import { COLORS } from "../styles/color.styles";

import "./Team.css";
import marcelo from "../assets/image/Marcelo.jpg";
import wes from "../assets/image/Wes.jpg";
import angelica from "../assets/image/Angelica.jpg";
import irish from "../assets/image/Irish.jpg";

const Team = () => {
const classes = useStyles();
  return (
     <div className="App">
        <div className="personel">
            <Container component="main" maxWidth="xl" className={classes.developers} disableGutters>
                <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography className={classes.typo1}>The Team</Typography>
                    <Container className={classes.proj} maxWidth="lg">
                        <Typography className={classes.typo2}>Project Manager</Typography>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>
                                <div className="project-manage">
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <CardMedia
                                                className={classes.media}
                                                component="img"
                                                alt="Irish"
                                                image={irish}
                                                title="Irish Fran"
                                            />
                                        </CardContent>
                                        <Typography className={classes.typo3}>Irish Fran</Typography>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container className={classes.dev} maxWidth="lg">
                        <Typography className={classes.typo2}>Developers</Typography>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>
                                <div className="developers">
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <CardMedia
                                                className={classes.media}
                                                component="img"
                                                alt="Marcelo"
                                                image={marcelo}
                                                title="Marcelo Lim"
                                            />
                                        </CardContent>
                                        <Typography className={classes.typo3}>Marcelo Lim</Typography>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="developers">
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <CardMedia
                                                className={classes.media}
                                                component="img"
                                                alt="Wesley"
                                                image={wes}
                                                title="Wesley Sta.Ana"
                                            />
                                        </CardContent>
                                        <Typography className={classes.typo3}>Wesley Sta.Ana</Typography>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="developers">
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <CardMedia
                                                className={classes.media}
                                                component="img"
                                                alt="Angelica"
                                                image={angelica}
                                                title="Angelica Ragub"
                                            />
                                        </CardContent>
                                        <Typography className={classes.typo3}>Angelica Ragub</Typography>
                                    </Card>
                                </div>
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
        color: COLORS.BLACK1,
    },

    typo2: {
        flexGrow: 1,
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Pathway Gothic One',
        color: COLORS.BLACK1,
    },

    typo3: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Pathway Gothic One',
    },

    developers: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 'auto',
        marginTop: '30px',
        paddingBottom: '30px',
        background: COLORS.BLUE_GRADIENT
    },

    media: {
        height: 300,
    },

    card: {
        width: 350,
    },

    proj: {
        marginTop: 30,
    },

    dev: {
        marginTop: 50,
    },
}));

export default Team;