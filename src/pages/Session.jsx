import React, { useEffect, useState, useRef } from "react";
import NoteEditor from "../components/Editor/NoteEditor";
import Comment from "../components/Sessions/Comment/Comment";
import PrivateNote from "../components/Sessions/PrivateNote/PrivateNote";
import SessionTopBar from "../components/Sessions/SessionTopBar/SessionTopBar";
import TextField from "../components/Sessions/TextField/TextField";
import SessionOptions from "../components/Sessions/SessionOptions/SessionOptions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	createSession,
	getSession,
	getSessions,
} from "../Redux/actions/sessionActions";

const Session = () => {
	const [sessionTab, setSessionTab] = useState("note");
	const dispatch = useDispatch();

	const params = useParams();
	const { id } = params;
	const { sessions } = useSelector((state) => state.sessions);

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

	const [session, setSession] = useState({
		title: "",
		description: "",
		time: "",
		link: "",
		note: "",
	});

	function handleSession(event) {
		const { name, value } = event.target;
		setSession({ ...session, [name]: value });
	}

	function handleNoteChange(noteData) {
		setSession((prevState) => {
			return { ...prevState, note: noteData };
		});
	}

	function sendNote() {
		dispatch(createSession(session));
	}

	useEffect(() => {
		if (id) {
			dispatch(getSessions());
			dispatch(getSession(1));
		}
	}, [session]);

	return (
		<div className="session">
			<SessionTopBar />
			<div className="session__content">
				<div className="session__meeting">
					<div className="session__headings">
						<h2 className="heading__medium">{`${
							session.title ? session.title : "Meeting title..."
						}`}</h2>
						<input
							type="text"
							name="description"
							id="description"
							placeholder="Description..."
							className="session__desc"
							onChange={handleSession}
						/>
					</div>
					<div className="session__note">
						<div className="session__itinerary">
							<div className="session__itinerary-meeting">
								<input
									type="text"
									name="title"
									id="title"
									className="session__title"
									placeholder="Enter meeting title..."
									onChange={handleSession}
								/>
								{id ? (
									<div className="session__spacetime">
										<span className="session__time">
											Time: 6:30pm - 7:30pm
										</span>
										<span className="session__space">
											Join Google Meet
										</span>
									</div>
								) : (
									<div className="session__link">
										<img
											src={
												session.link.includes("google")
													? "/images/Google Meet.svg"
													: session.link.includes(
															"zoom"
													  )
													? "/images/zoom.svg"
													: session.link.includes(
															"microsoft"
													  )
													? "/images/microsoft teams.svg"
													: "/images/link.svg"
											}
											alt="meeting host icon"
											className="session__link-img"
										/>
										<input
											type="text"
											name="link"
											id="link"
											className="session__link-input"
											placeholder="Enter meeting link..."
											onChange={handleSession}
										/>
									</div>
								)}
							</div>
							<div className="meta-right">
								<button
									type="button"
									className="session__send"
									onClick={sendNote}>
									Send Note
								</button>
							</div>
						</div>
						<NoteEditor updateNote={handleNoteChange} />
					</div>
					<div className="control">
						<span className="control__new">
							<img
								src="/images/plus-gray.svg"
								alt="add note"
							/>
							New Note
						</span>
						<span className="control__color">
							<input
								type="color"
								name="color"
								id="color"
							/>
							<span className="control__pseudo"></span>
							Select Color
						</span>
						<span className="control__templates">
							<img
								src="/images/file.svg"
								alt=""
							/>
							Templates
						</span>
					</div>
				</div>
				<SessionOptions />
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
								sessionTab == "note"
									? "session__tabview--active"
									: ""
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
								sessionTab == "okr"
									? "session__tabview--active"
									: ""
							}`}>
							<p className="okr-heading">
								Objectives and Key Result
							</p>
							<div className="okr-placeholder">
								<img
									src="/images/woman studying.svg"
									alt="illustration"
									className="okr-placeholder__image"
								/>
								<h3>No OKR has been created</h3>
								<p>
									Start creating new objective and key result
									to help your productivity
								</p>
								<span className="okr-cta">New OKR</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default Session;
