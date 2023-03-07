import React from 'react';
import Carousel from '../components/Carousel';
import './PageStyles.css';

const LocationList = () => {

    return (
        <div className='body'>
            <h1 className='header-1'>GeoCache Locations</h1>
            <Carousel />
        </div>
    )
}

export default LocationList