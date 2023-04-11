// import { Header } from "@editorjs/header";
import React, { useState, useEffect, useRef } from "react";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Checklist from "@editorjs/checklist";
import Table from "@editorjs/table";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

function NoteEditor({ expand, updateNote }) {
	const editorRef = useRef(null);

	const defaultContent = {
		blocks: [
			{
				type: "header",
				data: {
					text: "In Progress",
					level: 3,
				},
			},
			{
				type: "paragraph",
				data: {
					text: "What I'm working on",
				},
			},
			{
				type: "checklist",
				data: {
					items: [{ text: "New Item", checked: true }],
				},
			},
			{
				type: "header",
				data: {
					text: "In Progress",
					level: 3,
				},
			},
			{
				type: "paragraph",
				data: {
					text: "What I'm working on",
				},
			},
			{
				type: "checklist",
				data: {
					items: [{ text: "New Item", checked: false }],
				},
			},
			{
				type: "header",
				data: {
					text: "In Progress",
					level: 3,
				},
			},
			{
				type: "paragraph",
				data: {
					text: "What I'm working on",
				},
			},
			{
				type: "checklist",
				data: {
					items: [{ text: "New Item", checked: false }],
				},
			},
		],
	};

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
		data: defaultContent,
		onChange: async () => {
			const editorContent = await editorRef.current.save();
			updateNote(editorContent);
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

	return <div id="note"></div>;
}

export default NoteEditor;
