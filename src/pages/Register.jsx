import React, { useState } from 'react';
import { isEmail } from 'validator';
import { RegisterUser } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CardContainer, CardOverlay, CardHeader, Icon, Form, InputWrapper, CardInput, CardFooter, CardButton } from "../components/CardStyle";
import "./PageStyles.css";

const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role='alert'>
                This field is required!
            </div>
        );
    }
};

const validEmail = value => {
    if (!isEmail(value)) {
        return (
            <div className='alert alert-danger' role='alert'>
                This is not a valid email!
            </div>
        );
    }
};

const validPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className='alert alert-danger' role='alert'>
                Passwords must be between 6 and 40 characters!
            </div>
        )
    }
}


const Register = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await RegisterUser({
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                email: formValues.email,
                password: formValues.password
            })
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            throw error
        }

        navigate('/login')
    }

    return (
        <div id='register'>
            <CardContainer className='cardContainer'>
                <CardOverlay>
                    <CardHeader>Sign Up for Account</CardHeader>
                    <Form onSubmit={handleSubmit}>
                        <div className='form-wrapper'>
                            <InputWrapper className="edit">
                                <label htmlFor='firstName'>First Name</label>
                                <CardInput
                                    onChange={handleChange}
                                    type='text'
                                    name='firstName'
                                    placeholder="John"
                                    value={formValues.firstName}
                                    required
                                />
                            </InputWrapper>
                            <InputWrapper className="edit">
                                <label htmlFor='lastName'>Last Name</label>
                                <CardInput
                                    onChange={handleChange}
                                    type='text'
                                    name='lastName'
                                    placeholder="Doe"
                                    value={formValues.lastName}
                                    required
                                />
                            </InputWrapper>
                            <InputWrapper className="edit">
                                <Icon icon={faEnvelope} />
                                <CardInput
                                    onChange={handleChange}
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                    value={formValues.email}
                                    validations={[required, validEmail]}
                                />
                            </InputWrapper>
                            <InputWrapper className="edit">
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
                            <InputWrapper className="edit">
                                <CardInput
                                    onChange={handleChange}
                                    type='password'
                                    name='confirmPassword'
                                    placeholder="Confirm Password"
                                    value={formValues.confirmPassword}
                                    required
                                />
                            </InputWrapper>
                        </div>
                        <CardButton
                            type='submit'
                            disabled={
                                !formValues.firstName ||
                                !formValues.lastName ||
                                !formValues.email ||
                                (!formValues.password &&
                                    formValues.confirmPassword === formValues.password)
                            }
                        >
                            Register
                        </CardButton>
                    </Form>
                </CardOverlay>
            </CardContainer>
        </div>
    )

}

export default Register