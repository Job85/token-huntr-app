import React, { useState } from "react";
import { LogInUser } from '../services/AuthServices'
import { useNavigate } from "react-router-dom";

const LogIn = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log('button clicked')
        try {
            const payload = await LogInUser(formValues)
            setFormValues({ email: '', password: '' })
            localStorage.setItem('user', payload.id)
            props.setUser(payload)
            props.toggleAuthenticated(true)
            console.log(payload)
            navigate('/home')
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="container">
            <div className="card-overlay">
                <form className="form" onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        {/* <label htmlFor="email">Email</label> */}
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        {/* <label htmlFor="password">Password</label> */}
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            required
                        />
                    </div>
                    <button
                        className='landing-button'
                        type='submit'
                        disabled={!formValues.email || !formValues.password}
                    >
                        Log In
                    </button>
                    <button
                        className='landing-button'
                        onClick={() => navigate('/register')}
                    >
                        Account Needed. Sign up here!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LogIn
