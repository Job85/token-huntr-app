import React, { useState } from "react";
import { LogInUser } from '../services/AuthServices';
import { useNavigate } from "react-router-dom";
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CardContainer, CardOverlay, CardHeader, Icon, InputWrapper, CardInput, CardFooter, CardButton } from "../components/CardStyle";

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

        <div id="login">
            <CardContainer>
                <CardOverlay>
                    <CardHeader>Log In</CardHeader>
                    <form onSubmit={handleLogin}>
                        <div className="form-wrapper">
                            <InputWrapper>
                                <Icon icon={faEnvelope} />
                                <CardInput
                                    onChange={handleChange}
                                    type='email'
                                    name='email'
                                    placeholder="Email"
                                    value={formValues.email}
                                    required
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Icon icon={faLock} />
                                <CardInput
                                    onChange={handleChange}
                                    type='password'
                                    name='password'
                                    placeholder="Password"
                                    value={formValues.password}
                                    required
                                />
                            </InputWrapper>
                        </div>
                        <CardFooter>
                            <CardButton
                                type="submit"
                                disabled={!formValues.email || !formValues.password}
                            >
                                Login
                            </CardButton>
                            <a
                                href="/register"
                                className='register-anchor'
                            >
                                Need Account? Sign Up Here!
                            </a>
                        </CardFooter>
                    </form>
                </CardOverlay>
            </CardContainer>
        </div>
    )
}

export default LogIn
