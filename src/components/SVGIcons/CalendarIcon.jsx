import React from "react";
import PropTypes from "prop-types";

const CalendarIcon = ({ color = "black" }) => {
	return (
		<svg
			width="15"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.125 5.80769L0.875 5.80769M4.71154 3.06731V0.875M11.2885 3.06731L11.2885 0.875M0.875 4.16347L0.875 12.9327C0.875 14.1435 1.85653 15.125 3.06731 15.125L12.9327 15.125C14.1435 15.125 15.125 14.1435 15.125 12.9327L15.125 4.16349C15.125 2.95271 14.1435 1.97118 12.9327 1.97118L3.06731 1.97116C1.85653 1.97116 0.875 2.95269 0.875 4.16347Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

CalendarIcon.propTypes = {
	color: PropTypes.string.isRequired,
};

export default CalendarIcon;
