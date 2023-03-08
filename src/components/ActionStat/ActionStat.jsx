import React from "react";
import s from "./ActionStat.module.scss";

const ActionStat = ({ total, type }) => {
	return (
		<div
			className={`${s.wrapper} ${
				type == "total"
					? s.total_wrapper
					: type == "resolved"
					? s.resolved_wrapper
					: s.unresolved_wrapper
			} `}>
			<div
				className={`${s.icon} ${
					type == "total"
						? s.total_icon
						: type == "resolved"
						? s.resolved_icon
						: s.unresolved_icon
				}`}>
				<img
					src="/images/clipboard-text-white.svg"
					alt=""
				/>
			</div>
			<span className={s.total_text}>{total}</span>
			<span className={s.label}>
				{type == "total"
					? "Total Action Items"
					: type == "resolved"
					? "Resolved Items"
					: "Unresolved Items"}
			</span>
		</div>
	);
};

export default ActionStat;
