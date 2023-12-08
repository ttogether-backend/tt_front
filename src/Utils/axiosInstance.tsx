import axios from 'axios';

const axiosInstance = axios.create({ 
	baseURL : 'http://localhost:8000',
	withCredientials : true,
	headers : {
			Authorization : ''
	}
})

axios.interceptors.request.use(
	(config) => {
		config.headers['Authorization'] = localStorage.getItem('accessToken');
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
)

export default axiosInstance;