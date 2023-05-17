import axiosInstance from "../../../axios";
import { confirmParse } from "../../utils/editorBodyParser";
import { loadRequest } from "./generalActions";
import {
	CREATE_NOTE_SUCCESS,
	CREATE_NOTE_ERROR,
	START_NEW_NOTE,
	CANCEL_START_NEW_NOTE,
	EDIT_NEW_NOTE,
	EDIT_SESSION,
	GET_SESSION_SUCCESS,
	RESET_SESSION,
	UPDATE_NOTE_ERROR,
	UPDATE_NOTE_SUCCESS,
	EDIT_NOTE,
	ADD_NOTE_SUCCESS,
	ADD_NOTE_ERROR,
	DELETE_NOTE_SUCCESS,
	UPDATE_SESSION_SUCCESS,
} from "./types";
import {
	CREATE_SESSION_SUCCESS,
	GET_SESSIONS_SUCCESS,
	REQUEST_ERROR,
} from "./types";

export const createSessionWithTitle = (title) => (dispatch) => {
	dispatch(loadRequest());
	axiosInstance
		.post(`sections`, { title })
		.then((response) => {
			const sessionId = response.data.data.id;
			dispatch({
				type: CREATE_SESSION_SUCCESS,
				payload: sessionId,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const createSessionWithNote =
	(session, note) => async (dispatch, getState) => {
		dispatch(loadRequest());
		const { sessions } = getState();
		const {
			session: { title, notes },
		} = sessions;
		const sessionResponse = await axiosInstance
			.post("sections", { title })
			.then((response) => {
				const sessionId = response.data.data.id;
				dispatch({
					type: CREATE_SESSION_SUCCESS,
					payload: sessionId,
				});

				dispatch(createNoteWithSession(notes[0], sessionId));
			})
			.catch((error) => {
				dispatch({
					type: REQUEST_ERROR,
					payload: error.message,
				});
			});
	};

export const updateSession = (id, title) => {
	return (dispatch) => {
		axiosInstance
			.put(`sections/${id}`, { title })
			.then((response) => {
				dispatch({
					type: UPDATE_SESSION_SUCCESS,
				});
			})
			.catch((error) => {});
	};
};

export const createNoteWithoutSession = (note = null) => {
	return (dispatch, getState) => {
		dispatch(loadRequest());
		let newNote;
		const {
			sessions: { session },
		} = getState();

		newNote = session.notes[0];

		axiosInstance
			.post("notes", {
				title: newNote.title || "Untitled Note - Please change",
				body: confirmParse(newNote.body),
				// section: null,
			})
			.then((response) => {
				dispatch({
					type: CREATE_NOTE_SUCCESS,
					payload: response.data.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: CREATE_NOTE_ERROR,
					payload: error.message,
				});
			});
	};
};

export const createNoteWithSession =
	(sessionId) => async (dispatch, getState) => {
		const {
			sessions: { session },
		} = getState();

		const note = session.notes[session.notes.length - 1];
		axiosInstance
			.post("notes", {
				title: note.title,
				body: confirmParse(note.body),
				section_id: sessionId,
			})
			.then((response) => {
				console.log(response.data);
				dispatch({
					type: ADD_NOTE_SUCCESS,
					payload: response.data.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: ADD_NOTE_ERROR,
					payload: error.message,
				});
			});
	};

export const addNoteToSession = (sessionId) => {
	return (dispatch) => {
		dispatch(loadRequest());
	};
};

export const deleteNote = (id) => {
	return (dispatch) => {
		axiosInstance.delete(`notes/${id}`).then((response) => {
			dispatch({
				type: DELETE_NOTE_SUCCESS,
				payload: id,
			});
		});
	};
};

export const getSessions = () => (dispatch) => {};

export const getSessionsByUser = () => (dispatch, getState) => {
	dispatch(loadRequest());
	const { auth } = getState();

	axiosInstance
		.get(`sections`)
		.then((response) => {
			dispatch({
				type: GET_SESSIONS_SUCCESS,
				payload: response.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: REQUEST_ERROR,
				payload: error.message,
			});
		});
};

export const getSessionById = (id) => (dispatch) => {
	dispatch(loadRequest());
	axiosInstance
		.get(`sections/${id}?withNotes=1`)
		.then((response) => {
			dispatch({
				type: GET_SESSION_SUCCESS,
				payload: response.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: REQUEST_ERROR,
				payload: error.message,
			});
		});
};

export const editSession = (title) => {
	return (dispatch) => {
		dispatch({
			type: EDIT_SESSION,
			payload: title,
		});
	};
};

export const editNote = (id, value, property) => {
	return (dispatch) => {
		dispatch({
			type: id ? EDIT_NOTE : EDIT_NEW_NOTE,
			payload: { property, value, id },
		});
	};
};

export const updateNote = (noteId, sessionId = "") => {
	return (dispatch, getState) => {
		console.log({ sessionId, noteId });
		dispatch(loadRequest());
		const {
			sessions: { session },
		} = getState();
		const targetNote = session.notes.filter((note) => note.id === noteId);
		console.log(targetNote);

		axiosInstance
			.put(`notes/${noteId}`, {
				title: targetNote[0].title,
				body: confirmParse(targetNote[0].body),
				section_id: sessionId ? parseInt(sessionId) : null,
			})
			.then((response) => {
				dispatch({
					type: UPDATE_NOTE_SUCCESS,
					payload: { data: response.data.data, id: noteId },
				});
			})
			.catch((error) => {
				dispatch({
					type: UPDATE_NOTE_ERROR,
					payload: error.message,
				});
			});
	};
};

export const resetSession = () => {
	return (dispatch) => {
		dispatch({
			type: RESET_SESSION,
		});
	};
};

export const newNoteToggle = () => {
	return (dispatch, getState) => {
		const {
			sessions: { newNote },
		} = getState();
		if (newNote.status) {
			dispatch({ type: CANCEL_START_NEW_NOTE });
		} else {
			dispatch({
				type: START_NEW_NOTE,
			});
		}
	};
};
