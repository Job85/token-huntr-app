import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// useLocation, useNavigate



const EditForm = () => {

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
        let url = process.env.NODE_ENV === `http://localhost:3001/api/location/update_cache/${location_id}`
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
        // navigate('/locations');
        // window.refresh.reload(false)
    }

    const handleDelete = async (id) => {
        console.log('button clicked')
        await axios.delete(`http://localhost:3001/api/location/delete_cache/${location_id}`)
    }


    return (
        <div className="locations">
            <div className="edit-container">
                <div className="edit-card">
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <span>
                                <label htmlFor="latitude">Latitude:</label>
                                <input
                                    value={formValues.latitude}
                                    type="text"
                                    placeholder={formValues.latitude}
                                    name='latitude'
                                    onChange={handleChange}
                                    // onChange={(e) => { setLatitude(e.target.value) }}
                                    required
                                />
                            </span>
                            <span>
                                <label htmlFor="longitude">Longitude:</label>
                                <input
                                    value={formValues.longitude}
                                    type="text"
                                    placeholder={formValues.longitude}
                                    name='longitude'
                                    onChange={handleChange}
                                    // onChange={(e) => { setLongitude(e.target.value) }}
                                    required
                                />
                            </span>
                            <span>
                                <label htmlFor="level">Level:</label>
                                <select
                                    placeholder={formValues.level}
                                    value={formValues.level}
                                    name='level'
                                    onChange={handleChange}
                                // onChange={(e) => { setLevel(e.target.value) }}
                                >
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </span>
                        </ul>
                        <div>
                            <button>Save</button>
                        </div>
                    </form>
                    {/* <DeleteLocation location_id={location_id} /> */}
                </div>
                <div onClick={() => handleDelete(location_id)}>
                    <button id="deleteButton" type="submit">Delete Cache</button>
                </div>
            </div>
        </div >
    )
}

export default EditForm