import React, { useState } from "react";
import PrivateNote from "../PrivateNote/PrivateNote";
import TextField from "../TextField/TextField";
import Comment from "../Comment/Comment";

const SessionSide = () => {
	const [sessionTab, setSessionTab] = useState("note");

	const privateNotes = [
		{
			text: "Keep Double close at hand with our Google Meet app.",
			tags: ["#Products&Pixel"],
		},
		{
			text: "Something great is coming out of this",
			tags: ["optimism", "positive"],
		},
		{
			text: "Town hall different from bala blue, you know",
			tags: ["myturn", "amazing"],
		},
	];

	const comments = [
		{
			text: "The timeline would have to be shifted",
			author: "moyinoluwa",
			time: "2012-01-26T13:51:50.417-07:00",
			tags: [],
		},
		{
			text: "Bring me back from the darkness, the dead back to life. Revive my soul, let it come alive",
			author: "Moi",
			time: "",
			tags: [],
		},
	];

	return (
		<div className="session__side">
			<div className="session__tabs">
				<span
					className="session__tab"
					onClick={() => setSessionTab("note")}>
					Private Note
				</span>
				<span
					className="session__tab"
					onClick={() => setSessionTab("comments")}>
					Comments
				</span>
				<span
					className="session__tab"
					onClick={() => setSessionTab("okr")}>
					OKRs
				</span>
				<span
					className={`session__switch session__switch--${sessionTab}`}></span>
			</div>
			<div className="session__tabviews">
				<div
					className={`session__tabview ${
						sessionTab == "note" ? "session__tabview--active" : ""
					}`}>
					<TextField type={"note"} />
					{privateNotes.length
						? privateNotes.map((note) => (
								<PrivateNote
									note={note}
									key={note.text}
								/>
						  ))
						: null}
				</div>
				<div
					className={`session__tabview ${
						sessionTab == "comments"
							? "session__tabview--active"
							: ""
					}`}>
					<TextField type={"comment"} />
					{comments.length
						? comments.map((comment) => (
								<Comment
									comment={comment}
									key={comment.text}
								/>
						  ))
						: null}
				</div>
				<div
					className={`session__tabview ${
						sessionTab == "okr" ? "session__tabview--active" : ""
					}`}>
					<p className="okr-heading">Objectives and Key Result</p>
					<div className="okr-placeholder">
						<img
							src="/images/woman studying.svg"
							alt="illustration"
							className="okr-placeholder__image"
						/>
						<h3>No OKR has been created</h3>
						<p>
							Start creating new objective and key result to help
							your productivity
						</p>
						<span className="okr-cta">New OKR</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SessionSide;
