import { combineReducers } from "redux";
import authReducer from "./authReducer";
import sessionsReducer from "./sessionReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	sessions: sessionsReducer,
});

export default rootReducer;
