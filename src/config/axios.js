import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_REST_ENDPOINT
})

export default clienteAxios;