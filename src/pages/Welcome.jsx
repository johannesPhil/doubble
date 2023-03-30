import React from "react";
import { NavLink } from "react-router-dom";
import BrowseTemplateCard from "../components/BrowseTemplatesCard/BrowseTemplateCard";
import Integrations from "../components/Integrations/Integrations";
import ItemsContainer from "../components/ItemsContainer/ItemsContainer";
import MeetingListCard from "../components/MeetingListCard/MeetingListCard";

const Welcome = () => {
	const meetingTemplates = [
		{ name: "Standup Meeting", img: "/images/standup.png" },
		{ name: "Retrospective Meeting", img: "/images/retro.png" },
	];

	return (
		<div className="welcome">
			<div className="welcome__home">
				<div className="welcome__heading">
					<h2 className="heading heading__large">Create Session</h2>
					<p className="subtitle">
						Turn any meeting into an action plan
					</p>
				</div>
				<div className="templates">
					<NavLink
						to={"note"}
						className="template">
						<div className="template__card template__card--blank"></div>
						<p className="template__name">Blank</p>
					</NavLink>
					{meetingTemplates.map((template, index) => (
						<MeetingListCard
							img={template.img}
							name={template.name}
							key={index}
						/>
					))}

					<BrowseTemplateCard />
				</div>
				<ItemsContainer />
			</div>
			<Integrations />
		</div>
	);
};

export default Welcome;
