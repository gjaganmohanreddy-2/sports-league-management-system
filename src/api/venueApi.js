import axios from "axios";

const API_URL = "http://localhost:8080/api/venues";

export const getAllVenues = () => {
    return axios.get(API_URL);
};

export const getVenueById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const addVenue = (venue) => {
    return axios.post(API_URL, venue);
};

export const updateVenue = (id, venue) => {
    return axios.put(`${API_URL}/${id}`, venue);
};

export const deleteVenue = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};