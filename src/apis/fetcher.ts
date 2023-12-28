import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getLocalStorage } from "../utils/helpers";
import { CurrentUser } from "../types/user.type";
import { CURRENT_USER } from "../utils/constants";

const fetcher: AxiosInstance = axios.create({
    baseURL: import.meta.env.API_BASE_URL,
    headers: {
        TokenCybersoft: import.meta.env.CYBERSOFT_TOKEN,
    }
});

fetcher.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const user = getLocalStorage<CurrentUser>(CURRENT_USER);
    if (user) {
        config.headers.Authorization = user.accessToken;

    }
    return config;
})

fetcher.interceptors.response.use((response: AxiosResponse) => {

    return response;
})



export default fetcher;