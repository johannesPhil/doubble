import React from "react";
import { Outlet } from "react-router-dom";
import AppTopBar from "./AppTopBar/AppTopBar";
import Integrations from "./Integrations/Integrations";
import SideNav from "./SideNav";

const PrimaryLayout = () => {
	return (
		<div className="primary">
			<AppTopBar />
			<div className="primary__view">
				<SideNav />
				<Outlet />
			</div>
		</div>
	);
};

export default PrimaryLayout;
