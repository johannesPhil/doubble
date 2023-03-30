import React from "react";
import styles from "./Comment.module.scss";
import { getElapsedInterval } from "../../../utils/dateStringParser";

const Comment = ({ comment }) => {
	return (
		<div className={styles.container}>
			<div className={styles.tag}>
				{comment.tags.length
					? comment.tag.map(<span key={tag}>{tag}</span>)
					: null}
			</div>
			<div className={styles.meta}>
				<span className="">{"you"}</span>
				<span className="">{getElapsedInterval(comment.time)}</span>
			</div>
			<div className={styles.text}>{comment.text}</div>
			<div className={styles.author}>{`@${comment.author}`}</div>
		</div>
	);
};

export default Comment;
