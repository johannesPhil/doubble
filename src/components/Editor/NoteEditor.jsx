// import { Header } from "@editorjs/header";
import React, { useState, useEffect } from "react";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Checklist from "@editorjs/checklist";
import Table from "@editorjs/table";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

function NoteEditor() {
	const [noteContent, setNoteContent] = useState(null);
	const [editor, setEditor] = useState("");

	const editorConfig = {
		holder: "note",
		placeholder: "Get started",
		// defaultBlock: { class: Header },
		tools: {
			header: {
				class: Header,
				inlineToolbar: true,
				config: {
					placeholder: "Enter a heading",
					levels: [1, 2, 3, 4, 5, 6],
					defaultLevel: 1,
				},
			},
			link: {
				class: LinkTool,
				inlineToolbar: true,
				config: {
					placeholder: "ENter Heading",
				},
			},
		},
		data: noteContent,
	};

	let coderDiv = document.querySelector("codex-editor__redactor");

	useEffect(() => {
		editor === "" &&
			setEditor(
				() =>
					new EditorJS({
						...editorConfig,
						logLevel: "VERBOSE",
					})
			);
	}, []);

	return <div id="note"></div>;
}

export default NoteEditor;
