function throttleRequest(callback, delay) {
	let lastCall = 0;

	return function () {
		const now = Date.now();
		if (now - lastCall >= delay) {
			lastCall = now;
			callback.apply(this, arguments);
		}
	};
}

function debounceRequest(callback, delay) {
	let timeOutId;
	return function () {
		clearTimeout(timeOutId);
		timeOutId = setTimeout(() => {
			callback.apply(this, arguments);
		}, delay);
	};
}

export { throttleRequest, debounceRequest };
