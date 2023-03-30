import React from "react";
import { useLocation } from "react-router-dom";
import { btn, microsoft, google } from "./AuthButton.module.scss";
import { useGoogleLogin } from "@react-oauth/google";

const AuthButton = ({ children, handleClick, target }) => {
	return (
		<button
			className={`${btn} ${target == "microsoft" ? microsoft : google}`}
			onClick={() => handleClick()}>
			{children}
		</button>
	);
};

export default AuthButton;
