import React, { useEffect, useState, useRef } from "react";

export const useCloseModals = (toggleVisibility) => {
	const modalRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setTimeout(() => {
					toggleVisibility(false);
				}, 200);
			}
		};
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [modalRef]);

	return { modalRef };
};
