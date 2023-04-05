import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import { routes } from "./routes";
import { store, persistor } from "./Redux";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
