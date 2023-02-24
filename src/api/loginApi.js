import axios from "axios";
import { getEnvVariables } from "../helper/getEnvVariable";

const {VITE_API_URL} = getEnvVariables()

const loginApi = axios.create({
    baseURL: VITE_API_URL
})

// Interceptar peticiones que van o regresan del backend
loginApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})

export default loginApi