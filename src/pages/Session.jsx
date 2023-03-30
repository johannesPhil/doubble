import React, { useEffect, useState } from "react";
import NoteEditor from "../components/Editor/NoteEditor";
import Comment from "../components/Sessions/Comment/Comment";
import PrivateNote from "../components/Sessions/PrivateNote/PrivateNote";
import SessionTopBar from "../components/Sessions/SessionTopBar/SessionTopBar";
import TextField from "../components/Sessions/TextField/TextField";

const Session = () => {
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
		<div className="session">
			<SessionTopBar />
			{/* <div className=""> */}
			<div className="session__content">
				<div className="session__meeting">
					<div className="session__headings">
						<h2 className="heading__medium">
							Cardily Weekly Meeting
						</h2>
						<h3 className="heading__small">Description</h3>
					</div>
					<div className="session__note">
						<div className="session__itinerary">
							<div className="session__itinerary-meeting">
								<h3 className="heading__small">
									Meeting Title
								</h3>
								<div className="session__spacetime">
									<span className="session__time">
										Time: 6:30pm - 7:30pm
									</span>
									<span className="session__space">
										Join Google Meet
									</span>
								</div>
							</div>
							<div className="meta-right"></div>
						</div>
						<NoteEditor />
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
				<div className="session__tools">
					<div className="tool">
						<span className="tool__icon">
							<img
								src="/images/link.svg"
								alt="merge"
							/>
						</span>
						<span className="tool__name">Merge</span>
					</div>
					<div className="tool">
						<span className="tool__icon">
							<img
								src="/images/Star.svg"
								alt="toggle favourite"
							/>
						</span>
						<span className="tool__name">Favourite</span>
					</div>
					<div className="tool">
						<span className="tool__icon">
							<img
								src="/images/copy.svg"
								alt="copy"
							/>
						</span>
						<span className="tool__name">Copy</span>
					</div>
					<div className="tool">
						<span className="tool__icon">
							<img
								src="/images/export.svg"
								alt="export"
							/>
						</span>
						<span className="tool__name">Export</span>
					</div>
					<div className="tool">
						<span className="tool__icon">
							<img
								src="/images/save.svg"
								alt="archive"
							/>
						</span>
						<span className="tool__name">Archive</span>
					</div>
					<div className="tool">
						<span className="tool__icon">
							<img
								src="/images/print.svg"
								alt="print"
							/>
						</span>
						<span className="tool__name">Print</span>
					</div>
				</div>
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
