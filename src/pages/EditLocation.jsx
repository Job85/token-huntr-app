import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CardContainer, CardOverlay, CardHeader, Icon, Form, InputWrapper, CardInput, CardFooter, CardButton } from "../components/CardStyle";
import "./PageStyles.css"
// useLocation, useNavigate



const EditForm = () => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        latitude: '',
        longitude: '',
        level: ''
    })

    let { location_id } = useParams()

    useEffect(() => {
        let isCancelled = false
        const getCache = async () => {
            const res = await axios.get(
                `http://localhost:3001/api/location/${location_id}`
            )
            if (!isCancelled) {
                setFormValues(res.data)
            }
        }
        getCache()
        return () => {
            isCancelled = true
        }
    }, [location_id])

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const UpdateCache = async () => {
        let url = `http://localhost:3001/api/location/update_cache/${location_id}`
        await axios.put({
            url,
            method: 'put',
            data: formValues
        })
    }
    const handleSubmit = async (e) => {
        console.log('button clicked')
        e.preventDefault();
        UpdateCache();
        setFormValues({
            latitude: '',
            longitude: '',
            level: ''
        })
        axios.put(`http://localhost:3001/api/location/update_cache/${location_id}`, formValues)
        navigate('/locations');
    }

    const handleDelete = async (id) => {
        console.log('button clicked')
        await axios.delete(`http://localhost:3001/api/location/delete_cache/${location_id}`)
        navigate('/locations');
    }


    return (
        <div>
            <CardContainer>
                <CardOverlay>
                    <CardHeader>Edit</CardHeader>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-wrapper">
                            <InputWrapper className="edit">
                                <label
                                    htmlFor="latitude"
                                    className="label"
                                >
                                    Latitude:</label>
                                <CardInput
                                    value={formValues.latitude}
                                    type="text"
                                    placeholder={formValues.latitude}
                                    name="latitude"
                                    onChange={handleChange}
                                    required
                                />
                            </InputWrapper>
                            <InputWrapper className="edit">
                                <label
                                    htmlFor="longitude"
                                    className="label"
                                >Longitude:</label>
                                <CardInput
                                    value={formValues.longitude}
                                    type="text"
                                    placeholder={formValues.longitude}
                                    name="longitude"
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
                                    placeholder={formValues.level}
                                    value={formValues.level}
                                    name='level'
                                    onChange={handleChange}
                                >
                                    <option value="Easy">Easy</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </InputWrapper>
                        </div>
                        <CardButton>Save</CardButton>
                    </Form>
                    <CardButton
                        type="submit"
                        onClick={() => handleDelete(location_id)}
                    >
                        Delete
                    </CardButton>
                </CardOverlay>
            </CardContainer>
        </div>
    )
}

export default EditForm