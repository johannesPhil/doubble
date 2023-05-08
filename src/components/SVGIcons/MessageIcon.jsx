import React from "react";
import PropTypes from "prop-types";

const MessageIcon = ({ color = "black" }) => {
	return (
		<svg
			width="16"
			height="15"
			viewBox="0 0 16 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.1279 5.09722L4.79454 5.09722M9.01676 8.26388H4.79454M1.1001 3.875L1.1001 13.6676C1.1001 14.2776 1.78963 14.6325 2.28603 14.2779L4.79454 12.4861L11.8223 12.4861C13.4792 12.4861 14.8223 11.143 14.8223 9.4861L14.8223 3.87502C14.8223 2.21816 13.4792 0.875019 11.8223 0.875016L4.10011 0.875C2.44325 0.874997 1.1001 2.21814 1.1001 3.875Z"
				stroke={color}
				strokeLinecap="round"
			/>
		</svg>
	);
};

MessageIcon.propTypes = {
	color: PropTypes.string.isRequired,
};

export default MessageIcon;