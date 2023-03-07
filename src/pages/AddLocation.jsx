import React, { useState } from 'react';
import axios from 'axios'
import { CardContainer, CardOverlay, CardHeader, Icon, Form, InputWrapper, CardInput, CardFooter, CardButton } from "../components/CardStyle";
import { useNavigate } from 'react-router-dom'


const LocationForm = ({ user }) => {
    const user_id = user.id
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        latitude: '',
        longitude: '',
        level: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const CreateCache = async () => {
        // let url = process.env.NODE_ENV === 'local' ? `http://localhost:3001/api//location/create_cache/${user_id}` : `https://token-huntr-server.herokuapp.com/api//location/create_cache/${user_id}`
        let url = process.env.NODE_ENV === `http://localhost:3001/api/location/create_cache/${user_id}`
        await axios({
            url,
            method: 'post',
            data: formValues
        })
    }

    const handleSubmit = async (e) => {
        console.log('button clicked')
        e.preventDefault()
        CreateCache()
        setFormValues({
            latitude: '',
            longitude: '',
            level: ''
        })
        axios.post(`http://localhost:3001/api/location/create_cache/${user_id}`, formValues)
        navigate('/locations');
    }

    return (
        <div>
            <CardContainer>
                <CardOverlay>
                    <CardHeader>Create Cache Location</CardHeader>
                    <Form onSubmit={handleSubmit}>
                        <div className='form-wrapper'>
                            <InputWrapper>
                                <label>Latitude:</label>
                                <CardInput
                                    type="text"
                                    placeholder={'Latitude'}
                                    name="latitude"
                                    value={formValues.latitude}
                                    onChange={handleChange}
                                    required
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <label>Longitude:</label>
                                <CardInput
                                    type="text"
                                    placeholder={'Longitude'}
                                    name="longitude"
                                    value={formValues.longitude}
                                    onChange={handleChange}
                                    required
                                />
                            </InputWrapper>
                            <InputWrapper className="edit">
                                <label
                                    htmlFor="level"
                                    className="label"
                                >Level:</label>
                                <select
                                    id=""
                                    // placeholder={formValues.level}
                                    value={formValues.level}
                                    name='level'
                                    onChange={handleChange}
                                >
                                    <option></option>
                                    <option value="Easy">Easy</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </InputWrapper>
                        </div>
                        <CardButton
                            disabled={
                                !formValues.latitude ||
                                !formValues.longitude ||
                                !formValues.level
                            }
                        >
                            Add Cache
                        </CardButton>
                    </Form>
                </CardOverlay>
            </CardContainer>
        </div>
    )
}

export default LocationForm