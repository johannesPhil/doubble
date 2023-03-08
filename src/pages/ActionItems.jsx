import React from "react";
import ActionItemsGroup from "../components/ActionItemsGroup/ActionItemsGroup";
import ActionList from "../components/ActionList/ActionList";
import ActionStat from "../components/ActionStat/ActionStat";

const actions = [
	{
		desc: "Complete work",
		origin: "Note",
		status: false,
	},
	{
		desc: "New Task",
		origin: "Note",
		status: true,
	},
	{
		desc: "Reduce load time",
		origin: "Note",
		status: false,
	},
];

const actionItems = {
	total: { total: 20 },
	resolved: { total: 12 },
	unresolved: { total: 8 },
};

const actionSections = [
	{
		name: "Top Priority",
		items: [
			{
				desc: "Reduce load time",
				origin: "Note",
				status: false,
			},
			{
				desc: "Reduce load time",
				origin: "Note",
				status: false,
			},
			{
				desc: "Reduce load time",
				origin: "Note",
				status: false,
			},
		],
	},
	{
		name: "Done",
		items: [
			{
				desc: "Reduce load time",
				origin: "Note",
				status: false,
			},
		],
	},
	{
		name: "Ongoing",
		items: [
			// {
			// 	desc: "Reduce load time",
			// 	origin: "Note",
			// 	status: false,
			// },
		],
	},
];

const ActionItems = () => {
	return (
		<div className="action">
			<div className="action__banner">
				<div className="action__headings">
					<h1 className="heading">Action Items</h1>
					<p className="subtitle">Your productivity not so good</p>
				</div>
				<div className="action__cta">
					<img
						src="/images/nodes.svg"
						alt=""
					/>
					<span>Create a section</span>
				</div>
			</div>
			<div className="actions">
				<div className="actions__container">
					<div className="actions__list">
						{actions.map((action) => (
							<ActionList
								action={action}
								key={action.desc}
							/>
						))}
					</div>
					{/* <div className="actions__status"> */}
					{actionSections.length
						? actionSections.map((section) => (
								<ActionItemsGroup data={section} />
						  ))
						: null}
					{/* </div> */}
				</div>
				<div className="actions__stats">
					<h3>Action Item Stats</h3>
					<ActionStat
						type={"total"}
						total={actionItems.total.total}
					/>
					<ActionStat
						type={"resolved"}
						total={actionItems.resolved.total}
					/>
					<ActionStat
						type={"unresolved"}
						total={actionItems.unresolved.total}
					/>
				</div>
			</div>
		</div>
	);
};

export default ActionItems;
