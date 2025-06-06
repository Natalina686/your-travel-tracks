import axios from "axios";

const API_BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export function fetchCampers() {
    return axios.get(`${API_BASE_URL}/campers`);
}