import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {COLORS} from '../../styles/color.styles'
import { Grid,Container,DialogActions,Button, Paper, Dialog } from '@material-ui/core';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import ProfileData from './ProfileData';
import './Profile.css'


const Profile=({teamProfile})=>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [current,setCurrent]= useState([0]);
    const length = teamProfile.length
    const handleClose = () => {
    setOpen(false);
    };
    const clickMe=(persons)=>{
        setCurrent(persons)
        setOpen(true);


    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    console.log(current)
    if (!Array.isArray(teamProfile) || teamProfile.length <= 0) {
        return null;
    }



    return(
            
    <div className="ProfileSection">
        <div className="Wrap">
            <section>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            <Grid container spacing={3}>
                {teamProfile.map((persons,index)=>{
            const {id,name}=persons;
                return(
                    <Grid item key={index} xs={12} md={6} lg={3}>
                    
                        <div className={classes.paper}>
                            <Paper elevation={2}>
                        <div className={classes.upper}>
                            <div className="imageContainer">
                            <img src={persons.image} height="100px" width="100px"/>
                            </div>
                            </div>
                            <div className={classes.bot}>
                                <h1>{persons.name}</h1>
                                <h3>{persons.position}</h3>
                            </div>
                            <div className={classes.bons}>
                            <Button variant="contained" className={classes.button} onClick={()=>clickMe(persons)}>See Details</Button>
                            </div>
                            </Paper>
                            </div>
                    </Grid> 
                )
            })}
            </Grid>
            </section>
        </div>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <div className={classes.paper}>
                    <Container maxWidth="md" >
                        <div className={classes.bots}>
                            <div className="imageContainers">
                            <img src={current.image}/>
                            </div>
                        <h1>{current.name}</h1>
                        <h2>{current.position}</h2>
                        <h6>{current.school}</h6>
                        </div>
                    </Container>
                </div>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.buttons}>Close</Button>
                </DialogActions>
            </Dialog>
    </div>
    )
}



const useStyles = makeStyles((theme) => ({
    root:{   
        borderRadius: "1rem",
        margin: 'clamp(2rem,4vw,1rem)',
        maxWidth: 365,
        textAlign:"center"
    },
    upper:{
        height: "100px",
        padding: "65px",
        background: COLORS.GREEN_GRADIENT2
    },
    all:{
        margin: 'clamp(2rem,4vw,1rem)',
        maxWidth: 500,
        height: 450, 
    },  
    bons:{
        textAlign:"center",
    padding: theme.spacing(2)
    },
    paper:{
        marginTop: theme.spacing(3),
        padding: theme.spacing(3) 
    },
    button:{
        fontSize:'clamp(1rem,2vw,1rem)',
        fontFamily:"Aharoni",
        maxWidth:"md",
        borderRadius: '3em',
        alignItems:"center",
        backgroundColor: COLORS.GREEN3
    },
    buttons:{
        fontSize:'clamp(1rem,2vw,1rem)',
        fontFamily:"Aharoni",
        backgroundColor: '#fff',
        borderRadius: '2em',
        alignItems:"center",
        backgroundColor: COLORS.GREEN3
    },

    bot:{
        textAlign:"center",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3)
    },
    bots:{
        textAlign:"center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
    }
}));
export default Profile;