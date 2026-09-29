import axios from 'axios';
import { apiConfig } from '../config/authConfig';
import { auth } from '../firebase';

export const apiClient = axios.create({
    baseURL: apiConfig.backendEndpoint,
});

apiClient.interceptors.request.use(async (config) => {
    if (auth.currentUser) {
        const token = await auth.currentUser.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const getObras = async () => {
    try {
        const response = await apiClient.get('');
        return response.data;
    } catch (error) {
        console.error("Error al obtener obras de la API:", error);
        throw error;
    }
};
