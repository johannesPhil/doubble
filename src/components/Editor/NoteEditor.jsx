// import { Header } from "@editorjs/header";
import React, { useState, useEffect, useRef } from "react";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Checklist from "@editorjs/checklist";
import Table from "@editorjs/table";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import { useParams } from "react-router-dom";
import { defaultBlocks } from "../../utils/editor";
import { useDispatch } from "react-redux";
import { editNote } from "../../Redux/actions/sessionActions";

function NoteEditor({ data, id: noteId }) {
	const editorRef = useRef(null);
	const editorContent = data ? JSON.parse(data) : null;
	const { id: sessionId } = useParams();

	const dispatch = useDispatch();

	const editorConfig = {
		holder: `note${noteId ? noteId : "-new"}`,
		placeholder: "Get started here",
		tools: {
			header: {
				class: Header,
				inlineToolbar: true,
				config: {
					placeholder: "Enter a heading",
					levels: [1, 2, 3, 4, 5, 6],
					defaultLevel: 2,
				},
			},
			link: {
				class: LinkTool,
				inlineToolbar: true,
				config: {
					placeholder: "Paste a URL link",
				},
			},
			checklist: {
				class: Checklist,
				inlineToolbar: true,
				config: { placeholder: "Add Task" },
			},
			list: {
				class: List,
				inlineToolbar: true,
			},
			table: {
				class: Table,
				inlineToolbar: true,
			},
		},
		data: editorContent ? editorContent : defaultBlocks,
		onChange: async () => {
			const editorContent = await editorRef.current.save();
			dispatch(editNote(noteId, editorContent, "body"));
		},
	};

	function instantiateEditor() {
		editorRef.current = new EditorJS({
			...editorConfig,
			logLevel: "WARN",
		});
	}

	useEffect(() => {
		instantiateEditor();
		return () => {
			if (editorRef.current) {
				editorRef.current.destroy();
			}
		};
	}, []);

	useEffect(() => {}, [dispatch, editorContent, noteId]);

	return <div id={`note${noteId ? noteId : "-new"}`}></div>;
}

export default NoteEditor;
