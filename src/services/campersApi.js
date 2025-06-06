import axios from "axios";

const API_BASE_URL = 'https://api.example.com';

export function fetchCampers() {
    return axios.get(`${API_BASE_URL}/campers`);
}