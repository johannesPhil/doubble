import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const location = useLocation();

	return isAuthenticated ? (
		<Component {...rest} />
	) : (
		<Navigate
			to={"/login"}
			state={{ from: location.pathname }}
		/>
	);
};

export default PrivateRoute;
