import React, { useState } from "react";
// import { Redirect } from 'react-router-dom';
import { LogInUser } from '../services/AuthServices'
import { useNavigate } from "react-router-dom";
// import { login } from "../actions/auth";

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
        <div className="signin col">
            <div className="card-overlay centered">
                <form className="col" onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="example@example.com"
                            value={formValues.email}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formValues.password}
                            required
                        />
                    </div>
                    <button type='submit' disabled={!formValues.email || !formValues.password}>
                        Log In
                    </button>
                    <button onClick={() => navigate('/register')}>
                        Account Needed. Sign up here!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LogIn
