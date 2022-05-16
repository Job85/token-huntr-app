import React, { useState } from 'react';
import { isEmail } from 'validator';
import { RegisterUser } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';
// import { register } from '../store/actions/AuthActions';

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
        console.log('button clicked')
        e.preventDefault()
        // try {
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
        // } catch (error) {
        //     throw error
        // }

        navigate('/login')
    }

    return (
        <div className='login col'>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='form-group'>
                        <label htmlFor='username'>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            placeholder='Joe'
                            value={formValues.firstName}
                            onChange={handleChange}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='username'>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            placeholder='Schmoe'
                            value={formValues.lastName}
                            onChange={handleChange}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            placeholder='example@email.com'
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            validations={[required, validEmail]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='password'
                            value={formValues.password}
                            onChange={handleChange}
                            validations={[required, validPassword]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            validations={[required]}
                        />
                    </div>
                </div>
                <button
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
                </button>
            </form>
        </div>
    )

}

export default Register