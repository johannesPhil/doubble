import React from "react";
import styled from "styled-components";
import { useCloseModals } from "../utils/closeModals";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../Redux/actions/sessionActions";

const OptionList = styled.ul`
	position: absolute;
	right: 0;
	width: 20rem;
	z-index: 1;
	top: 100%;
	list-style-type: none;
	margin: 0;
	padding: 0;
	border-radius: 8px;
	background-color: white;
	color: #1f1f1f;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const OptionItem = styled.li`
	padding: 0.8rem 1rem;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	cursor: pointer;
	font-size: 1.4rem;
	&:hover {
		background-color: #f4f4f4;
	}
`;

function NoteOptionsModal({ expand, toggleVisibility, setExpand, id: noteId }) {
	const { modalRef } = useCloseModals(toggleVisibility);
	const dispatch = useDispatch();

	function fillScreen() {
		toggleVisibility(false);
		setExpand(!expand);
	}

	return (
		<OptionList ref={modalRef}>
			<OptionItem onClick={() => fillScreen()}>
				<img
					src="/images/diagonals-bltr.svg"
					alt=""
				/>
				<span>{expand ? "Minimize" : "Fill Screen"}</span>
			</OptionItem>
			<OptionItem>
				<img
					src="/images/text.svg"
					alt=""
				/>
				<span>Apply a template</span>
			</OptionItem>
			<OptionItem>
				<img
					src="/images/save.svg"
					alt=""
				/>
				<span>Save as a template</span>
			</OptionItem>
			<OptionItem>
				<img
					src="/images/lightning-bolt.svg"
					alt=""
				/>
				<span>Lock note</span>
			</OptionItem>
			<OptionItem onClick={() => dispatch(deleteNote(noteId))}>
				<img
					src="/images/delete.svg"
					alt=""
				/>
				<span>Delete note</span>
			</OptionItem>
		</OptionList>
	);
}

export default NoteOptionsModal;
