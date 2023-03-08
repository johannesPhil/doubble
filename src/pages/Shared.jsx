import React from "react";
import TemplateCard from "../components/TemplateCard/TemplateCard";

const Shared = () => {
	const meetingTemplates = [
		{
			name: "Standup Meeting",
			img: "/images/standup.png",
			users: [
				{ name: "John Peter", img: "/images/cat.png" },
				{ name: "Jon Jones" },
				{ name: "Emmanuel Allison" },
			],
			resource: "Notes",
			accessed: "10 days ago",
		},
		{
			name: "Retrospective Meeting",
			img: "/images/retro.png",
			users: [
				{ name: "Jon Jones" },
				{ name: "John Peter", img: "/images/cat.png" },
				{ name: "Betty Paul" },
			],
			resource: "Notes",
			accessed: "10 days ago",
		},
	];

	return (
		<div className="shared">
			<div className="shared__heading">
				<h2 className="heading__large">Shared Session</h2>
				<h3 className="heading__small">All sessions shared with you</h3>
			</div>
			<div className="shared__list">
				{meetingTemplates.length
					? meetingTemplates.map((template, index) => (
							<TemplateCard
								data={template}
								key={index}
							/>
					  ))
					: null}
			</div>
		</div>
	);
};

export default Shared;
