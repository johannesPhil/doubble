import React from "react";
import PlaceHolderElement from "./PlaceHolderElement";
import styled from "styled-components";

const Block = styled.div`
	display: grid;
	gap: 1rem;
	grid-auto-rows: min-content;
`;

const PlaceHolderBlock = () => {
	return (
		<Block>
			<Block>
				<PlaceHolderElement />
				<PlaceHolderElement width={"40vw"} />
				<PlaceHolderElement />
			</Block>
			<Block>
				<PlaceHolderElement />
				<PlaceHolderElement width={"40vw"} />
				<PlaceHolderElement />
			</Block>
			{/* <Block>
				<PlaceHolderElement />
				<PlaceHolderElement width={"40vw"} />
				<PlaceHolderElement />
			</Block> */}
		</Block>
	);
};

export default PlaceHolderBlock;
