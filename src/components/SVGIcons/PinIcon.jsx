import React from "react";
import PropTypes from "prop-types";

const PinIcon = ({ color = "black" }) => {
	return (
		<svg
			width="14"
			height="16"
			viewBox="0 0 14 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.99999 15.125L6.99999 11.2885M12.625 11.2885L1.375 11.2885C1.375 9.64746 1.95457 8.30891 3.10263 7.41382C3.41095 7.17344 3.625 6.82502 3.625 6.44027L3.625 3.06731C3.625 1.85653 4.63236 0.875 5.875 0.875L8.125 0.875C9.36764 0.875 10.375 1.85653 10.375 3.06731V6.44027C10.375 6.82502 10.5891 7.17344 10.8974 7.41382C12.0454 8.30891 12.625 9.64746 12.625 11.2885Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

PinIcon.propTypes = {
	color: PropTypes.string.isRequired,
};

export default PinIcon;
