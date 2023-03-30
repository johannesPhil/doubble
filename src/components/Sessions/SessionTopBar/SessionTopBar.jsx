import React from "react";
import topStyle from "./SessionTopBar.module.scss";
import { NavLink } from "react-router-dom";

const SessionTopBar = () => {
	return (
		<div className={topStyle.top}>
			<NavLink
				to={-1}
				className={topStyle.nav}>
				<img
					src="/images/top-right.svg"
					alt="previous page"
				/>
				<span>Back</span>
			</NavLink>
			<div className={topStyle.options}></div>
		</div>
	);
};

export default SessionTopBar;
