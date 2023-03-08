import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "./components/PrimaryLayout";
import ActionItems from "./pages/ActionItems";
import Community from "./pages/Community";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Meetings from "./pages/Meetings";
import Sessions from "./pages/Sessions";
import Shared from "./pages/Shared";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";

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
		path: "register",
		element: <SignUp />,
	},
	{
		path: "/app",

		children: [
			{
				path: "",
				element: <PrimaryLayout />,

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
