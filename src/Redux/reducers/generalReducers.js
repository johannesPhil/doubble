import { LOAD_REQUEST, REQUEST_ERROR, REQUEST_SUCCESS } from "../actions/types";

const initialState = {
	loading: false,
	error: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOAD_REQUEST:
			return { ...state, loading: true };

		case REQUEST_SUCCESS:
			return { ...state, loading: false };

		case REQUEST_ERROR:
			return { ...state, error: message };
		default:
			return state;
	}
};
