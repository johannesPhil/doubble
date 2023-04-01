import axios from "axios";
import axiosInstance from "../../../axios";
import { loadRequest } from "./generalActions";
import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGN_OUT } from "./types";

function generateAuthAction(actionType, apiEndpoint, method) {
	return function (dispatch, getState) {
		dispatch({ type: `${actionType}_REQUEST` });

		if (apiEndpoint) {
			axiosInstance({ method: method, url: apiEndpoint })
				.then((response) => {
					dispatch({
						type: `${actionType}_SUCCESS`,
						payload: response.data,
					});
				})
				.catch((error) => {
					dispatch({ type: `${actionType}_ERROR`, payload: error });
				});
		}
	};
}

export const signIn = (token) => (dispatch) => {
	dispatch(loadRequest());

	axiosInstance
		.post(`auth/google`, { access_token: token })
		.then(({ data }) => {
			localStorage.setItem("doubbleToken", JSON.stringify(data));
			dispatch({
				type: SIGNIN_SUCCESS,
				payload: data,
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
