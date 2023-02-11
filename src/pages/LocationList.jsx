import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './PageStyles.css';
import map from "../assets/explorer-map.jpg";

const LocationList = () => {

    return (
        <div className='background'>
            {/* <img src={map} alt="explorers map" className='background' /> */}
            <h1>GeoCache Locations</h1>
            <Card />
        </div>
    )
}

export default LocationList