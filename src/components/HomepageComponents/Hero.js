import React, {useState,} from 'react';
import './Hero.css';
import {COLORS} from '../../styles/color.styles';
import {makeStyles} from '@material-ui/core';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
const Hero =({slides})=>{
    const classes = useStyles()
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slide = slides.map((item) => {
      return (
        
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.image}
        >
          <img src={item.image} alt={item.altText} className="HeroImage" />
         <CarouselCaption captionText={item.title}  className={classes.Heroh1}/>
        </CarouselItem>
     
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slide} 
        <CarouselControl  direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl  direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    )
}
const useStyles = makeStyles((theme)=>({
    HeroContent:{
        zIndex: 4,
        height: 'calc(100vh - 80px)',
        maxHeight: '100%',
        padding: '0rem calc((100vw - 1300px)/2)'
    },
    HeroItems:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        height: '100vh',
        maxHeight: '100%',
        padding: 0,
        color: '#fff',
        lineHeight: 1.1,
        fontWeight: 'bold',
        backgroundColor: '#0c8w9s'
    },
    Heroh1:{
        fontSize: 'clamp(3rem,8vw,6rem)',
        marginBottom: '1.5rem',
        letterSpacing: '3px',
        padding: '0 1rem',
        fontWeight:'bolder',
        color: COLORS.YELLOW2,
        textShadow: '2px 2px #000'
    },
}))
export default Hero