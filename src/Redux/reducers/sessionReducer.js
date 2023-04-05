import * as actions from "../actions/types";

const initialState = { sessions: null };

function sessionsReducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.CREATE_SESSION_SUCCESS:
			return {
				...state,
			};

		case actions.GET_SESSIONS_SUCCESS:
			return { ...state, sessions: payload.data };

		default:
			return state;
	}
}

export default sessionsReducer;
