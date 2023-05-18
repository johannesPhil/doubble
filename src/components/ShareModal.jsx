import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import "../scss/abstracts/_variables.scss";
import { useCloseModals } from "../utils/closeModals";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/actions/userActions";
import { initialsImage } from "../utils/imageFromInitials";
import { addUserToNote } from "../Redux/actions/sessionActions";

const Modal = styled.div({
	position: "absolute",
	right: 0,
	top: "100%",
	overflowY: "auto",
	padding: "1.6rem",
	display: "grid",
	gap: "1rem",
	borderRadius: "1.4rem",
	backgroundColor: `white`,
	zIndex: 3,
	boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
});

const InputDiv = styled.div({
	minWidth: "30rem",
	maxWidth: "40rem",
	padding: ".8rem 1.2rem",
	/*TODO
    Use scss coor variable 
    */
	display: "flex",
	justifyContent: "space-between",
	gap: "1rem",
	alignItems: "center",
	border: `solid 2px #ebebeb`,
	borderRadius: ".8rem",
});

const Input = styled.input({
	all: "unset",
	height: "100%",
	width: "100%",
	border: "transparent",
	zIndex: "inherit",
});

const Button = styled.button({
	all: "unset",
	padding: ".8rem 1.2rem",
	color: "white",
	backgroundColor: "#4e46b4",
	borderRadius: ".8rem",
});

const UsersContainer = styled.div({
	minHeight: "5rem",
	maxHeight: "20rem",
	display: "grid",
	gap: "1rem",
	overflowY: "auto",
});

const Name = styled.div({
	fontSize: "1.2rem",
	fontFamily: "AvertaStd-SemiBold",
	// color: "red",
});

const Email = styled.div({
	fontSize: "1.2rem",
	color: "#999ca0",
});

const User = styled.div`
	padding: 0.3rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	transition: all 300ms;

	&:hover {
		background-color: #ebebeb;
		cursor: pointer;
		border-radius: 0.5rem;

		"& ${Email}, & ${Name} {
			color: white;
		}"
	}
`;

const UserDetails = styled.div({
	display: "grid",
	gap: ".5rem",
	justifyContent: "start",
	alignContent: "start",
});

const UserImage = styled.img({
	width: "30px",
	height: "30px",
	borderRadius: "50%",
});

const spinAnimation = keyframes({
	"0%": { transform: "rotate(0deg)" },
	"100%": { transform: "rotate(360deg)" },
});

const SpinnerContainer = styled.div`
	display: inline-block;
	position: relative;
	width: 25px;
	height: 25px;
	margin: auto;
`;

const Spinner = styled.div`
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	border: 3px solid transparent;
	border-top-color: #4e46b4;
	border-radius: 50%;
	animation: ${() => css`
		${spinAnimation} 0.8s linear infinite
	`};
`;
const CircleWithCheck = styled.div`
	position: relative;
	width: 20px;
	height: 20px;
	margin-left: auto;
	border-radius: 50%;
	background-color: #40a69f;
	display: flex;
	justify-content: center;
	align-items: center;
	justify-self: flex-end;
	color: white;
	font-size: 24px;
`;

const CheckMark = styled.span`
	transform: rotate(45deg);
	width: 6px;
	height: 12px;
	border-width: 0 2px 2px 0;
	border-style: solid;
	border-color: white;
`;

const ShareModal = ({ noteId, toggleVisibility }) => {
	const { modalRef } = useCloseModals(toggleVisibility);
	const [users, setUsers] = useState([]);
	const [markedUsers, setMarkedUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	function markUser(id) {
		setMarkedUsers((prevMarkedusers) => {
			if (prevMarkedusers.includes(id)) {
				return prevMarkedusers.filter((userId) => userId !== id);
			} else {
				return [...prevMarkedusers, id];
			}
		});
	}

	function inviteAccessers() {
		dispatch(addUserToNote(noteId, markedUsers));
	}

	useEffect(() => {
		dispatch(getUsers())
			.then((data) => {
				console.log(data.data);
				const otherUsers = data.data.filter(
					(other) => other.email != user.email
				);

				setUsers(otherUsers);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [dispatch]);

	return (
		<Modal ref={modalRef}>
			<InputDiv border="$color-dark-1">
				<Input placeholder="Add emails or placeholder" />
				<Button
					bg="$color-brand"
					onClick={() => inviteAccessers()}>
					Invite
				</Button>
			</InputDiv>
			<UsersContainer>
				{loading ? (
					<SpinnerContainer>
						<Spinner />
					</SpinnerContainer>
				) : users.length ? (
					users.map((user) => (
						<User
							key={user.id}
							onClick={() => markUser(user.id)}>
							<UserImage
								src={
									user.picture ||
									initialsImage(
										40,
										`${user.first_name} ${user.last_name}`
									)
								}
								alt="user profile picture"
							/>
							<UserDetails>
								<Name>{`${user.first_name} ${user.last_name}`}</Name>
								<Email>{user.email}</Email>
							</UserDetails>
							{markedUsers.indexOf(user.id) > -1 ? (
								<CircleWithCheck>
									<CheckMark />
								</CircleWithCheck>
							) : null}
						</User>
					))
				) : (
					<div>Empty</div>
				)}
			</UsersContainer>
		</Modal>
	);
};

export default ShareModal;
