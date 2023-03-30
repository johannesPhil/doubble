import React from "react";
import style from "./Private.module.scss";

const PrivateNote = ({ note }) => {
	return (
		<div className={style.note}>
			<p className={style.content}>{note.text}</p>
			<div className={style.tags}>
				{note.tags.length
					? note.tags.map((tag) => <span key={tag}>{`#${tag}`}</span>)
					: null}
			</div>
		</div>
	);
};

export default PrivateNote;
