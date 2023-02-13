import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './CompStyle.css';

const Card = () => {
    const [location, setLocations] = useState([])
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    useEffect(() => {
        const GetLocations = async () => {
            await sleep(1000);
            const location = await axios.get(`http://localhost:3001/api/location`)
            setLocations(location.data)
            console.log(location.data)
        }
        GetLocations()
            .catch(console.error)
    }, [])

    return (
        <div>
            <div className='card-container'>
                {location.map((cache, i) => (
                    <div className='location-card' key={i}>
                        <span className='location-span'>
                            <b>Latitude:</b> {cache.latitude}
                        </span>
                        <span>
                            <b>Longitude:</b> {cache.longitude}
                        </span>
                        <span className='location-span'>
                            <b>Difficulty Level:</b> {cache.level}
                        </span>
                        <Link to={`/locations/${cache.id}`} key={cache.id}>
                            <button className="card-button">
                                Edit Location
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card