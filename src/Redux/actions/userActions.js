import axiosInstance from "../../../axios";
import { loadRequest } from "./generalActions";

export const getUsers = () => {
	return async (dispatch) => {
		dispatch(loadRequest());
		try {
			const response = await axiosInstance.get("users");
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};
};
