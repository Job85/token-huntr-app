import React from 'react';
import { useNavigate } from 'react-router-dom';
import HillBackground from '../components/Backgrounds/HillsBackground';

const Landing = () => {
    let navigate = useNavigate()

    return (
        <div id='landing'>
            <HillBackground />
            <section>
                <h1 className='header-1'>Welcome to Token Huntr</h1>
                <h2>Log In or Sign Up for New Adventures</h2>
                <button onClick={() => navigate('/login')} className='landing-button'>
                    Log In
                </button>
                <button onClick={() => navigate('/register')} className='landing-button'>
                    Sign Up
                </button>
            </section>
        </div>
    )
}

export default Landing