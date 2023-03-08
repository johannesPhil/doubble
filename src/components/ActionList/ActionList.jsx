import React, { useState } from "react";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import styles from "./ActionList.module.scss";

const ActionList = ({ action }) => {
	const [isDone, setIsDone] = useState(action.status);
	return (
		<div className={styles.itemContainer}>
			<div className={styles.item}>
				<div className={styles.activity}>
					<input
						type="checkbox"
						name={action.desc}
						id="status"
						className={styles.input}
						checked={action.status}
						onChange={() => setIsDone(!done)}
					/>{" "}
					<span className={styles.pseudoChecked}></span>
					<label
						htmlFor={action.desc}
						className="">
						{action.desc}
					</label>
				</div>
				<div className={styles.assign}>
					<div className={styles.time}>
						<img
							src="/images/clock.svg"
							alt="time"
						/>
					</div>
					<div className={styles.issuer}>
						<img
							src="/images/cat.png"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="origin">{action.origin}</div>
		</div>
	);
};

export default ActionList;
