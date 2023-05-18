import { defaultBlocks } from "../../utils/editor";
import { confirmParse } from "../../utils/editorBodyParser";
import * as actions from "../actions/types";
import generalReducers from "./generalReducers";

const initialState = {
	sessions: null,
	session: { id: "", creator: {}, notes: [], title: "" },
	newNote: { status: false },
};

function sessionsReducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.CREATE_SESSION_SUCCESS:
			const newlyCreatedSession = { ...state.session, id: payload };

			return {
				...state,
				session: newlyCreatedSession,
				newNote: false,
				loading: generalReducers(
					state.loading,
					actions.REQUEST_SUCCESS
				),
			};

		case actions.CREATE_SESSION_ERROR:
			return {
				...state,
				error: generalReducers(state.loading, actions.REQUEST_ERROR),
				loading: generalReducers(state.loading, actions.REQUEST_ERROR),
			};

		case actions.GET_SESSIONS_ERROR:
			return {
				...state,
				sessions: null,
				error: generalReducers(state.error, actions.REQUEST_ERROR),
				loading: generalReducers(state.loading, actions.REQUEST_ERROR),
			};

		case actions.GET_SESSIONS_SUCCESS:
			return {
				...state,
				sessions: payload.data,
				loading: generalReducers(
					state.loading,
					actions.REQUEST_SUCCESS
				),
			};

		case actions.GET_SESSION_SUCCESS:
			return {
				...state,
				session: {
					id: payload.data.id,
					creator: payload.data.creator,
					notes: payload.data.notes,
					title: payload.data.title,
				},
				loading: generalReducers(
					state.loading,
					actions.REQUEST_SUCCESS
				),
			};

		case actions.GET_SESSION_ERROR:
			return {
				...state,
				session: null,
				loading: generalReducers(state.loading, actions.REQUEST_ERROR),
				error: generalReducers(state.error, actions.REQUEST_ERROR),
			};

		case actions.EDIT_SESSION:
			return {
				...state,
				session: { ...state.session, title: payload },
			};

		case actions.UPDATE_SESSION_SUCCESS:
			return { ...state };

		case actions.RESET_SESSION:
			return initialState;

		case actions.CREATE_NOTE_SUCCESS:
			console.log(payload);
			const newlyCreatedNote = state.session.notes.map((note) => {
				if (note.id == undefined) {
					return {
						...note,
						id: payload.id,
						ceated_at: payload.created_at,
						updated_at: payload.updated_at,
						section_id: payload.section_id,
						title: payload.title,
						body: payload.body,
					};
				}
			});
			const emptySession = {
				...state.session,
				notes: newlyCreatedNote,
			};
			return { ...state, session: emptySession };

		case actions.ADD_NOTE_SUCCESS:
			const newNote = payload;
			const filteredNotes = state.session.notes.filter((note) => note.id);
			const createdNotes = [...filteredNotes, newNote];
			const createdSession = { ...state.session, notes: createdNotes };
			return { ...state, session: createdSession };

		case actions.ADD_NOTE_ERROR:
			return {
				...state,
				loading: generalReducers(state.loading, actions.REQUEST_ERROR),
				error: generalReducers(state.error, actions.REQUEST_ERROR),
			};

		case actions.EDIT_NOTE:
			let { property, value, id: noteId } = payload;

			let updatedNote = state.session.notes.map((note, index) => {
				if (
					note.id === noteId &&
					note.section_id === state.session.id
				) {
					return {
						...note,
						[property]:
							property === "body" ? JSON.stringify(value) : value,
					};
				}
				return note;
			});

			let updatedSession = { ...state.session, notes: updatedNote };
			return { ...state, session: updatedSession };

		case actions.UPDATE_NOTE_SUCCESS:
			const { data, id } = payload;

			let newNotes = state.session.notes.map((note, index) => {
				if (note.id === id) {
					return {
						...note,
						...data,
					};
				}
				return note;
			});

			let targetSession = {
				...state.session,
				notes: newNotes,
			};
			return {
				...state,
				session: targetSession,
				newNote: false,
				loading: generalReducers(
					state.loading,
					actions.REQUEST_SUCCESS
				),
			};

		case actions.DELETE_NOTE_SUCCESS:
			let undeletedNotes = state.session.notes.filter(
				(note) => note.id !== payload
			);

			let sessionAfterDeletion = {
				...state.session,
				notes: undeletedNotes,
			};
			return { ...state, session: sessionAfterDeletion };

		case actions.START_NEW_NOTE:
			const emptyNote = {
				title: "",
				body: "",
			};
			const newSession = {
				...state.session,
				notes: [...state.session.notes, emptyNote],
			};
			return { ...state, session: newSession, newNote: { status: true } };

		case actions.CANCEL_START_NEW_NOTE:
			let originalNotes = state.session.notes.filter((note) => note.id);
			const originalSession = { ...state.session, notes: originalNotes };
			let statusFalse = { ...state.newNote, status: false };
			return { ...state, session: originalSession, newNote: statusFalse };

		case actions.EDIT_NEW_NOTE:
			const { property: newProperty, value: newValue } = payload;
			const { notes } = state.session;
			let updatedLastNote;
			updatedLastNote = notes.map((note, index) => {
				if (!note.id) {
					return {
						...note,
						[newProperty]:
							newProperty === "body"
								? confirmParse(newValue)
								: newValue,
					};
				}
				return note;
			});
			// const updatedNotes = [...notes.slice(0, -1), updatedLastNote];
			const latestSession = {
				...state.session,
				notes: updatedLastNote,
			};
			return { ...state, session: latestSession };

		default:
			return state;
	}
}

export default sessionsReducer;
