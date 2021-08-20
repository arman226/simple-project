import React from 'react'
import TeamSlider from '../pages/TeamSlider';
import { SliderImages } from '../components/SliderImages';

const Team = () => {
    return (
        <div>
        <TeamSlider slides={SliderImages} />
        </div>
    )
}

export default Team
