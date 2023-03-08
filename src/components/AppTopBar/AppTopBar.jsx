import React from "react";
import styles from "./AppTopBar.module.scss";

const AppTopBar = () => {
	return (
		<div className={styles.top}>
			<div className={styles.left}>
				<img className={styles.logo} />
				<span className={styles.search}>
					<img
						src="/images/search.svg"
						alt="search"
					/>
					<input
						type="text"
						placeholder="Search"
					/>
				</span>
			</div>
			<div className={styles.right}>
				<div className={styles.cta}>New Session</div>
				<div className={styles.user}>
					<img
						src="/images/bell.svg"
						className="notification icon"
					/>
					<div className={styles.options}>
						<img
							src="/images/Avatar.svg"
							alt=""
						/>
						<img
							src="/images/caret-down.svg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppTopBar;
