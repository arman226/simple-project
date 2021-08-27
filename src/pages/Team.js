import React from 'react'
import Profile from '../components/ProfileComponents/Profile'
import ProfileData from '../components/ProfileComponents/ProfileData';
import { makeStyles,Paper, Container,} from '@material-ui/core';
import { motion } from 'framer-motion';
import { animationOne } from '../animations';

import "../App.css"
const Team = ()=>{
    const classes =useStyles()
    return(
    <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
        <Container component="main" maxWidth="lg">
            <Paper className={classes.HeroContainer} elevation={0}>
                <h1 className={classes.Heroh1}>TEAM PROFILE</h1>
            </Paper>
        <Profile teamProfile={ProfileData}/>
        </Container>
    </motion.div>
    )
}
const useStyles = makeStyles((theme)=>({
    HeroContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        
        color: '#00',
        marginBottom: "-80px"
    },

    HeroItems:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold'
    },
    Heroh1:{
        fontSize: 'clamp(1.5rem,6vw,4rem)',
        marginTop: 'clamp(9rem,6vw,9rem)',
        
        letterSpacing: '3px',
       textAlign:"center"
    },
 
    
}))
export default Team;