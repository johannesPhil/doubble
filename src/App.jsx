import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

import "./scss/main.scss";

function App() {
	const router = routes;

	return (
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
			<RouterProvider router={router} />
		</GoogleOAuthProvider>
	);
}

export default App;
