import React from "react";
import IntegrationCard from "../IntegrationCard/IntegrationCard";

const Integrations = () => {
	const availableApps = [
		{
			name: "zoom",
			desc: "Keep Double close at hand with our Microsoft Teams app.",
		},
		{
			name: "microsoft teams",
			desc: "Keep Double close at hand with our Microsoft Teams app.",
		},
	];

	return (
		<div className="integrations">
			{availableApps.map((app) => (
				<IntegrationCard
					app={app}
					key={app.name}
				/>
			))}
		</div>
	);
};

export default Integrations;
