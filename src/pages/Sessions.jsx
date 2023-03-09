import React from "react";
import BrowseTemplateCard from "../components/BrowseTemplatesCard/BrowseTemplateCard";
import ItemsContainer from "../components/ItemsContainer/ItemsContainer";
import MeetingListCard from "../components/MeetingListCard/MeetingListCard";

const meetingTemplates = [
	{ name: "Standup Meeting", img: "/images/standup.png" },
	{ name: "Retrospective Meeting", img: "/images/retro.png" },
	{ name: "Retrospective Meeting", img: "/images/retro.png" },
];

const Sessions = () => {
	return (
		<div className="sessions">
			<div className="sessions__home">
				<div className="sessions__heading">
					<h2 className="heading heading__large">Create Session</h2>
					<p className="subtitle">
						Turn any meeting into an action plan
					</p>
				</div>
				<div className="templates">
					<div className="template">
						<div className="template__card template__card--blank"></div>
						<p className="template__name">Blank</p>
					</div>
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
		</div>
	);
};

export default Sessions;
