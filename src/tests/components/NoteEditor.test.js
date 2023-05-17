import React from "react";
import NoteEditor from "../../components/Editor/NoteEditor";
import { describe, it } from "vitest";
import { getByTestId, render } from "../test-utils";

describe("NoteEditor", () => {
	it("should initilaize successfully if it is a new note", () => {
		const { getByTestId } = render(<NoteEditor />);
		const newEditor = getByTestId("note-new");
		expect(newEditor).toBeInTheDocument();
	});

	it("should initialize successfully if the note has an id", () => {
		const randomId = Math.floor(Math.random() * 100) + 1;
		const { getByTestId } = render(<NoteEditor id={randomId} />);
		const filledEditor = getByTestId(`note-${randomId}`);
		expect(filledEditor).toBeInTheDocument();
	});
});
