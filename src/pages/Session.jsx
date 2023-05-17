import React, {
	useEffect,
	useState,
	useRef,
	useCallback,
	useMemo,
} from "react";
import NoteEditor from "../components/Editor/NoteEditor";
import SessionTopBar from "../components/Sessions/SessionTopBar/SessionTopBar";
import SessionOptions from "../components/Sessions/SessionOptions/SessionOptions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	createSessionWithNote,
	createSessionWithTitle,
	editSession,
	getSessionById,
	getSessions,
	newNoteToggle,
	resetSession,
	updateSession,
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
import { debounceRequest } from "../utils/callLimit";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const Session = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	const dispatch = useDispatch();
	const [share, setShare] = useState(false);
	const [options, setOptions] = useState(false);
	const [expand, setExpand] = useState(false);
	const [noteToExpand, setNoteToExpand] = useState("");
	const [isBottom, setIsBottom] = useState(false);

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

	function handleSession(id) {
		return (event) => {
			const { name, value } = event.target;
			dispatch(editSession(value));

			if (sessionId || id) {
				debounceSessionUpdate(sessionId || id, value);
			} else {
				debounceSesionCreation(value);
			}
		};
	}

	const updateSessionTitle = useCallback((sessionId, title) => {
		dispatch(updateSession(sessionId, title));
	}, []);

	const createSession = useCallback((title) => {
		dispatch(createSessionWithTitle(title));
	}, []);

	const debounceSessionUpdate = useMemo(() => {
		return debounceRequest(updateSessionTitle, 3000);
	}, [updateSessionTitle]);

	const debounceSesionCreation = useMemo(() => {
		return debounceRequest(createSession, 3000);
	}, [createSession]);

	function handleNoteContent(noteData) {
		setNote((prevState) => {
			return { ...prevState, noteContent: noteData };
		});
	}

	const topBar = useMemo(() => <SessionTopBar />, []);

	useEffect(() => {
		if (sessionId) {
			dispatch(getSessionById(sessionId));
		}
		if (!sessionId && !newNote.status) {
			dispatch(newNoteToggle());
		}

		return () => {
			dispatch(resetSession());
		};
	}, [dispatch]);

	useEffect(() => {
		// function handleScroll() {}
		// return () => {};
	}, [loadedSession.notes]);

	return (
		<div className={`session ${expand ? "session__expand" : ""} `}>
			{topBar}
			<div className="session__content">
				<div className="session__meeting">
					<div className="session__headings">
						<input
							type="text"
							name="sessionTitle"
							id="sessionTitle"
							value={loadedSession.title}
							className="session__title"
							placeholder="Session title..."
							onChange={handleSession(loadedSession.id)}
						/>
						<input
							type="text"
							name="sessionTitle"
							id="sessionTitle"
							// value={loadedSession.title}
							className="session__desc"
							placeholder="Session Description..."
							// onChange={handleSession(loadedSession.id)}
						/>
					</div>
					{loadedSession.id
						? loadedSession.notes.length &&
						  loadedSession.notes.map((note, index) => (
								<NoteContainer
									expand={expand}
									setExpand={setExpand}
									note={note}
									key={index}
									noteToExpand={noteToExpand}
									setNoteToExpand={setNoteToExpand}
								/>
						  )) //TODO:resolve sessions with empty array of notes
						: newNote.status && (
								<EmptyNoteContainer
									expand={expand}
									setExpand={setExpand}
								/>
						  )}

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
