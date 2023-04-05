import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { CHECK_TOKEN_VALIDITY } from "../Redux/actions/types";

const PrivateRoute = ({ element: Component, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.auth);
	const location = useLocation();

	useEffect(() => {
		dispatch({ type: CHECK_TOKEN_VALIDITY });
	}, [isAuthenticated]);

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
