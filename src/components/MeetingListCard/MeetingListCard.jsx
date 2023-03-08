import React from "react";
import {
	template,
	name,
	card,
	overlay,
	cta,
	image,
} from "./MeetingListCard.module.scss";

const MeetingListCard = ({ img, name: desc }) => {
	return (
		<div className={template}>
			<div className={card}>
				<img
					src={img}
					className={image}
				/>
				<div className={overlay}>
					<span className={cta}>Use Template</span>
				</div>
			</div>
			<p className={name}>{desc}</p>
		</div>
	);
};

export default MeetingListCard;
