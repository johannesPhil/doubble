import React, { useState, useEffect, useMemo, useCallback } from "react";
import NoteEditor from "./Editor/NoteEditor";
import NoteTemplateList from "./Sessions/NoteTemplateList/NoteTemplateList";
import NoteOptionsModal from "./NoteOptionsModal";
import ShareModal from "./ShareModal";
import { useCloseModals } from "../utils/closeModals";
import {
	createSessionWithNote,
	createNoteWithoutSession,
	editNote,
	newNoteToggle,
	updateNote,
} from "../Redux/actions/sessionActions";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "../Redux/actions/sessionActions";
import { useCursorTracking } from "../utils/hooks/cursorTracking";
import { debounceRequest } from "../utils/callLimit";

const EmptyNoteContainer = ({ expand, setExpand }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const dispatch = useDispatch();
	const [share, setShare] = useState(false);
	const [options, setOptions] = useState(false);

	const { modalRef } = useCloseModals(setExpand);

	const {
		session: { id: sessionId, notes },
	} = useSelector((state) => state.sessions);

	const [cursorPosition, handleCursorPosition] = useCursorTracking(0);

	const [note, setNote] = useState({
		title: "",
	});

	const createNote = useCallback(() => {
		dispatch(createNoteWithoutSession());
	}, []);

	const debounceNoteCreation = useMemo(() => {
		return debounceRequest(createNote, 3000);
	}, [createNote]);

	const updateNewNote = useCallback((noteId) => {
		dispatch(updateNote(noteId));
	}, []);

	const debounceUpdateNewNote = useMemo(() => {
		return debounceRequest(updateNewNote, 3000);
	}, [updateNewNote]);

	function handleNoteTitle(id) {
		console.log(id);
		return (event) => {
			const { value } = event.target;
			dispatch(editNote(id, value, "title"));
			if (id) {
				debounceUpdateNewNote(id);
			} else {
				debounceNoteCreation();
			}
		};
	}

	function addNote() {
		dispatch(createSessionWithNote());
	}
	useEffect(() => {
		return () => {};
	}, [notes[0]]);

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
						value={notes[notes.length - 1]?.title}
						className="session__link-input"
						placeholder="Note title..."
						onChange={handleNoteTitle(notes[notes.length - 1]?.id)}
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
						Send Note
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
				className={`note-template note-template__static ${
					expand ? "note-template__expanded" : ""
				}`}>
				<NoteEditor expand={expand} />

				<NoteTemplateList />
			</div>
		</div>
	);
};

export default EmptyNoteContainer;
