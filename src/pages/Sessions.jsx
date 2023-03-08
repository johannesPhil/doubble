import React from "react";
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
			<div className="welcome__home">
				<div className="welcome__heading">
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

					<div className="template">
						<div className="template__card template__card--browse">
							<span className="template__card--inner"></span>
							<span className="template__card-text">
								Templates
							</span>
						</div>
						<p className="template__name">Browse All</p>
					</div>
				</div>
				<ItemsContainer />
			</div>
		</div>
	);
};

export default Sessions;
