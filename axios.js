import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.doubbble.com/api/",
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("doubble_token");

		config.headers.Authorization = `Bearer ${token}`;
		config.headers["Content-Type"] = "application/json";
		config.headers.Accept = "application/json";

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
