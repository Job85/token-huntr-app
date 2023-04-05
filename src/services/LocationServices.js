import Client from "./index";

export const GetLocations = async () => {
    try {
        const res = await Client.get('/locations')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetLocationDetails = async (id) => {
    try {
        const res = await Client.get(`/locations/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}