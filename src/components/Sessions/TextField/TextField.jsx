import React, { useState, useEffect } from "react";
import styles from "./TextField.module.scss";

const TextField = ({ sessionId, type }) => {
	const [text, setText] = useState({
		textContent: "",
		tags: [],
	});

	const [tag, setTag] = useState("");

	function trackTag(event) {
		setTag(event.target.value);
	}

	function addTag(event) {
		if (event.keyCode !== 13) {
			return false;
		}

		let tag = e.target.value;
		setText({ ...text, tags: [...text.tags, tag] });
		setTag("");
	}

	function submitContent(event) {
		setText({ textContent: "", tags: [] });
	}

	useEffect(() => {}, []);
	return (
		<div className={styles.container}>
			<textarea
				className={styles.input}
				placeholder={
					type == "note" ? "Add a private note" : "Add a comment"
				}></textarea>
			<div className={styles.controls}>
				<input
					type="text"
					placeholder="Add Tag(s)"
					value={tag}
					className={styles.tagInput}
					onKeyDown={addTag}
					onChange={trackTag}
				/>

				<button
					type="button"
					className={styles.save}
					onClick={submitContent}>
					Save
				</button>
			</div>

			<div className={styles.tags}>
				{text.tags.length
					? text.tags.map((tag) => (
							<span
								className={styles.tag}
								key={tag}>
								{tag}
							</span>
					  ))
					: null}
			</div>
		</div>
	);
};

export default TextField;
