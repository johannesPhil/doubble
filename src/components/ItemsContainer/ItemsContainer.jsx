import React from "react";
import TemplateCard from "../TemplateCard/TemplateCard";

const ItemsContainer = () => {
	const recent = [
		{ name: "Cardily Meeting", resource: "Notes", accessed: "3 mins ago" },
		{ name: "Retreat Meeting", resource: "Notes", accessed: "10 mins ago" },
		{ name: "Retreat Meeting", resource: "Notes", accessed: "10 days ago" },
		{
			name: "Retreat Meeting",
			resource: "Notes",
			accessed: "10 weeks ago",
		},
	];

	return (
		<div className="container">
			<div className="heading">
				<h1 className="heading heading__large">Recently Added</h1>
			</div>
			<div className="items">
				{recent.map((data, index) => (
					<TemplateCard
						data={data}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default ItemsContainer;
