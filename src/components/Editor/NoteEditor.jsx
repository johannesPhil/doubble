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

	function instantiateEditor() {
		const editor = new EditorJS({
			holder: `note-${noteId ? noteId : "new"}`,
			placeholder: editorConfig.placeholder,
			tools: editorConfig.tools,
			data: editorContent ? editorContent : defaultBlocks,
			onReady: () => {
				editorInstance.current = editor;
			},
			onChange: async (editor) => {
				if (editor) {
					editor.saver.save().then((content) => {
						console.log(content);
						dispatch(editNote(noteId, content, "body"));

						if (noteId) {
							debounceNoteUpdate();
						} else {
							debounceNoteCreation();
						}
					});
					// const editorContent = await editor.saver.save();
					// console.log(editorContent);
					// dispatch(editNote(noteId, editorContent, "body"));

					// if (noteId) {
					// 	debounceNoteUpdate();
					// } else {
					// 	debounceNoteCreation();
					// }
				}
			},
			logLevel: "WARN",
		});
	}

	useEffect(() => {
		if (!editorInstance.current) {
			instantiateEditor();
		}

		return () => {
			editorInstance?.current?.destroy();
			editorInstance.current = null;
		};
	}, []);

	useEffect(() => {}, [dispatch, editorContent, noteId]);

	return (
		<div
			id={`note-${noteId ? noteId : "new"}`}
			data-testid={`note-${noteId ? noteId : "new"}`}></div>
	);
}

export default NoteEditor;
