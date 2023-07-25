import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'http://localhost',
    Headers: {
        'content-type': 'application/json'
    }
})

export default axiosInstance