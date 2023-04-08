import React, { useEffect, useState, useRef } from "react";
import NoteEditor from "../components/Editor/NoteEditor";
import SessionTopBar from "../components/Sessions/SessionTopBar/SessionTopBar";
import SessionOptions from "../components/Sessions/SessionOptions/SessionOptions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	createSession,
	getSession,
	getSessions,
} from "../Redux/actions/sessionActions";
import SessionSide from "../components/Sessions/SessionSide/SessionSide";
import NoteTemplateList from "../components/Sessions/NoteTemplateList/NoteTemplateList";

const Session = () => {
	const dispatch = useDispatch();

	const params = useParams();
	const { id } = params;
	const { sessions } = useSelector((state) => state.sessions);

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
		// if (id) {
		// 	dispatch(getSessions());
		// 	dispatch(getSession(1));
		// }
		console.log(session);
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
						<div className="note-template">
							<NoteEditor updateNote={handleNoteChange} />
							<NoteTemplateList />
						</div>
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
				<SessionSide />
			</div>
			{/* </div> */}
		</div>
	);
};

export default Session;
