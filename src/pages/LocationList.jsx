import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './PageStyles.css';

const LocationList = () => {

    return (
        <div className='body'>
            <h1>GeoCache Locations</h1>
            <Card />
        </div>
    )
}

export default LocationList