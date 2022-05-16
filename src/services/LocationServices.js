import Client from "./index";

export const GetLocations = async () => {
    try {
        const res = await Client.get('/locations')
        console.log(res, 'getting locations')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetLocationDetails = async (id) => {
    try {
        const res = await Client.get(`/locations/${id}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}