import React, { useEffect, useState, useCallback, useMemo } from "react";
import NoteEditor from "./Editor/NoteEditor";
import NoteTemplateList from "./Sessions/NoteTemplateList/NoteTemplateList";
import NoteOptionsModal from "./NoteOptionsModal";
import ShareModal from "./ShareModal";
import { useCloseModals } from "../utils/closeModals";
import {
	createNoteWithSession,
	createNoteWithoutSession,
	editNote,
	getSessionById,
	newNoteToggle,
	updateNote,
} from "../Redux/actions/sessionActions";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlaceHolderElement from "./PlaceHolders/PlaceHolderElement";
import PlaceHolderBlock from "./PlaceHolders/PlaceHolderBlock";
import { throttleRequest, debounceRequest } from "../utils/callLimit";

const NoteContainer = ({
	expand,
	setExpand,
	noteToExpand,
	setNoteToExpand,
	note: propsNote,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [share, setShare] = useState(false);
	const [options, setOptions] = useState(false);

	const { id: sessionId } = useParams();
	const { newNote, session } = useSelector((state) => state.sessions);
	const [noteTitle, setNoteTitle] = useState("");

	const { modalRef } = useCloseModals(setExpand);

	const updateNoteTitle = useCallback((sessionId, noteId) => {
		dispatch(updateNote(noteId, sessionId));
	}, []);

	const createNote = useCallback((sessionId) => {
		const note = { title: propsNote.title, body: null };

		if (sessionId) {
			dispatch(createNoteWithSession(sessionId));
		} else {
			dispatch(createNoteWithoutSession(note));
		}
	}, []);

	const debounceTitleUpdate = useMemo(() => {
		return debounceRequest(updateNoteTitle, 3000);
	}, [updateNoteTitle]);

	const debounceNoteCreation = useMemo(() => {
		return debounceRequest(createNote, 3000);
	}, [createNote]);

	function handleNoteTitle(id) {
		return (event) => {
			const { name, value } = event.target;
			setNoteTitle(value);
			console.log(value);
			dispatch(editNote(id, value, "title"));
			if (id) {
				debounceTitleUpdate(sessionId, id);
			} else {
				debounceNoteCreation(sessionId);
			}
		};
	}

	function prepareOptions(id) {
		if (!options) {
			setNoteToExpand(id);
		}
		setOptions(!options);
	}

	useEffect(() => {
		if (session.id && !sessionId && !propsNote.section_id) {
			console.log("Update");
			dispatch(updateNote(propsNote.id, session.id));

			let dynamicRoute = location.pathname;
			if (dynamicRoute.endsWith("/")) {
				dynamicRoute = dynamicRoute.slice(0, -1);
			}
			console.log("Navigation");
			navigate(`${dynamicRoute}/${session.id}`);
		}
	}, [dispatch, session]);

	return (
		<div
			className={`session__note ${
				propsNote.id === noteToExpand && expand
					? "session__note--expand"
					: ""
			}`}
			ref={propsNote.id === noteToExpand && expand ? modalRef : null}>
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
						onClick={() => handleNoteRequest(propsNote?.id)}>
						Send Note
					</button>
					<img
						src="/images/ellipsis.svg"
						alt=""
						className="session__options"
						onClick={() => prepareOptions(propsNote?.id)}
					/>
					{options ? (
						<NoteOptionsModal
							toggleVisibility={setOptions}
							expand={expand}
							setExpand={setExpand}
							id={propsNote?.id}
						/>
					) : null}
					{share ? (
						<ShareModal
							toggleVisibility={setShare}
							noteId={propsNote.id}
						/>
					) : null}
				</div>
			</div>
			<div
				className={`note-template ${
					expand ? "note-template__expanded" : ""
				}`}>
				<NoteEditor
					expand={expand}
					data={propsNote?.body}
					id={propsNote?.id}
				/>

				{/* <NoteTemplateList /> */}
			</div>
		</div>
	);
};

export default NoteContainer;
