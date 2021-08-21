import React, {useState} from "react"; 
import { makeStyles,} from "@material-ui/core";
import { COLORS } from "../styles/color.styles";
import { SliderImages } from '../components/SliderImages';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import "./TeamSlider.css";

const Team = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length
const classes = useStyles();

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
};

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
};

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}


return (
    <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderImages.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt='team' className="image" />)}
                </div>
            ) 
            })}
    </section>

)
};




<section classname="slider">
        

    </section>



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