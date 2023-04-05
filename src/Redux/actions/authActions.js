import axiosInstance from "../../../axios";
import { loadRequest } from "./generalActions";
import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGN_OUT } from "./types";
import jwt_decode from "jwt-decode";

export const signIn = (token) => (dispatch) => {
	dispatch(loadRequest());

	axiosInstance
		.post(`auth/google`, { access_token: token })
		.then(({ data }) => {
			const decodedData = jwt_decode(data.data);

			dispatch({
				type: SIGNIN_SUCCESS,
				payload: { decodedData, token: data.data },
			});
		})
		.catch((error) => {
			dispatch({
				type: SIGNIN_ERROR,
			});
		});
};

export const signOut = (dispatch) => {
	localStorage.removeItem("doubbleToken");
	dispatch({
		type: SIGN_OUT,
	});
};
