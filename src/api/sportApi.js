import axios from "axios";

const API_URL = "http://localhost:8080/api/sports";


// Get all sports

export const getAllSports = () => {
    return axios.get(API_URL);
};


// Get sport by ID

export const getSportById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};


// Add sport

export const addSport = (sport) => {
    return axios.post(API_URL, sport);
};


// Update sport

export const updateSport = (id, sport) => {
    return axios.put(`${API_URL}/${id}`, sport);
};


// Delete sport

export const deleteSport = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
