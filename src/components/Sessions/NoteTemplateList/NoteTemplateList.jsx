import React, { useEffect } from "react";
import styles from "./NoteTemplateList.module.scss";

const NoteTemplateList = () => {
	return (
		<div className={styles.note_templates_wrapper}>
			<div className={styles.note_templates}>
				<h3
					className={`heading__small ${styles.note_templates_heading}`}>
					Browse Templates
				</h3>
				<div className={styles.note_template}>
					<h3 className={styles.note_template_heading}>
						General Meeting
					</h3>
					<p className={styles.note_template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.note_template}>
					<h3 className={styles.note_template_heading}>
						General Meeting
					</h3>
					<p className={styles.note_template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.note_template}>
					<h3 className={styles.note_template_heading}>
						General Meeting
					</h3>
					<p className={styles.note_template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.note_template}>
					<h3 className={styles.note_template_heading}>
						General Meeting
					</h3>
					<p className={styles.note_template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.note_template}>
					<h3 className={styles.note_template_heading}>
						General Meeting
					</h3>
					<p className={styles.note_template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
				<div className={styles.note_template}>
					<h3 className={styles.note_template_heading}>
						General Meeting
					</h3>
					<p className={styles.note_template_desc}>
						Are you meeting with staff of your company? Try this
						template
					</p>
				</div>
			</div>
		</div>
	);
};

export default NoteTemplateList;
