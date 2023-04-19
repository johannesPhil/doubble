import React from "react";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
`;
const Element = styled.div`
	width: ${(props) => (props.width ? props.width : "20vw")};
	height: 2rem;
	border-radius: 5px;
	background-image: linear-gradient(
		to right,
		#999ca0 0%,
		#e7e7fd 20%,
		#f3f3fd 40%,
		#999ca0 100%
	);
	background-repeat: no-repeat;
	background-size: 800% 100%;
	animation: ${shine} 2.5s ease-in-out infinite;
`;

const PlaceHolderElement = ({ width }) => {
	return <Element width={width}></Element>;
};

export default PlaceHolderElement;
