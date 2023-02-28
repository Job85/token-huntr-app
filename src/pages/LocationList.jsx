import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import HillBackground from '../components/Backgrounds/HillsBackground';
import './PageStyles.css';

const LocationList = () => {

    return (
        <div className='body'>
            <HillBackground />
            <h1 className='locations'>GeoCache Locations</h1>
            <Card />
        </div>
    )
}

export default LocationList