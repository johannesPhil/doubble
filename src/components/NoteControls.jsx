import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { newNoteToggle } from "../Redux/actions/sessionActions";

const NoteControls = () => {
	const dispatch = useDispatch();
	const { newNote } = useSelector((state) => state.sessions);
	return (
		<div className="control">
			<span
				className={`control__new ${
					newNote.status ? "control__new--active" : ""
				}`}
				onClick={() => {
					window.scrollTo(0, document.body.scrollHeight);
					dispatch(newNoteToggle());
				}}>
				<img
					src="/images/plus-gray.svg"
					alt="add note"
					className={`${newNote.status && "control__new--close"}`}
				/>
				{newNote.status ? "Cancel" : "New Note"}
			</span>
			<span className="control__color">
				<input
					type="color"
					name="color"
					id="color"
				/>
				<span className="control__pseudo"></span>
				Select Color
			</span>
			<span className="control__templates">
				<img
					src="/images/file.svg"
					alt=""
				/>
				Templates
			</span>
		</div>
	);
};

export default NoteControls;
