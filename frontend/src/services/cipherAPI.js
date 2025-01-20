// src/services/cipherAPI.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8080'; 

export const encryptMessage = (message, key) => {
    return axios.post(`${API_BASE_URL}/encrypt`, { message, key });
};

export const decryptMessage = (message, key) => {
    return axios.post(`${API_BASE_URL}/decrypt`, { message, key });
};
