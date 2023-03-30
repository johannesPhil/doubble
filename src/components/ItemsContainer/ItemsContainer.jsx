import React from "react";
import TemplateCard from "../TemplateCard/TemplateCard";
import itemStyle from "./ItemsContainer.module.scss";

const ItemsContainer = () => {
	const recent = [
		// { name: "Cardily Meeting", resource: "Notes", accessed: "3 mins ago" },
		// { name: "Retreat Meeting", resource: "Notes", accessed: "10 mins ago" },
		// { name: "Retreat Meeting", resource: "Notes", accessed: "10 days ago" },
		// {
		// 	name: "Retreat Meeting",
		// 	resource: "Notes",
		// 	accessed: "10 weeks ago",
		// },
	];

	return (
		<div className={itemStyle.container}>
			<div className="heading">
				<h1 className="heading heading__large">Recently Added</h1>
			</div>
			{recent.length ? (
				<div className={itemStyle.items}>
					{recent.map((data, index) => (
						<TemplateCard
							data={data}
							key={index}
						/>
					))}
				</div>
			) : (
				<div className={itemStyle.emptyItem}>
					<img
						src="/images/paper-clip.gif"
						alt="add note"
					/>
					<p>No Notes has been created</p>
				</div>
			)}
		</div>
	);
};

export default ItemsContainer;
