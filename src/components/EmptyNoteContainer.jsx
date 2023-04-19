import React, { useState, useEffect } from "react";
import NoteEditor from "./Editor/NoteEditor";
import NoteTemplateList from "./Sessions/NoteTemplateList/NoteTemplateList";
import NoteOptionsModal from "./NoteOptionsModal";
import ShareModal from "./ShareModal";
import { useCloseModals } from "../utils/closeModals";
import {
	createSessionWithNote,
	editNote,
	newNoteToggle,
} from "../Redux/actions/sessionActions";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "../Redux/actions/sessionActions";

const EmptyNoteContainer = ({ expand, setExpand }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const dispatch = useDispatch();
	const [share, setShare] = useState(false);
	const [options, setOptions] = useState(false);

	const { modalRef } = useCloseModals(setExpand);

	const { session } = useSelector((state) => state.sessions);

	const [note, setNote] = useState({
		title: "",
	});
	function handleNoteTitle(event) {
		const { name, value } = event.target;
		dispatch(editNote(undefined, value, "title"));
	}

	function addNote() {
		dispatch(createSessionWithNote());
	}

	useEffect(() => {
		dispatch(newNoteToggle());
	}, [dispatch]);

	useEffect(() => {
		if (session.notes.length) {
			setNote((prevState) => ({
				...prevState,
				title: session.notes[0].title,
			}));
		}

		if (session.id) {
			navigate(`${location.pathname}/${session.id}`);
		}

		return () => {};
	}, [session]);

	return (
		<div
			className={`session__note ${expand ? "session__note--expand" : ""}`}
			ref={expand ? modalRef : null}>
			<div className="session__itinerary">
				<div className="session__itinerary-meeting">
					<input
						type="text"
						name="noteTitle"
						id="noteTitle"
						value={note.title}
						className="session__link-input"
						placeholder="Note title..."
						onChange={handleNoteTitle}
					/>
				</div>
				<div className="session__actions">
					<div className="share">
						<button
							className="share__new"
							type="button"
							onClick={() => setShare(!share)}>
							<img
								src="/images/plus-white.svg"
								alt=""
							/>
						</button>
						{/* <div className="share__users">
										<img
											src="/images/Avatar.svg"
											alt=""
											className="share__user"
										/>
										<img
											src="/images/Avatar.svg"
											alt=""
											className="share__user"
										/>
										<img
											src="/images/Avatar.svg"
											alt=""
											className="share__user"
										/>
									</div> */}
					</div>
					<button
						type="button"
						className="session__send"
						onClick={addNote}>
						Add Note
					</button>
					<img
						src="/images/ellipsis.svg"
						alt=""
						className="session__options"
						onClick={() => setOptions(!options)}
					/>
					{options ? (
						<NoteOptionsModal
							toggleVisibility={setOptions}
							expand={expand}
							setExpand={setExpand}
						/>
					) : null}
					{share ? <ShareModal toggleVisibility={setShare} /> : null}
				</div>
			</div>
			<div
				className={`note-template ${
					expand ? "note-template__expanded" : ""
				}`}>
				<NoteEditor expand={expand} />

				<NoteTemplateList />
			</div>
		</div>
	);
};

export default EmptyNoteContainer;
