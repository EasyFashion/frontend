import axios from 'axios'

const config = {
    // baseURL: location.origin
    baseURL: 'https://jsonplaceholder.typicode.com/todos/2'
}

const httpClient = axios.create(config);

const authInterceptor = config => {
    const authToken = localStorage.getItem("user-token");
    config.headers.Authorization = authToken;

    return config;
};

httpClient.interceptors.request.use(authInterceptor);

httpClient.interceptors.response.use(
    response => {
        return response;
    },
    
    error => {
        return Promise.reject(error);
    }
);

export { httpClient };