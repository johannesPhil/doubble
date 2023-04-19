import React, { useEffect } from "react";
import styles from "./NoteTemplateList.module.scss";

const NoteTemplateList = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.templates}>
				<h3 className={`heading__small ${styles.templates_heading}`}>
					Browse Templates
				</h3>
				<div className={styles.template}>
					<h3 className={styles.template_heading}>General Meeting</h3>
					<p className={styles.template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.template}>
					<h3 className={styles.template_heading}>General Meeting</h3>
					<p className={styles.template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.template}>
					<h3 className={styles.template_heading}>General Meeting</h3>
					<p className={styles.template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.template}>
					<h3 className={styles.template_heading}>General Meeting</h3>
					<p className={styles.template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.template}>
					<h3 className={styles.template_heading}>General Meeting</h3>
					<p className={styles.template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.template}>
					<h3 className={styles.template_heading}>General Meeting</h3>
					<p className={styles.template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
			</div>
		</div>
	);
};

export default NoteTemplateList;
