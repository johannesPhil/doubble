import React from "react";
import styled from "styled-components";
import "../scss/abstracts/_variables.scss";
import { useCloseModals } from "../utils/closeModals";

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
	maxHeight: "20rem",
	overflowY: "auto",
});

const User = styled.div({
	display: "flex",
	gap: "1rem",
	alignItems: "center",
});

const UserDetails = styled.div({
	display: "grid",
	gap: ".5rem",
	justifyContent: "start",
	alignContent: "start",
});

const Name = styled.span({
	fontSize: "1.2rem",
	fontFamily: "AvertaStd-SemiBold",
});

const Email = styled.div({
	fontSize: "1rem",
	color: "#999ca0",
});

const ShareModal = ({ toggleVisibility }) => {
	const { modalRef } = useCloseModals(toggleVisibility);
	return (
		<Modal ref={modalRef}>
			<InputDiv border="$color-dark-1">
				<Input placeholder="Add emails or placeholder" />
				<Button bg="$color-brand">Invite</Button>
			</InputDiv>
			<UsersContainer>
				<User>
					<img
						src="/images/Background.png"
						alt=""
					/>
					<UserDetails>
						<Name>John Peter</Name>
						<Email>jay3pee@gmail.com</Email>
					</UserDetails>
				</User>
			</UsersContainer>
		</Modal>
	);
};

export default ShareModal;
