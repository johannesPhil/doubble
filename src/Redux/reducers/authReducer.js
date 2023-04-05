import * as actions from "../actions/types";
import generalReducers from "./generalReducers";

const initialState = {
	user: null,
	isAuthenticated: false,
	token: null,
	tokenExpirationDate: null,
};

function authReducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.SIGNIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				user: {
					firstName: payload.decodedData.first_name,
					lastName: payload.decodedData.last_name,
					email: payload.decodedData.email,
				},
				token: payload.token,
				tokenExpirationDate: new Date(payload.decodedData.exp * 1000),

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
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
				tokenExpirationDate: null,
			};

		case actions.CHECK_TOKEN_VALIDITY:
			const currentTime = new Date();
			return state.tokenExpirationDate < currentTime
				? {
						...state,
						user: null,
						isAuthenticated: false,
						tokenExpirationDate: null,
				  }
				: state;

		default:
			return state;
	}
}

export default authReducer;
