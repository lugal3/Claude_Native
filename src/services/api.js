import axios from 'axios';
import { auth } from '../firebase';

const API_URL = import.meta.env.VITE_API_URL;

console.log("API Gateway URL:", API_URL);

export const apiClient = axios.create({
    baseURL: API_URL,
});

apiClient.interceptors.request.use(
    async (config) => {

        const user = auth.currentUser;

        if (user) {
            const token = await user.getIdToken();

            config.headers.Authorization =
                `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getObras = async () => {

    try {

        console.log(
            "Consultando:",
            `${API_URL}/obras`
        );

        const response =
            await apiClient.get('/obras');

        console.log(
            "Respuesta API Gateway:",
            response.data
        );

        return response.data;

    } catch (error) {

        console.error(
            "Error al obtener obras:",
            error
        );

        throw error;
    }
};

export const getAdmin = async () => {

    try {

        const response =
            await apiClient.get('/admin');

        return response.data;

    } catch (error) {

        console.error(
            "Error al consultar Admin:",
            error
        );

        throw error;
    }
};

export const getProductos = async () => {
    const response = await apiClient.get('/productos');
    return response.data;
};

export const getPedidos = async () => {
    const response = await apiClient.get('/pedidos');
    return response.data;
};

export const crearPedido = async (pedido) => {
    const response = await apiClient.post('/pedidos', pedido);
    return response.data;
};