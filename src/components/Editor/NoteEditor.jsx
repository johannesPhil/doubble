// import { Header } from "@editorjs/header";
import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
	useMemo,
} from "react";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Checklist from "@editorjs/checklist";
import Table from "@editorjs/table";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import { useParams } from "react-router-dom";
import { defaultBlocks, editorConfig } from "../../utils/editor";
import { useDispatch } from "react-redux";
import {
	createNoteWithoutSession,
	editNote,
	updateNote,
} from "../../Redux/actions/sessionActions";
import { debounceRequest } from "../../utils/callLimit";

function NoteEditor({ data, id: noteId }) {
	const editorRef = useRef(null);
	const editorContent = data ? JSON.parse(data) : null;
	const { id: sessionId } = useParams();
	const dispatch = useDispatch();
	const editorInstance = useRef();

	const createNoteWithTitle = useCallback(() => {
		dispatch(createNoteWithoutSession());
	}, []);

	const updateNoteBody = useCallback(() => {
		dispatch(updateNote(noteId, sessionId));
	}, []);

	const debounceNoteCreation = useMemo(
		() => debounceRequest(createNoteWithTitle, 3000),
		[createNoteWithTitle]
	);

	const debounceNoteUpdate = useMemo(
		() => debounceRequest(updateNoteBody, 3000),
		[updateNoteBody]
	);

	// const editorConfig = {
	// 	holder: `note-${noteId ? noteId : "new"}`,
	// 	placeholder: editorConfig.placeholder,
	// 	tools: editorConfig.tools,
	// 	data: editorContent ? editorContent : defaultBlocks,
	// };

	function instantiateEditor() {
		const editor = new EditorJS({
			holder: `note-${noteId ? noteId : "new"}`,
			placeholder: editorConfig.placeholder,
			tools: editorConfig.tools,
			data: editorContent ? editorContent : defaultBlocks,
			onReady: () => {
				editorInstance.current = editor;
			},
			onChange: async () => {
				const editorContent = await editor.save();
				console.log(editorContent);
				dispatch(editNote(noteId, editorContent, "body"));

				if (noteId) {
					debounceNoteUpdate();
				} else {
					debounceNoteCreation();
				}
			},
			logLevel: "WARN",
		});
	}

	useEffect(() => {
		// const editor = new EditorJS({
		// 	...editorConfig,
		// 	logLevel: "WARN",
		// });

		// editor.isReady.catch((reason) => {
		// 	console.log(`Editor initialization failed. ${reason}`);
		// });
		if (!editorInstance.current) {
			instantiateEditor();
		}

		return () => {
			editorInstance?.current?.destroy();
			editorInstance.current = null;
		};
	}, []);

	useEffect(() => {}, [dispatch, editorContent, noteId, editorRef]);

	return <div id={`note-${noteId ? noteId : "new"}`}></div>;
}

export default NoteEditor;
