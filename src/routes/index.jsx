import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../components/PrimaryLayout";
import ActionItems from "../pages/ActionItems";
import Community from "../pages/Community";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Meetings from "../pages/Meetings";
import Session from "../pages/Session";
import Sessions from "../pages/Sessions";
import Shared from "../pages/Shared";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";

import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <SignUp />,
	},
	{
		path: "/app",

		children: [
			{
				path: "",
				element: <PrivateRoute element={PrimaryLayout} />,
				children: [
					{
						index: true,

						element: <Welcome />,
					},
					{
						path: "action-items",
						element: <ActionItems />,
					},
					{ path: "sessions", element: <Sessions /> },
					{
						path: "shared",
						element: <Shared />,
					},
				],
			},
			{
				path: "session/:id?",
				element: <PrivateRoute element={Session} />,
			},
			{
				path: "meetings",
				element: <Meetings />,
			},

			{
				path: "community",
				element: <Community />,
			},
		],
	},
]);
