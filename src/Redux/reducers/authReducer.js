import * as actions from "../actions/types";
import generalReducers from "./generalReducers";

const initialState = {
	user: {},
	isAuthenticated: false,
};

function authReducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.SIGNIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				user: payload,
				loading: generalReducers(
					state.loading,
					actions.REQUEST_SUCCESS
				),
			};

		case actions.SIGNIN_ERROR:
			return {
				...state,
				isAuthenticated: false,
				error: generalReducers(state.error, actions.REQUEST_ERROR),
			};

		case actions.SIGN_OUT:
			return { ...state, isAuthenticated: false, user: {} };

		default:
			return state;
	}
}

export default authReducer;
