import { applyMiddleware, legacy_createStore, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const middleWare = [thunk];
const persistConfig = {
	key: "doubble",
	storage,
	whitelist: ["auth"],
};

const enhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				trace: true,
				traceLimit: 25,
		  })
		: compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(
	persistedReducer,
	enhancers(applyMiddleware(...middleWare))
);
const persistor = persistStore(store);

export { store, persistor };
