import React, { useEffect, useState, useRef } from "react";
import NoteEditor from "../components/Editor/NoteEditor";
import SessionTopBar from "../components/Sessions/SessionTopBar/SessionTopBar";
import SessionOptions from "../components/Sessions/SessionOptions/SessionOptions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	createSession,
	createSessionWithNote,
	editSession,
	getSessionById,
	getSessions,
	newNoteToggle,
	resetSession,
} from "../Redux/actions/sessionActions";
import SessionSide from "../components/Sessions/SessionSide/SessionSide";
import NoteTemplateList from "../components/Sessions/NoteTemplateList/NoteTemplateList";
import NoteOptionsModal from "../components/NoteOptionsModal";
import { useCloseModals } from "../utils/closeModals";
import ShareModal from "../components/ShareModal";
import NoteContainer from "../components/NoteContainer";
import EmptyNoteContainer from "../components/EmptyNoteContainer";
import PlaceHolderElement from "../components/PlaceHolders/PlaceHolderElement";
import NoteControls from "../components/NoteControls";
import PlaceHolderBlock from "../components/PlaceHolders/PlaceHolderBlock";
import SessionNotes from "../components/Sessions/SessionNotes";

const Session = () => {
	const dispatch = useDispatch();
	const [share, setShare] = useState(false);
	const [options, setOptions] = useState(false);
	const [expand, setExpand] = useState(false);

	const { id: sessionId } = useParams();
	const { session: loadedSession, newNote } = useSelector(
		(state) => state.sessions
	);

	const [session, setSession] = useState({
		sessionTitle: "",
	});

	const [note, setNote] = useState({
		noteTitle: "",
		noteContent: "",
	});

	const filledSessionInput = session.sessionTitle ? (
		<input
			type="text"
			name="sessionTitle"
			id="sessionTitle"
			value={session.sessionTitle}
			className="session__title"
			placeholder="Session title..."
			onChange={handleSession}
		/>
	) : (
		<PlaceHolderElement />
	);

	function handleSession(event) {
		const { name, value } = event.target;
		dispatch(editSession(value));
	}

	function handleNoteContent(noteData) {
		setNote((prevState) => {
			return { ...prevState, noteContent: noteData };
		});
	}

	function toggleOptionVisibility() {}

	useEffect(() => {
		if (sessionId) {
			dispatch(getSessionById(sessionId));
		} else {
			dispatch(newNoteToggle());
		}
		return () => {
			dispatch(resetSession());
		};
	}, [dispatch]);

	useEffect(() => {
		setSession((prevState) => ({
			...prevState,
			sessionTitle: loadedSession.title,
		}));
		return () => {
			setSession({ sessionTitle: "" });
		};
	}, [loadedSession, newNote]);

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
							value={session.sessionTitle}
							className="session__title"
							placeholder="Session title..."
							onChange={handleSession}
						/>
					</div>
					{sessionId ? (
						loadedSession.notes.length ? (
							loadedSession.notes.map((note, index) => (
								<NoteContainer
									expand={expand}
									setExpand={setExpand}
									note={note}
									key={index}
								/>
							))
						) : (
							<PlaceHolderBlock />
						)
					) : (
						<EmptyNoteContainer />
					)}

					{/* {newNote.status ? (
						<EmptyNoteContainer
							expand={expand}
							setExpand={setExpand}
							session={session}
						/>
					) : null} */}

					{sessionId && <NoteControls />}
				</div>
				<SessionOptions />
				<SessionSide />
			</div>
			{/* </div> */}
		</div>
	);
};

export default Session;
