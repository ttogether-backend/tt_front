import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const accessToken = cookies.get('accessToken') ? cookies.get('accessToken') : '';

const axiosInstance = axios.create({ 
	baseURL : 'http://localhost:8000',
	withCredentials : true,
	headers : {
			Authorization : `Bearer ${accessToken}`
	}
})

// axios.interceptors.request.use(
// 	(config) => {
// 		config.headers['Authorization'] = `Bearer ${accessToken}`;
// 		return config;
// 	},
// 	(err) => {
// 		return Promise.reject(err);
// 	}
// )

export default axiosInstance;