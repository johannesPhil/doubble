import React, { useEffect, useState } from "react";
import NoteEditor from "./Editor/NoteEditor";
import NoteTemplateList from "./Sessions/NoteTemplateList/NoteTemplateList";
import NoteOptionsModal from "./NoteOptionsModal";
import ShareModal from "./ShareModal";
import { useCloseModals } from "../utils/closeModals";
import {
	createNoteWithSession,
	editNote,
	getSessionById,
	updateNote,
} from "../Redux/actions/sessionActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlaceHolderElement from "./PlaceHolders/PlaceHolderElement";
import PlaceHolderBlock from "./PlaceHolders/PlaceHolderBlock";

const NoteContainer = ({ expand, setExpand, note: propsNote }) => {
	const dispatch = useDispatch();
	const [share, setShare] = useState(false);
	const [options, setOptions] = useState(false);
	const { modalRef } = useCloseModals(setExpand);
	const { id: sessionId } = useParams();
	const { newNote } = useSelector((state) => state.sessions);
	const [note, setNote] = useState({ title: "", content: "" });
	const {
		session: { notes },
	} = useSelector((state) => state.sessions);

	function sendNote() {
		dispatch(createSessionWithNote(session, note));
	}

	function handleNoteTitle(id) {
		return (event) => {
			const { name, value } = event.target;
			dispatch(editNote(id, value, "title"));
		};
	}

	function handleNoteRequest(noteId) {
		if (sessionId) {
			if (noteId === undefined) {
				const note = notes.filter((note) => note.id === undefined);

				dispatch(createNoteWithSession(note[0], sessionId));
			} else {
				dispatch(updateNote(sessionId, noteId));
			}
		}
		// dispatch(updateNote(sessionId, noteId));
	}

	useEffect(() => {}, [newNote, propsNote, dispatch]);

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
						value={propsNote.title}
						className="session__link-input"
						placeholder="New Note title..."
						onChange={handleNoteTitle(propsNote.id)}
					/>

					{/* {id ? (
									<div className="session__spacetime">
										<span className="session__time">
											Time: 6:30pm - 7:30pm
										</span>
										<span className="session__space">
											Join Google Meet
										</span>
									</div>
								) : (
									<div className="session__link">
										<img
											src={
												session.link.includes("google")
													? "/images/Google Meet.svg"
													: session.link.includes(
															"zoom"
													  )
													? "/images/zoom.svg"
													: session.link.includes(
															"microsoft"
													  )
													? "/images/microsoft teams.svg"
													: "/images/link.svg"
											}
											alt="meeting host icon"
											className="session__link-img"
										/>
										<input
											type="text"
											name="link"
											id="link"
											className="session__link-input"
											placeholder="Enter meeting link..."
											onChange={handleSession}
										/>
									</div>
								)} */}
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
						onClick={() => handleNoteRequest(propsNote.id)}>
						{propsNote.id ? "Update Note" : "Add Note"}
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
							id={propsNote.id}
						/>
					) : null}
					{share ? <ShareModal toggleVisibility={setShare} /> : null}
				</div>
			</div>
			<div
				className={`note-template ${
					expand ? "note-template__expanded" : ""
				}`}>
				<NoteEditor
					expand={expand}
					data={propsNote.body}
					id={propsNote.id}
				/>

				{/* <NoteTemplateList /> */}
			</div>
		</div>
	);
};

export default NoteContainer;
