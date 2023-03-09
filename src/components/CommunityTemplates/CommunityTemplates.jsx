import React from "react";
import {
	card,
	top,
	desc,
	name,
	info,
	publishing,
	publisher,
	publisher_img,
	feedback,
	feedback_icon,
	feedback_count,
} from "./CommunityTemplates.module.scss";
const CommunityTemplates = ({ data }) => {
	return (
		<div className={card}>
			<div className={top}></div>
			<div className={desc}>
				<div className={publishing}>
					<img
						src="/images/cat.png"
						alt=""
						className={publisher_img}
					/>
					<div className={info}>
						<span className={name}>{data.name}</span>
						<span className={publisher}>{data.publisher}</span>
					</div>
				</div>
				<div className={feedback}>
					<img
						src="/images/heart.svg"
						alt=""
						className={feedback_icon}
					/>
					<span className={feedback_count}>{data.likes}</span>
				</div>
			</div>
		</div>
	);
};

export default CommunityTemplates;
