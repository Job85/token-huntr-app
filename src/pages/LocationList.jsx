import React, { useState, useEffect } from 'react';
import HillBackground from '../components/Backgrounds/HillsBackground';
import Carousel from '../components/Carousel';
import './PageStyles.css';

const LocationList = () => {

    return (
        <div className='body'>
            <HillBackground />
            <h1 className='header-1'>GeoCache Locations</h1>
            <Carousel />
        </div>
    )
}

export default LocationList