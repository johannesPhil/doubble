import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import HomeIcon from "./SVGIcons/HomeIcon";
import ClipBoardTextIcon from "./SVGIcons/ClipBoardTextIcon";
import CalendarIcon from "./SVGIcons/CalendarIcon";
import FileIcon from "./SVGIcons/FileIcon";
import MessageIcon from "./SVGIcons/MessageIcon";
import PinIcon from "./SVGIcons/PinIcon";

const SideNav = () => {
	const isMatch = useMatch("/app");
	return (
		<div className="side">
			<nav className="side__navigation">
				<NavLink
					to="/app"
					className={`side__link ${
						isMatch ? "side__link--active " : "side__link--pending"
					}
					`}>
					<HomeIcon color={isMatch ? "white" : "black"} />
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
					{({ isActive }) => (
						<>
							<ClipBoardTextIcon
								color={isActive ? "white" : "black"}
							/>
							<span className="side__test">Action Items</span>
						</>
					)}
				</NavLink>
				<NavLink
					to="meetings"
					className={({ isActive }) => {
						return isActive
							? "side__link side__link--active"
							: " side__link";
					}}>
					{({ isActive }) => (
						<>
							<CalendarIcon
								color={isActive ? "white" : "black"}
							/>
							<span className="side__test">Meetings</span>
						</>
					)}
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
					{({ isActive }) => (
						<>
							<FileIcon color={isActive ? "white" : "black"} />
							<span className="side__test">Sessions</span>
						</>
					)}
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
					{({ isActive }) => (
						<>
							<MessageIcon color={isActive ? "white" : "black"} />
							<span className="side__test">Shared with me</span>
						</>
					)}
				</NavLink>
				<NavLink
					to="shared"
					className="side__link">
					{({ isActive }) => (
						<>
							<PinIcon color={isActive ? "white" : "black"} />
							<span className="side__test">Archives</span>
						</>
					)}
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
					{({ isActive }) => (
						<>
							<PinIcon color={isActive ? "white" : "black"} />
							<span className="side__test">Community</span>
						</>
					)}
				</NavLink>
			</nav>

			<div className="side__notes"></div>
			<div className="side__teams"></div>
		</div>
	);
};

export default SideNav;
