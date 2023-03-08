import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
	return (
		<div className="side">
			<nav className="side__navigation">
				<NavLink
					to="./"
					className={({ isActive, isPending }) => {
						return isActive
							? "side__link side__link--active"
							: isPending
							? " side__link--pending"
							: " side__link";
					}}>
					<span className="side__icon side__icon--home"></span>
					<span className="side__test">Welcome</span>
				</NavLink>
				<NavLink
					to="action-items"
					className={({ isActive, isPending }) => {
						return isActive
							? "side__link side__link--active"
							: isPending
							? " side__link--pending"
							: " side__link";
					}}>
					<span className="side__icon side__icon--action-items"></span>
					<span className="side__test">Action Items</span>
				</NavLink>
				<NavLink
					to="meetings"
					className={({ isActive, isPending }) => {
						return isActive
							? "side__link side__link--active"
							: isPending
							? " side__link--pending"
							: " side__link";
					}}>
					<span className="side__icon side__icon--meetings"></span>
					<span className="side__test">Meetings</span>
				</NavLink>
				<NavLink
					to="sessions"
					className={({ isActive, isPending }) => {
						return isActive
							? "side__link side__link--active"
							: isPending
							? " side__link--pending"
							: " side__link";
					}}>
					<span className="side__icon side__icon--session"></span>
					<span className="side__test">Sessions</span>
				</NavLink>
				<NavLink
					to="shared"
					className={({ isActive, isPending }) => {
						return isActive
							? "side__link side__link--active"
							: isPending
							? " side__link--pending"
							: " side__link";
					}}>
					<span className="side__icon side__icon--shared"></span>
					<span className="side__test">Shared with me</span>
				</NavLink>
				<NavLink
					to=""
					className="side__link">
					<span className="side__icon side__icon--archives"></span>
					<span className="side__test">Archives</span>
				</NavLink>
				<NavLink
					to="community"
					className={({ isActive, isPending }) => {
						return isActive
							? "side__link side__link--active"
							: isPending
							? " side__link--pending"
							: " side__link";
					}}>
					<span className="side__icon side__icon--community">
						Community
					</span>
					<span className="side__test"></span>
				</NavLink>
			</nav>

			<div className="side__notes"></div>
			<div className="side__teams"></div>
		</div>
	);
};

export default SideNav;
