import React from "react";
import { useLocation } from "react-router-dom";
import { btn, microsoft, google } from "./AuthButton.module.scss";

const AuthButton = ({ target, text, hover }) => {
	const location = useLocation();
	console.log(target);
	console.log(microsoft, google);

	const authAction = () => {
		switch (location.pathname) {
			case "/login":
				console.log("log in", target);
				break;
			case "/register":
				console.log("register", target);
			default:
				return;
		}
	};

	return (
		<button
			className={`${btn} ${target == "microsoft" ? microsoft : google}`}
			onClick={() => authAction()}>
			<img
				src={`/images/${target}.png`}
				alt=""
			/>
			<span>{text}</span>
		</button>
	);
};

export default AuthButton;
