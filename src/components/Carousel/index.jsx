import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../Card";
import './CarouselStyles.css';

const Carousel = () => {

    // show location
    const [locations, setLocations] = useState([])

    // API call for locations
    useEffect(() => {
        const GetLocations = async () => {
            const location = await axios.get(`http://localhost:3001/api/location`)
            setLocations(location.data)
        }
        GetLocations()
            .catch(console.error)
    }, [])

    // show card with index
    const [currentIndex, setCurrentIndex] = useState(0);

    // move to next card
    const next = () => {
        setCurrentIndex((currentIndex + 1) % locations.length);
    };

    // move to previous card
    const prev = () => {
        setCurrentIndex((currentIndex - 1 + locations.length) % locations.length);
    };


    return (
        <div className="carousel-body">
            <div className="carousel-container">
                {locations.map((cache) => (
                    <div
                        key={cache.id}
                        className={
                            locations[currentIndex].id === cache.id ? 'fade' : 'slide fade'
                        }
                    >
                        <div className="location-card">
                            <span className='location-span'>
                                <b>Latitude:</b> {cache.latitude}
                            </span>
                            <span className='location-span'>
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
                    </div>
                ))}
                <button
                    onClick={prev}
                    className='prev'
                >
                    &lt;
                </button>
                <button
                    onClick={next}
                    className='next'
                >
                    &gt;
                </button>
            </div>
            <div className="dots">
                {locations.map((cache) => (
                    <span
                        key={cache.id}
                        className={
                            locations[currentIndex].id === cache.id ? 'dot active' : 'dot'
                        }
                        onClick={() => setCurrentIndex(locations.indexOf(cache))}
                    >
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Carousel