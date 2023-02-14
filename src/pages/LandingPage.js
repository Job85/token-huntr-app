import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    let navigate = useNavigate()

    return (
        <div className='lp-background'>
            <section>
                <h1>Welcome to Token Huntr</h1>
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