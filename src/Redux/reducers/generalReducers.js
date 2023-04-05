import { LOAD_REQUEST, REQUEST_ERROR, REQUEST_SUCCESS } from "../actions/types";

const initialState = {
	loading: false,
	error: null,
	response: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOAD_REQUEST:
			return { ...state, loading: true };

		case REQUEST_SUCCESS:
			return { ...state, response: payload, loading: false };

		case REQUEST_ERROR:
			return { ...state, error: payload };
		default:
			return state;
	}
};
