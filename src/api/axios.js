import axios from 'axios';
const options =  {
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
}
const instance = axios.create(options);

instance.defaults.timeout = 2500;

instance.interceptors.request.use((config) => ({
    ...config,
    headers: {
        ...config.headers,
        'X-RapidAPI-Key': '4fbbe7b512msh501191c477af2e2p1d23c8jsn5f6cd26fa675',
    },
}))

export default instance;
