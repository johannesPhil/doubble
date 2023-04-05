import axiosInstance from "../../../axios";
import { loadRequest } from "./generalActions";
import {
	CREATE_SESSION_SUCCESS,
	GET_SESSIONS_SUCCESS,
	REQUEST_ERROR,
} from "./types";

export const createSession = (sessionData) => (dispatch) => {
	dispatch(loadRequest());
	axiosInstance
		.post(`sections`, sessionData)
		.then((response) => {
			const { data } = response;
			console.log(data);
			dispatch({
				type: CREATE_SESSION_SUCCESS,
				payload: data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getSessions = () => (dispatch) => {
	dispatch(loadRequest());

	axiosInstance
		.get(`sections`)
		.then((response) => {
			console.log({ sessions: response.data });
			dispatch({
				type: GET_SESSIONS_SUCCESS,
				payload: response.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: REQUEST_ERROR,
				payload: error.message,
			});
		});
};

export const getSession = (id) => (dispatch) => {
	dispatch(loadRequest());
	axiosInstance
		.get(`sections/${id}?withNotes=1`)
		.then((response) => {
			console.log({ session: response.data });
		})
		.catch((error) => {
			dispatch({
				type: REQUEST_ERROR,
				payload: error.message,
			});
		});
};
