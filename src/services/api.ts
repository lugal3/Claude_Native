import axios from 'axios';
import { apiConfig } from '../config/authConfig';

// Interceptor base (opcional, si se requiere configuración global)
export const apiClient = axios.create({
    baseURL: apiConfig.backendEndpoint,
});

export const getObras = async (accessToken: string) => {
    try {
        // Petición al backend simulado
        const response = await apiClient.get('', {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Token de Entra ID adjunto
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener obras de la API:", error);
        throw error;
    }
};
