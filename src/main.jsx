import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import { routes } from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = routes;

ReactDOM.createRoot(document.getElementById("root")).render(
	<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
		<RouterProvider router={router} />
	</GoogleOAuthProvider>
);
