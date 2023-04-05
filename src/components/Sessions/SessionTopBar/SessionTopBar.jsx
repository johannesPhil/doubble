import React from "react";
import topStyle from "./SessionTopBar.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { initialsImage } from "../../../utils/imageFromInitials";

const SessionTopBar = () => {
	const { user } = useSelector((state) => state.auth);
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
			<div className={topStyle.options}>
				<div>
					<span>
						<img
							src="/images/bell.svg"
							alt="notification bell"
							className={topStyle.options_icon}
						/>
					</span>
					<span>
						<img
							src="/images/search.svg"
							alt="search"
							className={topStyle.options_icon}
						/>
					</span>
				</div>
				<div>
					<span>
						<img
							src="/images/pie-chart.svg"
							alt="pie chart data"
							className={topStyle.options_icon}
						/>
					</span>
					<span>
						<img
							src="/images/headphones.svg"
							alt="audio"
							className={topStyle.options_icon}
						/>
					</span>
				</div>
				<div className={topStyle.options_user}>
					<img
						src={initialsImage(30, user.firstName)}
						alt="user avi"
						className={topStyle.options_img}
					/>
					<button
						type="button"
						className={topStyle.options_share}>
						Share
					</button>
				</div>
			</div>
		</div>
	);
};

export default SessionTopBar;
