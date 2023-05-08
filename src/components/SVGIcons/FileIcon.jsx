import React from "react";
import PropTypes from "prop-types";

const FileIcon = ({ color = "black" }) => {
	return (
		<svg
			width="14"
			height="16"
			viewBox="0 0 14 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.87499 0.875L5.31251 0.875L1.37502 4.71154L1.37502 5.25962M5.87499 0.875L10.375 0.875C11.6176 0.875 12.625 1.85653 12.625 3.06731L12.625 12.9327C12.625 14.1435 11.6176 15.125 10.375 15.125L3.625 15.125C2.38236 15.125 1.375 14.1435 1.375 12.9327L1.37502 5.25962M5.87499 0.875L5.87499 5.25962L1.37502 5.25962"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

FileIcon.propTypes = {
	color: PropTypes.string.isRequired,
};

export default FileIcon;
