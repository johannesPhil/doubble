import { useState } from "react";

export function useCursorTracking(initialValue) {
	const [cursorPosition, setCursorPosition] = useState(initialValue);

	function handleCursorPosition(event) {
		const newCursorPosition = event.target.selectionStart;
		setCursorPosition(newCursorPosition);
	}

	return [cursorPosition, handleCursorPosition];
}
