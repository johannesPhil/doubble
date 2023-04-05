import React from "react";
import { initialsImage } from "../../utils/imageFromInitials";
import {
	card,
	top,
	desc,
	name,
	meta,
	resource,
	users,
	user,
} from "./TemplateCard.module.scss";

const TemplateCard = ({ data }) => {
	return (
		<div className={card}>
			<div className={top}></div>
			<div className={desc}>
				<div className="">
					<p className={name}>{data.title}</p>
					<p className={meta}>
						In{" "}
						<span className={resource}>
							{data.resource ? data.resource : ""}
						</span>{" "}
						| {data.accessed ? data.accessed : ""}
					</p>
				</div>
				{data.users ? (
					<div className={users}>
						{data.users.map((userData) => (
							<img
								className={user}
								src={
									userData.img ||
									initialsImage(40, userData.name)
								}
								key={userData.name}
							/>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default TemplateCard;
