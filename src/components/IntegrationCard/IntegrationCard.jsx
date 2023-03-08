import React from "react";
import styles from "./IntegrationCard.module.scss";

const IntegrationCard = ({ app }) => {
	const userData = {
		integrations: [
			{
				app: "zoom",
				slug: "zoom",
			},
			// { app: "Microsoft Teams", slug: "microsoft-teams" },
		],
	};

	const checkStatus = () => {
		let check = userData.integrations.filter(
			(int) => int.app.toLowerCase() == app.name.toLowerCase()
		);
		return check;
	};

	return (
		<div className={styles.card}>
			<h3 className={styles.name}>Zoom</h3>
			<p className={styles.text}>{app.desc}</p>
			<div className={styles.app}>
				<img
					src={`/images/${app.name.toLowerCase()}.svg`}
					className={styles.icon}
				/>
				<span
					className={
						checkStatus().length ? styles.installed : styles.status
					}>
					{checkStatus().length ? "Installed" : "not installed"}
				</span>
			</div>
		</div>
	);
};

export default IntegrationCard;
