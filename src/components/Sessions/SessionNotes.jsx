import React from "react";
import { useParams } from "react-router-dom";
import PlaceHolderElement from "../PlaceHolders/PlaceHolderElement";
import PlaceHolderBlock from "../PlaceHolders/PlaceHolderBlock";
import NoteContainer from "../NoteContainer";

const SessionNotes = ({ notes, session, handleSession, expand, setExpand }) => {
	return (
		<>
			{notes.length ? (
				notes.map((note, index) => (
					<NoteContainer
						expand={expand}
						setExpand={setExpand}
						note={note}
						key={index}
					/>
				))
			) : (
				<PlaceHolderBlock />
			)}
		</>
	);
};

export default SessionNotes;
