import React, { useRef, useState,useEffect } from 'react';
import './Hero.css';
import {COLORS} from '../../styles/color.styles';
import {makeStyles} from '@material-ui/core';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import Carousel from 'react-material-ui-carousel'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';


const Hero =({slides})=>{
  const classes = useStyles()
  const [current,setCurrent]= useState(0);
  const length =slides.length
  const timeout = useRef(null)

  useEffect(()=>{
      const nextSlide=()=>{
          setCurrent(current=>(current=== length-1?0:current+1))
      }
      timeout.current =setTimeout(nextSlide,3000)
      return function(){
          if(timeout.current){
              clearTimeout(timeout.current)
          }
      }
  },[current,length])

  const nextSlide =()=>{
      setCurrent(current=== length -1?0:current+1)
      console.log(current)
  }
  const prevSlide =()=>{
      setCurrent(current=== 0?length -1:current-1);
      console.log(current)
  }
  if(!Array.isArray(slides)|| slides.length<=0){
      return null
  }
  
  const Sides =(props)=>{
    return(
        <div className="HeroSection">
       <div className="HeroWrapper">
         
         {slides.map((slide,index)=>{
           return(
            <div className="HeroSlide" key={index} >
                
            {index === current &&(
                    <div className="HeroSlide">
                        <img src={slide.image } className="HeroImage"></img>
                    <div className={classes.HeroItems}>
                       <h1 className={classes.Heroh1}>{slide.title}</h1>
                       <p>{slide.details}</p>
                       </div>
                   </div>
            )}
          </div>
         )})}
         <div className="SliderButtons">
             <ArrowRightRoundedIcon  style={{ fontSize:'clamp(3rem,6vw,3rem)', color: COLORS.GREEN3 }}onClick={prevSlide}/>
             
         </div>
         <div className="SliderButtons2">
         <ArrowLeftRoundedIcon  style={{ fontSize:'clamp(3rem,6vw,3rem)', color: COLORS.GREEN3 }}onClick={nextSlide}/>
         </div>
     
       </div>
   </div>
    )
}
  
   
        return(
              
          <Carousel>
        {
          slides.map((slide,index)=><Sides key={index} slide={slide}/>)
        }
        </Carousel>

        )
}
const useStyles = makeStyles((theme)=>({
    HeroContent:{
        zIndex: 2,
        height: 'calc(80vh - 80px)',
        padding: '0rem calc((70vw - 700px)/2)'
    },
    HeroItems:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        marginTop: '-110px',
        padding: '0rem calc((70vw - 700px)/2)',
        color: '#fff',
        lineHeight: 1.1,
        fontWeight: 'bold',
        backgroundColor: '#0c8w9s'
    },
    heroItems:{
      zIndex: 4,
      height: 'calc(100vh - 80px)',
      maxHeight: '100%',
      padding: '0rem calc((100vw - 1300px)/2)'
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
    HeroImages:{
      alignItems:'center',
      OObjectFit: 'cover',
      objectFit: 'cover',
      width: '100%',
      height: '80vh'

    }
}))
export default Hero