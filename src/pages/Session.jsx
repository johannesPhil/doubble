import React, { useEffect, useState, useRef } from "react";
import NoteEditor from "../components/Editor/NoteEditor";
import SessionTopBar from "../components/Sessions/SessionTopBar/SessionTopBar";
import SessionOptions from "../components/Sessions/SessionOptions/SessionOptions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	createSession,
	getSession,
	getSessions,
} from "../Redux/actions/sessionActions";
import SessionSide from "../components/Sessions/SessionSide/SessionSide";
import NoteTemplateList from "../components/Sessions/NoteTemplateList/NoteTemplateList";
import NoteOptionsModal from "../components/NoteOptionsModal";
import { useCloseModals } from "../utils/closeModals";
import ShareModal from "../components/ShareModal";

const Session = () => {
	const dispatch = useDispatch();
	const [share, setShare] = useState(false);
	const [options, setOptions] = useState(false);
	const [expand, setExpand] = useState(false);

	const params = useParams();
	const { id } = params;
	const { sessions } = useSelector((state) => state.sessions);

	const [session, setSession] = useState({ sessionTitle: "" });

	const [note, setNote] = useState({
		noteTitle: "",
		noteContent: "",
	});

	const { modalRef } = useCloseModals(setExpand);

	function handleNote(event) {
		const { name, value } = event.target;
		setNote({ ...note, [name]: value });
	}

	function handleSession(event) {
		const { name, value } = event.target;
		setSession({ sessionTitle: value });
	}

	function handleNoteContent(noteData) {
		setNote((prevState) => {
			return { ...prevState, noteContent: noteData };
		});
	}

	function sendNote() {
		dispatch(createSession(session));
	}
	function toggleOptionVisibility() {}

	useEffect(() => {
		// if (id) {
		// 	dispatch(getSessions());
		// 	dispatch(getSession(1));
		// }
		console.log(session);
		console.log(note);
	}, [session, note, expand]);

	return (
		<div className={`session ${expand ? "session__expand" : ""} `}>
			<SessionTopBar />
			<div className="session__content">
				<div className="session__meeting">
					<div className="session__headings">
						<input
							type="text"
							name="sessionTitle"
							id="sessionTitle"
							className="session__title"
							placeholder="Session title..."
							onChange={handleSession}
						/>
						{/* <input
							type="text"
							name="description"
							id="description"
							placeholder="Description..."
							className="session__desc"
							onChange={handleSession}
						/> */}
					</div>
					<div
						className={`session__note ${
							expand ? "session__note--expand" : ""
						}`}
						ref={expand ? modalRef : null}>
						<div className="session__itinerary">
							<div className="session__itinerary-meeting">
								<input
									type="text"
									name="noteTitle"
									id="noteTitle"
									className="session__link-input"
									placeholder="Note title..."
									onChange={handleNote}
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
									onClick={sendNote}>
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
								{share ? (
									<ShareModal toggleVisibility={setShare} />
								) : null}
							</div>
						</div>
						<div
							className={`note-template ${
								expand ? "note-template__expanded" : ""
							}`}>
							<NoteEditor
								updateNote={handleNoteContent}
								expand={expand}
							/>
							<NoteTemplateList />
						</div>
					</div>
					<div className="control">
						<span className="control__new">
							<img
								src="/images/plus-gray.svg"
								alt="add note"
							/>
							New Note
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
				</div>
				<SessionOptions />
				<SessionSide />
			</div>
			{/* </div> */}
		</div>
	);
};

export default Session;
