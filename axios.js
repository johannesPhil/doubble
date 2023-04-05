import axios from "axios";
import { store } from "./src/Redux";
import { SIGN_OUT } from "./src/Redux/actions/types";
const axiosInstance = axios.create({
	baseURL: "https://api.doubbble.com/api/",
});

axiosInstance.interceptors.request.use(
	(config) => {
		const { token, tokenExpirationDate } = store.getState().auth;
		if (token && tokenExpirationDate) {
			const currentTime = new Date().getTime();
			const expiredToken =
				currentTime > new Date(tokenExpirationDate).getTime();

			if (expiredToken) {
				store.dispatch({ type: SIGN_OUT });
				window.location.href = `/login?from=${window.location.href}`;
			} else {
				config.headers.Authorization = `Bearer ${token}`;
				config.headers["Content-Type"] = "application/json";
				config.headers.Accept = "application/json";
			}
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
