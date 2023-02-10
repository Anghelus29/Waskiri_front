import axios from 'axios';

const base_url = 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: base_url,
});

api.interceptors.request.use(
    (request) => {
        request.headers['Authorization'] = `Bearer ${localStorage.getItem('Token')}`;
        return request;
    }, (err) => err
);

api.interceptors.response.use(
    (response) => response,
    (err) => {
        if(!err.response) {
            return Promise.reject({
                status: 999,
                timestamp: new Date(),
                message: 'Se ha producido un error inesperado',
                error: 'Error inesperado'
            })
        }
        return Promise.reject(err.response.data);
    }
);

export default api;